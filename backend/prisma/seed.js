const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const prisma = new PrismaClient();


async function main() {
  // --- Country & City ---
  const countriesData = [
    {
      name: 'Indonesia', code: 'ID', cities: [
        { name: 'Jakarta', lat: -6.2, lng: 106.816666 },
        { name: 'Bali', lat: -8.409518, lng: 115.188919 },
        { name: 'Yogyakarta', lat: -7.797068, lng: 110.370529 },
        { name: 'Bandung', lat: -6.917464, lng: 107.619123 },
        { name: 'Surabaya', lat: -7.257472, lng: 112.752088 }
      ]
    },
    {
      name: 'Japan', code: 'JP', cities: [
        { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
        { name: 'Osaka', lat: 34.6937, lng: 135.5023 }
      ]
    },
    {
      name: 'France', code: 'FR', cities: [
        { name: 'Paris', lat: 48.8566, lng: 2.3522 }
      ]
    }
  ];

  const countries = [];
  for (const c of countriesData) {
    let country = await prisma.country.findUnique({ where: { code: c.code }, include: { cities: true } });
    if (!country) {
      country = await prisma.country.create({
        data: {
          name: c.name,
          code: c.code,
          cities: { create: c.cities }
        },
        include: { cities: true }
      });
    }
    countries.push(country);
  }

  // --- Language ---
  const languageNames = ['Bahasa Indonesia', 'English', 'Japanese', 'French'];
  const languages = [];
  for (const name of languageNames) {
    let lang = await prisma.language.findUnique({ where: { name } });
    if (!lang) lang = await prisma.language.create({ data: { name } });
    languages.push(lang);
  }

  // --- Users & Hosts ---
  const passwordHash = await bcrypt.hash('password123', 10);
  const users = [];
  for (let i = 1; i <= 5; i++) {
    let user = await prisma.user.findUnique({ where: { email: `user${i}@mail.com` } });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email: `user${i}@mail.com`,
          password: passwordHash,
          name: `User ${i}`,
          countryId: countries[0].id,
          cityId: countries[0].cities[i % countries[0].cities.length].id,
          role: 'TRAVELLER',
          stories: {
            create: [{
              type: 'TRAVELER',
              title: `My Trip #${i}`,
              content: `It was awesome! #${i}`,
              imageUrl: 'https://picsum.photos/200?random=' + i,
              location: countries[0].cities[i % countries[0].cities.length].name,
              postedAt: new Date()
            }]
          }
        }
      });
    }
    users.push(user);
  }

  const hosts = [];
  for (let i = 1; i <= 5; i++) {
    let hostUser = await prisma.user.findUnique({ where: { email: `host${i}@mail.com` }, include: { host: { include: { services: true } } } });
    if (!hostUser) {
      hostUser = await prisma.user.create({
        data: {
          email: `host${i}@mail.com`,
          password: passwordHash,
          name: `Host ${i}`,
          countryId: countries[0].id,
          cityId: countries[0].cities[i % countries[0].cities.length].id,
          role: 'HOST',
          host: {
            create: {
              countryId: countries[0].id,
              cityId: countries[0].cities[i % countries[0].cities.length].id,
              lat: countries[0].cities[i % countries[0].cities.length].lat,
              lng: countries[0].cities[i % countries[0].cities.length].lng,
              isGuide: true,
              isPhotographer: i % 2 === 0,
              isVerified: true,
              languages: {
                create: [
                  { languageId: languages[0].id },
                  { languageId: languages[1].id }
                ]
              },
              services: {
                create: [
                  {
                    title: `Tour ${i}`,
                    description: `Explore city ${i}`,
                    type: 'GUIDE',
                    price: 500000 + i * 10000,
                    currency: 'IDR',
                    duration: 8,
                    tags: ['tour', 'city'],
                    images: [`https://picsum.photos/300?random=${i}`]
                  },
                  {
                    title: `Photo Experience ${i}`,
                    description: `Photo session in city ${i}`,
                    type: 'PHOTOGRAPHER',
                    price: 700000 + i * 10000,
                    currency: 'IDR',
                    duration: 4,
                    tags: ['photo', 'session'],
                    images: [`https://picsum.photos/301?random=${i}`]
                  }
                ]
              }
            }
          }
        },
        include: { host: { include: { services: true } } }
      });
    }
    hosts.push(hostUser);
  }

  // --- Bookings, Reviews, Wishlist ---
  for (let i = 0; i < 5; i++) {
    const booking = await prisma.booking.create({
      data: {
        userId: users[i].id,
        serviceId: hosts[i].host.services[0].id,
        date: new Date(),
        adults: 2,
        children: 1,
        contactMethod: 'WHATSAPP',
        contactDetail: '+628123456789',
        meetingPoint: 'Airport',
        totalPrice: 500000 + i * 10000,
        currency: 'IDR',
        status: 'CONFIRMED'
      }
    });
    await prisma.review.create({
      data: {
        bookingId: booking.id,
        hostId: hosts[i].host.id,
        rating: 4 + (i % 2),
        comment: `Great experience #${i}`
      }
    });
    let wishlist = await prisma.wishlist.findFirst({
      where: {
        userId: users[i].id,
        serviceId: hosts[i].host.services[1].id
      }
    });
    if (!wishlist) {
      await prisma.wishlist.create({
        data: {
          userId: users[i].id,
          serviceId: hosts[i].host.services[1].id
        }
      });
    }
  }

  // --- PromoCode ---
  let promo = await prisma.promoCode.findUnique({ where: { code: 'PROMO50' } });
  if (!promo) {
    await prisma.promoCode.create({
      data: {
        code: 'PROMO50',
        title: 'Diskon 50%',
        description: 'Diskon 50% untuk semua layanan',
        discountType: 'percentage',
        amount: 50,
        validFrom: new Date(),
        validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        usageLimit: 10
      }
    });
  }

  // --- TopDestination ---
  const allCities = await prisma.city.findMany();
  for (let i = 0; i < 5; i++) {
    let topDest = await prisma.topDestination.findUnique({ where: { cityId: allCities[i].id } });
    if (!topDest) {
      await prisma.topDestination.create({
        data: {
          cityId: allCities[i].id,
          order: i + 1,
          imageUrl: `https://picsum.photos/400?random=${i}`
        }
      });
    }
  }
}

main()
  .then(() => {
    console.log('Seeding selesai!');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });
