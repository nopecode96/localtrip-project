const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /explore/hosts?country=&city=&type=&language=&q=
exports.getHosts = async (req, res) => {
  try {
    const { country, city, type, language, q } = req.query;
    const where = {};

    if (country) where.country = { name: country };
    if (city) where.city = { name: city };
    if (language) where.languages = { some: { language: { name: language } } };
    if (type) where.services = { some: { type } };
    if (q) where.user = { name: { contains: q, mode: 'insensitive' } };

    const hosts = await prisma.host.findMany({
      where,
      include: {
        user: true,
        city: { include: { country: true } },
        languages: { include: { language: true } },
        services: true,
      },
      orderBy: { user: { name: 'asc' } },
      take: 30,
    });

    // Normalisasi data untuk frontend
    const result = hosts.map(h => ({
      id: h.id,
      slug: h.user?.slug || h.id,
      name: h.user?.name || '-',
      city: h.city?.name || '-',
      country: h.city?.country?.name || '-',
      coverImage: h.coverImage || '/images/cover1.png',
      avatar: h.user?.avatarUrl || '/images/profile1.png',
      languages: h.languages.map(l => l.language.name),
      rating: h.rating,
      isVerified: h.isVerified,
      services: h.services.map(s => ({
        type: s.type,
        title: s.title,
        price: s.price,
      })),
    }));

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch hosts' });
  }
};

// GET /explore/filters
exports.getFilters = async (req, res) => {
  try {
    const countries = await prisma.country.findMany({ select: { name: true } });
    const cities = await prisma.city.findMany({ select: { name: true } });
    const languages = await prisma.language.findMany({ select: { name: true } });
    // Service types bisa di-hardcode atau dari enum di Prisma
    const types = ['PHOTOGRAPHER', 'TOUR_GUIDE'];

    res.json({
      countries: countries.map(c => c.name),
      cities: cities.map(c => c.name),
      languages: languages.map(l => l.name),
      types,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch filters' });
  }
};
