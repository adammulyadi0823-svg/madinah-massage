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
    genderTag: string;
    items: {
      fullBody60: string;
      fullBody90: string;
      fullBody120: string;
      footMassage60: string;
    };
    price: string;
    minutes: string;
    features: {
      fullBody60: string[];
      fullBody90: string[];
      fullBody120: string[];
      footMassage60: string[];
    };
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
    tag: string;
    namePlaceholder: string;
    hotelPlaceholder: string;
    roomPlaceholder: string;
    meccaTimeLabel: string;
  };
  benefits: {
    title: string;
    subtitle: string;
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
    tag: string;
    content: string;
    highlightTitle: string;
    highlights: string[];
    pilgrimsServed: string;
    learnMore: string;
  };
  gallery: {
    tag: string;
    title: string;
  };
  reviews: {
    tag: string;
    happyClients: string;
    dailyTreatments: string;
    reviewRating: string;
  };
  contact: {
    title: string;
    info: string;
    whatsapp: string;
    call: string;
    email: string;
    hours: string;
    location: string;
    contactTag: string;
    locationDesc: string;
    hoursDesc: string;
  };
  footer: {
    quickLinks: string;
    footerDesc: string;
    footerServices: string;
    footerSupport: string;
    footerSvcsList: string[];
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
      headline: 'Professional Hotel Call-Out Massage in Madinah',
      subheadline: 'We come to your hotel room anywhere around Masjid Nabawi. Certified male & female therapists delivering professional recovery straight to you. Male therapists for men, female therapists for women.',
      bookViaWhatsApp: 'Book via WhatsApp',
      viewServices: 'View Services',
    },
    services: {
      title: 'Our Professional Services',
      subtitle: 'Professional treatments tailored for your recovery and relaxation',
      genderTag: 'Male Therapists for Men, Female Therapists for Women',
      items: {
        fullBody60: 'Full Body Massage 60 Minutes',
        fullBody90: 'Full Body Massage 90 Minutes',
        fullBody120: 'Full Body Massage 120 Minutes',
        footMassage60: 'Foot Massage 60 Minutes',
      },
      price: 'SAR',
      minutes: 'Min',
      features: {
        fullBody60: ['Deep Relaxation', 'Oil Massage', 'Full Body Focus'],
        fullBody90: ['Extended Stress Relief', 'Full Muscle Recovery', 'Professional Oils'],
        fullBody120: ['Ultimate Rejuvenation', 'Total Body Care', 'Sleep Better Focus'],
        footMassage60: ['Foot Reflexology', 'Warm Towel', 'Herbal Water Soak']
      }
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
      tag: 'Reservations',
      namePlaceholder: 'Your Name',
      hotelPlaceholder: 'Hotel Name',
      roomPlaceholder: 'Room No',
      meccaTimeLabel: 'Mecca Time'
    },
    benefits: {
      title: 'Benefits of Our Therapy',
      subtitle: 'Why Madinah Massage',
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
      tag: 'The Heritage',
      content: 'MADINAH MASSAGE is a professional mobile massage service in Madinah. We specialize in providing professional wellness treatments directly to your hotel, apartment, or residence. Our mission is to support pilgrims and travelers in their journey by offering the ultimate relaxation experience near the Holy Mosque.',
      highlightTitle: 'Why Choose Us?',
      highlights: [
        'Professional & Certified Therapists',
        'Hygienic & Professional Equipment',
        'Muslim-Friendly & Private',
        'Direct Hotel / Home Visits',
        'Professional Hospitality Standards',
      ],
      pilgrimsServed: 'Pilgrims Served',
      learnMore: 'Learn more about our standards'
    },
    gallery: {
      tag: 'The Ambiance',
      title: 'Visual Gallery'
    },
    reviews: {
      tag: 'Client Testimonials',
      happyClients: 'Happy Clients',
      dailyTreatments: 'Daily Treatments',
      reviewRating: 'Review Rating'
    },
    contact: {
      title: 'Get In Touch',
      info: 'Contact us for any inquiries or special requests',
      whatsapp: 'WhatsApp',
      call: 'Call Us',
      email: 'Email',
      hours: 'Operating Hours',
      location: 'Service Area',
      contactTag: 'Get In Touch',
      locationDesc: 'Central Madinah & Hotels near Masjid Nabawi. We come to you.',
      hoursDesc: '24 Hours / 7 Days. Global Concierge Standards.'
    },
    footer: {
      quickLinks: 'Quick Links',
      footerDesc: 'Crafting professional wellness experiences for the global pilgrim in the Heart of Madinah. Redefining mobile spa services with professional standards.',
      footerServices: 'Services',
      footerSupport: 'Support',
      footerSvcsList: ['Full Body Therapy', 'Foot Reflexology', 'Umrah Recovery', 'Deep Tissue']
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
      headline: 'مساج فندقي احترافي بالطلب في المدينة المنورة',
      subheadline: 'نأتي إلى غرفتك الفندقية في أي مكان حول المسجد النبوي. معالجون ومعالجات معتمدون يقدمون خدمات الاستشفاء الاحترافية إليك مباشرة. معالجون للرجال ومعالجات للنساء.',
      bookViaWhatsApp: 'احجز عبر واتساب',
      viewServices: 'عرض الخدمات',
    },
    services: {
      title: 'خدماتنا الاحترافية',
      subtitle: 'علاجات احترافية مصممة لاستعادتك واسترخائك',
      genderTag: 'معالجون للرجال، ومعالجات للنساء',
      items: {
        fullBody60: 'مساج كامل للجسم 60 دقيقة',
        fullBody90: 'مساج كامل للجسم 90 دقيقة',
        fullBody120: 'مساج كامل للجسم 120 دقيقة',
        footMassage60: 'مساج للقدمين 60 دقيقة',
      },
      price: 'ريال',
      minutes: 'دقيقة',
      features: {
        fullBody60: ['استرخاء عميق', 'مساج بالزيت', 'تركيز كامل للجسم'],
        fullBody90: ['تخفيف التوتر الممدد', 'استعادة كاملة للعضلات', 'زيوت احترافية'],
        fullBody120: ['تجديد مثالي للنشاط', 'عناية كاملة بالجسم', 'تركيز لنوم أفضل'],
        footMassage60: ['تدليك انعكاسي للقدمين', 'منشفة دافئة', 'نقع بالماء العشبي']
      }
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
      tag: 'الحجوزات',
      namePlaceholder: 'اسمك',
      hotelPlaceholder: 'اسم الفندق',
      roomPlaceholder: 'رقم الغرفة',
      meccaTimeLabel: 'توقيت مكة'
    },
    benefits: {
      title: 'فوائد علاجنا',
      subtitle: 'لماذا مساج المدينة',
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
      tag: 'تراثنا',
      content: 'مساج المدينة هو خدمة تدليك متنقلة احترافية في المدينة المنورة. نحن متخصصون في تقديم علاجات عافية احترافية مباشرة إلى فندقك أو شقتك أو سكنك. مهمتنا هي دعم المعتمرين والمسافرين في رحلتهم من خلال تقديم تجربة استرخاء مثالية بالقرب من الحرم الشريف.',
      highlightTitle: 'لماذا تختارنا؟',
      highlights: [
        'معالجون محترفون ومعتمدون',
        'معدات صحية واحترافية',
        'صديق للمسلمين وخصوصية تامة',
        'زيارات مباشرة للفنادق والمنازل',
        'معايير ضيافة احترافية',
      ],
      pilgrimsServed: 'معتمر مخدوم',
      learnMore: 'تعرف على المزيد عن معاييرنا'
    },
    gallery: {
      tag: 'الأجواء',
      title: 'معرض الصور'
    },
    reviews: {
      tag: 'آراء عملائنا',
      happyClients: 'العملاء السعداء',
      dailyTreatments: 'جلسات يومية',
      reviewRating: 'تقييم المراجعات'
    },
    contact: {
      title: 'تواصل معنا',
      info: 'اتصل بنا لأي استفسارات أو طلبات خاصة',
      whatsapp: 'واتساب',
      call: 'اتصل بنا',
      email: 'البريد الإلكتروني',
      hours: 'ساعات العمل',
      location: 'منطقة الخدمة',
      contactTag: 'تواصل معنا',
      locationDesc: 'وسط المدينة المنورة والفنادق القريبة من المسجد النبوي. نأتي إليك.',
      hoursDesc: '٢٤ ساعة / ٧ أيام. معايير ضيافة عالمية.'
    },
    footer: {
      quickLinks: 'روابط سريعة',
      footerDesc: 'صياغة تجارب عافية احترافية للمعتمرين من جميع أنحاء العالم في قلب المدينة المنورة. إعادة تعريف خدمات السبا المتنقلة بمعايير احترافية.',
      footerServices: 'خدماتنا',
      footerSupport: 'الدعم',
      footerSvcsList: ['جسم كامل', 'مساج قدمين', 'استشفاء العمرة', 'أنسجة عميقة']
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
      headline: 'Pijat Panggilan Hotel Profesional di Madinah',
      subheadline: 'Kami datang ke kamar hotel Anda di mana saja di sekitar Masjid Nabawi. Terapis pria & wanita bersertifikat menghadirkan layanan pemulihan profesional langsung ke tempat Anda. Terapis pria untuk pria, terapis wanita untuk wanita.',
      bookViaWhatsApp: 'Pesan via WhatsApp',
      viewServices: 'Lihat Layanan',
    },
    services: {
      title: 'Layanan Profesional Kami',
      subtitle: 'Perawatan profesional yang disesuaikan untuk pemulihan dan relaksasi Anda',
      genderTag: 'Terapis Pria untuk Pria, Terapis Wanita untuk Wanita',
      items: {
        fullBody60: 'Pijat Seluruh Tubuh 60 Menit',
        fullBody90: 'Pijat Seluruh Tubuh 90 Menit',
        fullBody120: 'Pijat Seluruh Tubuh 120 Menit',
        footMassage60: 'Pijat Kaki 60 Menit',
      },
      price: 'SAR',
      minutes: 'Menit',
      features: {
        fullBody60: ['Relaksasi Mendalam', 'Pijat Minyak', 'Fokus Seluruh Tubuh'],
        fullBody90: ['Pereda Stres Ekstra', 'Pemulihan Otot Total', 'Minyak Profesional'],
        fullBody120: ['Peremajaan Maksimal', 'Perawatan Seluruh Tubuh', 'Fokus Tidur Nyenyak'],
        footMassage60: ['Refleksologi Kaki', 'Handuk Hangat', 'Rendaman Air Herbal']
      }
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
      tag: 'Reservasi',
      namePlaceholder: 'Nama Anda',
      hotelPlaceholder: 'Nama Hotel',
      roomPlaceholder: 'No Kamar',
      meccaTimeLabel: 'Waktu Makkah'
    },
    benefits: {
      title: 'Manfaat Terapi Kami',
      subtitle: 'Mengapa Madinah Massage',
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
      tag: 'Warisan Kami',
      content: 'MADINAH MASSAGE adalah layanan pijat panggilan profesional di Madinah. Kami spesialis dalam menyediakan perawatan kebugaran profesional langsung ke hotel, apartemen, atau kediaman Anda. Misi kami adalah mendukung para jemaah dan pelancong dalam perjalanan mereka dengan menawarkan pengalaman relaksasi terbaik di dekat Masjid Nabawi.',
      highlightTitle: 'Mengapa Memilih Kami?',
      highlights: [
        'Terapis Profesional & Bersertifikat',
        'Peralatan Higienis & Profesional',
        'Ramah Muslim & Privasi Terjaga',
        'Kunjungan Langsung ke Hotel / Rumah',
        'Standar Hospitalitas Profesional',
      ],
      pilgrimsServed: 'Jamaah Terlayani',
      learnMore: 'Pelajari lebih lanjut tentang standar kami'
    },
    gallery: {
      tag: 'Suasana',
      title: 'Galeri Visual'
    },
    reviews: {
      tag: 'Testimoni Klien',
      happyClients: 'Klien Puas',
      dailyTreatments: 'Perawatan Harian',
      reviewRating: 'Rating Ulasan'
    },
    contact: {
      title: 'Hubungi Kami',
      info: 'Hubungi kami untuk pertanyaan atau permintaan khusus',
      whatsapp: 'WhatsApp',
      call: 'Telepon',
      email: 'Email',
      hours: 'Jam Operasional',
      location: 'Area Layanan',
      contactTag: 'Hubungi Kami',
      locationDesc: 'Pusat Madinah & Hotel dekat Masjid Nabawi. Kami datang ke tempat Anda.',
      hoursDesc: '24 Jam / 7 Hari. Standar Layanan Global.'
    },
    footer: {
      quickLinks: 'Tautan Cepat',
      footerDesc: 'Menghadirkan pengalaman kebugaran profesional bagi jemaah global di Jantung Kota Madinah. Mendefinisikan ulang layanan spa panggilan dengan standar profesional.',
      footerServices: 'Layanan',
      footerSupport: 'Dukungan',
      footerSvcsList: ['Terapi Seluruh Tubuh', 'Pijat Refleksi Kaki', 'Pemulihan Umroh', 'Jaringan Dalam']
    },
  },
};
