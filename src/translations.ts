export type Language = 'en' | 'ar' | 'id';

export interface Translation {
  nav: {
    home: string;
    services: string;
    packages: string;
    gallery: string;
    reviews: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    bookViaWhatsApp: string;
    viewServices: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      fullBody60: string;
      fullBody90: string;
      fullBody120: string;
      footMassage60: string;
    };
    price: string;
    minutes: string;
  };
  booking: {
    title: string;
    subtitle: string;
    fullName: string;
    whatsappNumber: string;
    hotelName: string;
    roomNumber: string;
    serviceType: string;
    bookingDate: string;
    preferredTime: string;
    gender: string;
    male: string;
    female: string;
    additionalNotes: string;
    submit: string;
    toastTitle: string;
    toast: string;
    whatsappMessagePrefix: string;
  };
  benefits: {
    title: string;
    items: {
      stressRelief: string;
      sleep: string;
      muscle: string;
      umrah: string;
      fatigue: string;
      circulation: string;
    };
  };
  about: {
    title: string;
    content: string;
    highlightTitle: string;
    highlights: string[];
  };
  contact: {
    title: string;
    info: string;
    whatsapp: string;
    call: string;
    email: string;
    hours: string;
    location: string;
  };
  footer: {
    quickLinks: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      packages: 'Packages',
      gallery: 'Gallery',
      reviews: 'Reviews',
      about: 'About',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
    hero: {
      headline: 'Professional Hotel Massage in Madinah',
      subheadline: 'Certified professional massage delivered directly to your hotel room near Masjid Nabawi. Male therapists for men, female therapists for women. Relieve fatigue and recover your body after Umrah.',
      bookViaWhatsApp: 'Book via WhatsApp',
      viewServices: 'View Services',
    },
    services: {
      title: 'Our Wellness Services',
      subtitle: 'Professional treatments tailored for your recovery and relaxation',
      items: {
        fullBody60: 'Full Body Massage 60 Minutes',
        fullBody90: 'Full Body Massage 90 Minutes',
        fullBody120: 'Full Body Massage 120 Minutes',
        footMassage60: 'Foot Massage 60 Minutes',
      },
      price: 'SAR',
      minutes: 'Min',
    },
    booking: {
      title: 'Reserve Your Session',
      subtitle: 'Complete the form below and we will contact you immediately',
      fullName: 'Full Name',
      whatsappNumber: 'WhatsApp Number',
      hotelName: 'Hotel Name / Location',
      roomNumber: 'Room Number',
      serviceType: 'Service Type',
      bookingDate: 'Booking Date',
      preferredTime: 'Preferred Time',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      additionalNotes: 'Additional Notes',
      submit: 'Confirm Booking',
      toastTitle: 'Booking in Progress',
      toast: 'Please complete your booking details first so we can serve you better.',
      whatsappMessagePrefix: 'Hello Madinah Massage! I would like to book a massage service.',
    },
    benefits: {
      title: 'Beneifts of Our Therapy',
      items: {
        stressRelief: 'Stress Relief',
        sleep: 'Better Sleep',
        muscle: 'Muscle Recovery',
        umrah: 'Relaxation After Umrah',
        fatigue: 'Reduced Fatigue',
        circulation: 'Improved Blood Circulation',
      },
    },
    about: {
      title: 'About Madinah Massage',
      content: 'MADINAH MASSAGE is a professional mobile massage service in Madinah. We specialize in providing professional wellness treatments directly to your hotel, apartment, or residence. Our mission is to support pilgrims and travelers in their journey by offering the ultimate relaxation experience near the Holy Mosque.',
      highlightTitle: 'Why Choose Us?',
      highlights: [
        'Professional & Certified Therapists',
        'Hygienic & Professional Equipment',
        'Muslim-Friendly & Private',
        'Direct Hotel / Home Visits',
        'Professional Hospitality Standards',
      ],
    },
    contact: {
      title: 'Get In Touch',
      info: 'Contact us for any inquiries or special requests',
      whatsapp: 'WhatsApp',
      call: 'Call Us',
      email: 'Email',
      hours: 'Operating Hours',
      location: 'Service Area',
    },
    footer: {
      quickLinks: 'Quick Links',
      rights: 'All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'خدماتنا',
      packages: 'الباقات',
      gallery: 'المعرض',
      reviews: 'التقييمات',
      about: 'من نحن',
      contact: 'اتصل بنا',
      bookNow: 'احجز الآن',
    },
    hero: {
      headline: 'مساج فندقي احترافي في المدينة المنورة',
      subheadline: 'جلسات مساج احترافية معتمدة تصل مباشرة إلى غرفتك الفندقية بالقرب من المسجد النبوي. معالجون للرجال، ومعالجات للنساء. تخلص من التعب واستعد نشاط جسمك بعد العمرة.',
      bookViaWhatsApp: 'احجز عبر واتساب',
      viewServices: 'عرض الخدمات',
    },
    services: {
      title: 'خدمات العافية لدينا',
      subtitle: 'علاجات احترافية مصممة لاستعادتك واسترخائك',
      items: {
        fullBody60: 'مساج كامل للجسم 60 دقيقة',
        fullBody90: 'مساج كامل للجسم 90 دقيقة',
        fullBody120: 'مساج كامل للجسم 120 دقيقة',
        footMassage60: 'مساج للقدمين 60 دقيقة',
      },
      price: 'ريد',
      minutes: 'دقيقة',
    },
    booking: {
      title: 'احجز جلستك',
      subtitle: 'أكمل النموذج أدناه وسنتصل بك على الفور',
      fullName: 'الاسم الكامل',
      whatsappNumber: 'رقم الواتساب',
      hotelName: 'اسم الفندق / الموقع',
      roomNumber: 'رقم الغرفة',
      serviceType: 'نوع الخدمة',
      bookingDate: 'تاريخ الحجز',
      preferredTime: 'الوقت المفضل',
      gender: 'الجنس',
      male: 'ذكر',
      female: 'أنثى',
      additionalNotes: 'ملاحظات إضافية',
      submit: 'تأكيد الحجز',
      toastTitle: 'الحجز قيد المعالجة',
      toast: 'يرجى إكمال تفاصيل الحجز أولاً حتى نتمكن من خدمتك بشكل أفضل.',
      whatsappMessagePrefix: 'مرحباً مساج المدينة! أود حجز خدمة مساج.',
    },
    benefits: {
      title: 'فوائد علاجنا',
      items: {
        stressRelief: 'تخفيف التوتر',
        sleep: 'نوم أفضل',
        muscle: 'استشفاء العضلات',
        umrah: 'الاسترخاء بعد العمرة',
        fatigue: 'تقليل التعب',
        circulation: 'تحسين الدورة الدموية',
      },
    },
    about: {
      title: 'حول مساج المدينة',
      content: 'مساج المدينة هو خدمة تدليك متنقلة احترافية في المدينة المنورة. نحن متخصصون في تقديم علاجات عافية احترافية مباشرة إلى فندقك أو شقتك أو سكنك. مهمتنا هي دعم المعتمرين والمسافرين في رحلتهم من خلال تقديم تجربة استرخاء مثالية بالقرب من الحرم الشريف.',
      highlightTitle: 'لماذا تختارنا؟',
      highlights: [
        'معالجون محترفون ومعتمدون',
        'معدات صحية واحترافية',
        'صديق للمسلمين وخصوصية تامة',
        'زيارات مباشرة للفنادق والمنازل',
        'معايير ضيافة احترافية',
      ],
    },
    contact: {
      title: 'تواصل معنا',
      info: 'اتصل بنا لأي استفسارات أو طلبات خاصة',
      whatsapp: 'واتساب',
      call: 'اتصل بنا',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      location: 'منطقة الخدمة',
    },
    footer: {
      quickLinks: 'روابط سريعة',
      rights: 'جميع الحقوق محفوظة.',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      services: 'Layanan',
      packages: 'Paket',
      gallery: 'Galeri',
      reviews: 'Ulasan',
      about: 'Tentang',
      contact: 'Kontak',
      bookNow: 'Pesan Sekarang',
    },
    hero: {
      headline: 'Pijat Hotel Profesional di Madinah',
      subheadline: 'Layanan pijat profesional bersertifikat didatangkan langsung ke kamar hotel Anda di dekat Masjid Nabawi. Terapis pria untuk pria, terapis wanita untuk wanita. Hilangkan rasa lelah dan pulihkan tubuh Anda setelah Umroh.',
      bookViaWhatsApp: 'Pesan via WhatsApp',
      viewServices: 'Lihat Layanan',
    },
    services: {
      title: 'Layanan Kebugaran Kami',
      subtitle: 'Perawatan profesional yang disesuaikan untuk pemulihan dan relaksasi Anda',
      items: {
        fullBody60: 'Pijat Seluruh Tubuh 60 Menit',
        fullBody90: 'Pijat Seluruh Tubuh 90 Menit',
        fullBody120: 'Pijat Seluruh Tubuh 120 Menit',
        footMassage60: 'Pijat Kaki 60 Menit',
      },
      price: 'SAR',
      minutes: 'Menit',
    },
    booking: {
      title: 'Reservasi Sesi Anda',
      subtitle: 'Lengkapi formulir di bawah ini dan kami akan segera menghubungi Anda',
      fullName: 'Nama Lengkap',
      whatsappNumber: 'Nomor WhatsApp',
      hotelName: 'Nama Hotel / Lokasi',
      roomNumber: 'Nomor Kamar',
      serviceType: 'Jenis Layanan',
      bookingDate: 'Tanggal Pemesanan',
      preferredTime: 'Waktu yang Diinginkan',
      gender: 'Jenis Kelamin',
      male: 'Laki-laki',
      female: 'Perempuan',
      additionalNotes: 'Catatan Tambahan',
      submit: 'Konfirmasi Pesanan',
      toastTitle: 'Pemesanan Sedang Berlangsung',
      toast: 'Silakan lengkapi detail pesanan Anda terlebih dahulu agar kami dapat melayani Anda dengan lebih baik.',
      whatsappMessagePrefix: 'Halo Madinah Massage! Saya ingin memesan layanan pijat.',
    },
    benefits: {
      title: 'Manfaat Terapi Kami',
      items: {
        stressRelief: 'Penghilang Stres',
        sleep: 'Tidur Lebih Nyenyak',
        muscle: 'Pemulihan Otot',
        umrah: 'Relaksasi Setelah Umroh',
        fatigue: 'Mengurangi Kelelahan',
        circulation: 'Meningkatkan Sirkulasi Darah',
      },
    },
    about: {
      title: 'Tentang Madinah Massage',
      content: 'MADINAH MASSAGE adalah layanan pijat panggilan profesional di Madinah. Kami spesialis dalam menyediakan perawatan kebugaran profesional langsung ke hotel, apartemen, atau kediaman Anda. Misi kami adalah mendukung para jemaah dan pelancong dalam perjalanan mereka dengan menawarkan pengalaman relaksasi terbaik di dekat Masjid Nabawi.',
      highlightTitle: 'Mengapa Memilih Kami?',
      highlights: [
        'Terapis Profesional & Bersertifikat',
        'Peralatan Higienis & Profesional',
        'Ramah Muslim & Privasi Terjaga',
        'Kunjungan Langsung ke Hotel / Rumah',
        'Standar Hospitalitas Profesional',
      ],
    },
    contact: {
      title: 'Hubungi Kami',
      info: 'Hubungi kami untuk pertanyaan atau permintaan khusus',
      whatsapp: 'WhatsApp',
      call: 'Telepon',
      email: 'Email',
      hours: 'Jam Operasional',
      location: 'Area Layanan',
    },
    footer: {
      quickLinks: 'Tautan Cepat',
      rights: 'Hak cipta dilindungi undang-undang.',
    },
  },
};
