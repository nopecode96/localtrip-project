const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getHomepageData = async (req, res) => {
  try {
    // StatSection
    const totalUsers = await prisma.user.count();
    const totalDestinations = await prisma.city.count();
    const totalBookings = await prisma.booking.count();
    // ...existing code...
    res.json({
      stats: { totalUsers, totalDestinations, totalBookings },
      topDestinations,
      topExperiences,
      reviews,
      stories
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Location suggest endpoint
exports.locationSuggest = async (req, res) => {
  const { query } = req.query;
  if (!query || query.length < 2) {
    return res.json([]);
  }

  try {
    // Cari kota
    const cities = await prisma.city.findMany({
      where: {
        name: { contains: query, mode: 'insensitive' }
      },
      include: { country: true }
    });

    // Cari negara
    const countries = await prisma.country.findMany({
      where: {
        name: { contains: query, mode: 'insensitive' }
      }
    });

    // Gabungkan hasil, format label
    const results = [
      ...cities.map(city => ({
        label: `${city.name}, ${city.country.name}`,
        type: 'city',
        cityId: city.id,
        countryId: city.countryId
      })),
      ...countries.map(country => ({
        label: country.name,
        type: 'country',
        countryId: country.id
      }))
    ];

    // Hilangkan duplikat label
    const unique = [];
    const seen = new Set();
    for (const item of results) {
      if (!seen.has(item.label)) {
        unique.push(item);
        seen.add(item.label);
      }
    }

    res.json(unique);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getHomepageData = async (req, res) => {
  try {
    // StatSection
    const totalUsers = await prisma.user.count();
    const totalDestinations = await prisma.city.count();
    const totalBookings = await prisma.booking.count();


    // TopDestination (ambil dari tabel TopDestination, urutkan sesuai order)
    const topDestinations = await prisma.topDestination.findMany({
      orderBy: { order: 'asc' },
      include: {
        city: {
          include: { country: true }
        }
      }
    });

    // TopExperience (5 service dengan booking terbanyak)
    const topExperiences = await prisma.service.findMany({
      take: 5,
      orderBy: {
        bookings: {
          _count: 'desc'
        }
      },
      include: {
        host: {
          include: {
            user: true,
            city: true,
            country: true,
            languages: {
              include: {
                language: true
              }
            }
          }
        }
      }
    });

    // ReviewSection (5 review terbaru)
    const reviews = await prisma.review.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        booking: {
          include: {
            user: true,
            service: true
          }
        },
        host: {
          include: {
            user: true
          }
        }
      }
    });

    // StorySection (3 story terbaru)
    const stories = await prisma.story.findMany({
      take: 3,
      orderBy: { postedAt: 'desc' },
      include: {
        user: true
      }
    });

    res.json({
      stats: { totalUsers, totalDestinations, totalBookings },
      topDestinations,
      topExperiences,
      reviews,
      stories
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
