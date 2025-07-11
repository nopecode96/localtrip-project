# LocalTrip Backend Seed Data Summary

## ✅ Berhasil Dijalankan

### 1. Database Migration
- Migrasi database berhasil dijalankan dengan Prisma
- Semua tabel telah dibuat sesuai schema

### 2. Seed Data
- **10 Users**: 5 Travellers + 5 Hosts
- **3 Countries**: Indonesia, Japan, France
- **8 Cities**: Jakarta, Bali, Yogyakarta, Bandung, Surabaya, Tokyo, Osaka, Paris
- **5 Top Destinations**: Berdasarkan kota-kota di Indonesia
- **4 Languages**: Bahasa Indonesia, English, Japanese, French
- **10 Services**: 5 Tours + 5 Photo Experiences
- **5 Bookings**: Dengan status confirmed
- **5 Reviews**: Rating 4-5 stars
- **5 Stories**: Travel stories dari users
- **5 Wishlist**: Item wishlist dari users
- **1 Promo Code**: PROMO50 dengan diskon 50%

### 3. API Endpoints Aktif
- `GET /homepage` - Data homepage dengan stats, destinations, experiences, reviews, stories
- `GET /story` - Daftar travel stories
- `GET /health` - Health check endpoint
- `GET /` - Basic API info

### 4. Sample Data Created
**Countries & Cities:**
- Indonesia: Jakarta, Bali, Yogyakarta, Bandung, Surabaya
- Japan: Tokyo, Osaka
- France: Paris

**Users:**
- user1@mail.com sampai user5@mail.com (Travellers)
- host1@mail.com sampai host5@mail.com (Hosts)
- Password: password123 (hashed)

**Services:**
- Tours: IDR 500,000 - 550,000 (8 hours)
- Photo Experiences: IDR 700,000 - 750,000 (4 hours)
- Gambar: Random dari picsum.photos

**Reviews:**
- Rating 4-5 stars
- Komentar: "Great experience #1" dst
- Semua terkait dengan bookings

**Stories:**
- Tipe: TRAVELER
- Judul: "My Trip #1" dst
- Konten: "It was awesome! #1" dst
- Lokasi: Berbagai kota di Indonesia

### 5. Testing URLs
- Main API: https://api.localtrip.me
- Homepage Data: https://api.localtrip.me/homepage
- Stories: https://api.localtrip.me/story
- Health Check: https://api.localtrip.me/health
- Main Website: https://localtrip.me

### 6. Database Stats
- Total Users: 10
- Total Destinations: 8
- Total Bookings: 5
- Total Services: 10
- Total Reviews: 5
- Total Stories: 5

### 7. Promo Code
- Code: PROMO50
- Discount: 50% percentage
- Valid: 7 days from creation
- Usage Limit: 10 times

## 📋 Next Steps
1. Website seharusnya sekarang menampilkan data yang sebenarnya
2. Semua endpoint API sudah memiliki dummy data
3. Bisa mulai testing frontend integration
4. Tambahkan lebih banyak data jika diperlukan
5. Konfigurasi image uploads untuk replace picsum.photos

## 🔧 Commands untuk Management
```bash
# Lihat data di database
sudo docker exec backend-localtrip npx prisma studio

# Jalankan seed ulang jika diperlukan
sudo docker exec backend-localtrip node prisma/seed.js

# Reset database (hati-hati!)
sudo docker exec backend-localtrip npx prisma migrate reset
```

## 📊 Database Schema
Semua model telah diisi dengan dummy data:
- Country, City, TopDestination
- User, Host, HostLanguage
- Service, Booking, Review
- Story, StoryLike, StoryComment
- Wishlist, PromoCode
- Language, PhotographerSkill, PhotographerGear

Data dummy ini memberikan representasi lengkap dari semua fitur aplikasi LocalTrip!
