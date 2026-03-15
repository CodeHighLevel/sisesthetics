export interface ServiceData {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  category: 'hair' | 'nails' | 'face';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  initials: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  service: string;
}

export interface WorkingHours {
  day: string;
  hours: string;
}

export interface Translations {
  nav: {
    services: string;
    gallery: string;
    team: string;
    about: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    label: string;
    heading: string;
    subheading: string;
    bookAppointment: string;
    ourServices: string;
  };
  services: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewAll: string;
    bookNow: string;
    categories: {
      hair: string;
      nails: string;
      face: string;
    };
    items: ServiceData[];
  };
  team: {
    sectionTitle: string;
    sectionSubtitle: string;
    bookWith: string;
    members: TeamMember[];
  };
  testimonials: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: Testimonial[];
  };
  gallery: {
    sectionTitle: string;
    sectionSubtitle: string;
    viewFull: string;
    filterAll: string;
    categories: {
      hair: string;
      nails: string;
      makeup: string;
      bridal: string;
    };
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    story: string;
    philosophy: string;
    philosophyText: string;
    quality: string;
    qualityText: string;
  };
  contact: {
    sectionTitle: string;
    sectionSubtitle: string;
    phone: string;
    email: string;
    address: string;
    addressValue: string;
    workingHours: string;
    hours: WorkingHours[];
    formName: string;
    formPhone: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    contactUs: string;
    followUs: string;
    newsletter: string;
    newsletterText: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    rights: string;
  };
  booking: {
    pageTitle: string;
    pageSubtitle: string;
    selectService: string;
    selectStylist: string;
    selectDate: string;
    selectTime: string;
    yourName: string;
    yourPhone: string;
    submit: string;
    step: string;
  };
  cta: {
    heading: string;
    subheading: string;
    button: string;
  };
  giftCards: {
    heading: string;
    subheading: string;
    description: string;
    button: string;
  };
}

export const translations: { en: Translations; bg: Translations } = {
  en: {
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      team: 'Team',
      about: 'About',
      contact: 'Contact',
      bookNow: 'Book Now',
    },
    hero: {
      label: 'SIS ESTHETICS',
      heading: 'Where Beauty Becomes Art',
      subheading: 'Experience premium hair care, styling, and beauty services in the heart of Sofia. Your transformation starts here.',
      bookAppointment: 'Book Appointment',
      ourServices: 'Our Services',
    },
    services: {
      sectionTitle: 'Our Services',
      sectionSubtitle: 'Premium beauty services tailored to your unique style',
      viewAll: 'View All Services',
      bookNow: 'Book Now',
      categories: {
        hair: 'Hair',
        nails: 'Nails',
        face: 'Face',
      },
      items: [
        {
          id: 'cutting',
          name: 'Hair Cutting',
          description: 'Precision cuts that enhance your natural beauty and complement your lifestyle.',
          price: 'from 40 BGN',
          duration: '45 min',
          image: '/sisesthetics-scraped/podstrigvane-2-min.jpg',
          category: 'hair',
        },
        {
          id: 'styling',
          name: 'Styling',
          description: 'From everyday elegance to special occasion looks, personalized just for you.',
          price: 'from 50 BGN',
          duration: '60 min',
          image: '/sisesthetics-scraped/stailing-2-min.jpg',
          category: 'hair',
        },
        {
          id: 'coloring',
          name: 'Hair Coloring',
          description: 'Expert coloring techniques — balayage, highlights, full color, and creative tones.',
          price: 'from 80 BGN',
          duration: '120 min',
          image: '/sisesthetics-scraped/boiadisvane-2-min.jpg',
          category: 'hair',
        },
        {
          id: 'treatments',
          name: 'Hair Treatments',
          description: 'Restorative treatments that nourish, strengthen, and revitalize your hair.',
          price: 'from 60 BGN',
          duration: '45 min',
          image: '/sisesthetics-scraped/terapia-1-min.jpg',
          category: 'hair',
        },
        {
          id: 'bridal',
          name: 'Bridal Styling',
          description: 'Your perfect bridal look — hair, makeup, and styling for your most special day.',
          price: 'from 200 BGN',
          duration: '180 min',
          image: '/sisesthetics-scraped/bulka-2-min.jpg',
          category: 'hair',
        },
        {
          id: 'manicure',
          name: 'Manicure',
          description: 'Classic, gel, and art manicure with premium products for lasting beauty.',
          price: 'from 35 BGN',
          duration: '60 min',
          image: '/sisesthetics-scraped/manikiur-2-min.jpg',
          category: 'nails',
        },
        {
          id: 'pedicure',
          name: 'Pedicure',
          description: 'Relaxing pedicure treatments for perfectly groomed and healthy feet.',
          price: 'from 45 BGN',
          duration: '75 min',
          image: '/sisesthetics-scraped/pedikiur-2-min.jpg',
          category: 'nails',
        },
        {
          id: 'makeup',
          name: 'Makeup',
          description: 'Professional makeup for any occasion — natural, glamour, editorial, and bridal.',
          price: 'from 70 BGN',
          duration: '60 min',
          image: '/sisesthetics-scraped/grim-2-min.jpg',
          category: 'face',
        },
      ],
    },
    team: {
      sectionTitle: 'Our Team',
      sectionSubtitle: 'Meet the talented professionals behind your transformation',
      bookWith: 'Book with',
      members: [
        {
          id: 'pavlinka',
          name: 'Pavlinka Boteva',
          role: 'Owner & Lead Stylist',
          bio: 'With over 15 years of experience, Pavlinka founded Sis Esthetics with a vision to bring premium beauty services to Sofia.',
          specialties: ['Coloring', 'Bridal', 'Styling'],
          initials: 'PB',
        },
        {
          id: 'radoslav',
          name: 'Radoslav Matev',
          role: 'Senior Stylist',
          bio: 'Radoslav brings creative vision and precision to every cut, specializing in modern trends and classic techniques.',
          specialties: ['Cutting', 'Styling', 'Treatments'],
          initials: 'RM',
        },
        {
          id: 'bela',
          name: 'Bela Todorova',
          role: 'Beauty Specialist',
          bio: 'Bela is our nails and makeup expert, delivering flawless results with attention to every detail.',
          specialties: ['Manicure', 'Pedicure', 'Makeup'],
          initials: 'BT',
        },
      ],
    },
    testimonials: {
      sectionTitle: 'What Our Clients Say',
      sectionSubtitle: 'Real experiences from our valued guests',
      items: [
        {
          id: '1',
          name: 'Maria K.',
          quote: 'The best salon in Sofia! Pavlinka transformed my hair completely. I have never felt more beautiful.',
          rating: 5,
          service: 'Hair Coloring',
        },
        {
          id: '2',
          name: 'Elena D.',
          quote: 'My bridal styling was absolutely perfect. The team made me feel like a queen on my wedding day.',
          rating: 5,
          service: 'Bridal Styling',
        },
        {
          id: '3',
          name: 'Sofia P.',
          quote: 'Professional, friendly, and incredibly talented. My go-to salon for everything — hair, nails, and makeup.',
          rating: 5,
          service: 'Full Service',
        },
      ],
    },
    gallery: {
      sectionTitle: 'Our Work',
      sectionSubtitle: 'A gallery of transformations and artistry',
      viewFull: 'View Full Gallery',
      filterAll: 'All',
      categories: {
        hair: 'Hair',
        nails: 'Nails',
        makeup: 'Makeup',
        bridal: 'Bridal',
      },
    },
    about: {
      sectionTitle: 'About Us',
      sectionSubtitle: 'The story behind Sis Esthetics',
      story: 'Founded by Pavlinka Boteva, Sis Esthetics was born from a passion for beauty and a commitment to excellence. Located in the heart of Sofia, our salon offers a premium experience where every client is treated as a VIP. We believe that beauty is not just about appearance — it is about confidence, self-expression, and feeling your absolute best.',
      philosophy: 'Our Philosophy',
      philosophyText: 'We believe every person deserves to feel beautiful. Our approach combines artistry with the latest techniques and premium products to deliver results that exceed expectations.',
      quality: 'Quality Standards',
      qualityText: 'We use only professional-grade products from leading brands. Our team continuously trains in the latest trends and techniques to ensure you receive the best service possible.',
    },
    contact: {
      sectionTitle: 'Contact Us',
      sectionSubtitle: 'We would love to hear from you',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressValue: 'Sofia, Bulgaria',
      workingHours: 'Working Hours',
      hours: [
        { day: 'Monday – Friday', hours: '09:00 – 19:00' },
        { day: 'Saturday', hours: '10:00 – 17:00' },
        { day: 'Sunday', hours: 'Closed' },
      ],
      formName: 'Your Name',
      formPhone: 'Phone Number',
      formEmail: 'Email Address',
      formMessage: 'Your Message',
      formSubmit: 'Send Message',
    },
    footer: {
      description: 'Premium beauty salon in Sofia offering expert hair care, styling, nails, and makeup services.',
      quickLinks: 'Quick Links',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      newsletter: 'Stay Beautiful',
      newsletterText: 'Subscribe to receive special offers and beauty tips.',
      newsletterPlaceholder: 'Your email address',
      newsletterButton: 'Subscribe',
      rights: 'All rights reserved.',
    },
    booking: {
      pageTitle: 'Book an Appointment',
      pageSubtitle: 'Choose your service and preferred time — we will confirm your booking shortly.',
      selectService: 'Select Service',
      selectStylist: 'Select Stylist',
      selectDate: 'Select Date',
      selectTime: 'Select Time',
      yourName: 'Your Name',
      yourPhone: 'Your Phone',
      submit: 'Request Appointment',
      step: 'Step',
    },
    cta: {
      heading: 'Ready to Transform Your Look?',
      subheading: 'Book your appointment today and experience the Sis Esthetics difference.',
      button: 'Book Now',
    },
    giftCards: {
      heading: 'Gift the Experience of Beauty',
      subheading: 'The perfect present for someone special',
      description: 'Surprise your loved ones with a Sis Esthetics gift card. Choose from our curated packages or create a custom amount.',
      button: 'Explore Gift Cards',
    },
  },
  bg: {
    nav: {
      services: 'Услуги',
      gallery: 'Галерия',
      team: 'Екип',
      about: 'За нас',
      contact: 'Контакти',
      bookNow: 'Запази час',
    },
    hero: {
      label: 'SIS ESTHETICS',
      heading: 'Където красотата става изкуство',
      subheading: 'Премиум грижа за косата, стайлинг и козметични услуги в сърцето на София. Вашата трансформация започва тук.',
      bookAppointment: 'Запази час',
      ourServices: 'Нашите услуги',
    },
    services: {
      sectionTitle: 'Нашите услуги',
      sectionSubtitle: 'Премиум козметични услуги, съобразени с вашия уникален стил',
      viewAll: 'Всички услуги',
      bookNow: 'Запази час',
      categories: {
        hair: 'Коса',
        nails: 'Нокти',
        face: 'Лице',
      },
      items: [
        {
          id: 'cutting',
          name: 'Подстригване',
          description: 'Прецизни подстрижки, които подчертават естествената ви красота и допълват вашия стил на живот.',
          price: 'от 40 лв.',
          duration: '45 мин.',
          image: '/sisesthetics-scraped/podstrigvane-2-min.jpg',
          category: 'hair',
        },
        {
          id: 'styling',
          name: 'Стайлинг',
          description: 'От ежедневна елегантност до визии за специални поводи, персонализирани специално за вас.',
          price: 'от 50 лв.',
          duration: '60 мин.',
          image: '/sisesthetics-scraped/stailing-2-min.jpg',
          category: 'hair',
        },
        {
          id: 'coloring',
          name: 'Боядисване',
          description: 'Експертни техники за боядисване — балеаж, кичури, пълно боядисване и креативни тонове.',
          price: 'от 80 лв.',
          duration: '120 мин.',
          image: '/sisesthetics-scraped/boiadisvane-2-min.jpg',
          category: 'hair',
        },
        {
          id: 'treatments',
          name: 'Терапии за коса',
          description: 'Възстановяващи терапии, които подхранват, укрепват и съживяват косата ви.',
          price: 'от 60 лв.',
          duration: '45 мин.',
          image: '/sisesthetics-scraped/terapia-1-min.jpg',
          category: 'hair',
        },
        {
          id: 'bridal',
          name: 'Булчинска визия',
          description: 'Вашата перфектна булчинска визия — коса, грим и стайлинг за най-специалния ви ден.',
          price: 'от 200 лв.',
          duration: '180 мин.',
          image: '/sisesthetics-scraped/bulka-2-min.jpg',
          category: 'hair',
        },
        {
          id: 'manicure',
          name: 'Маникюр',
          description: 'Класически, гел и арт маникюр с премиум продукти за дълготрайна красота.',
          price: 'от 35 лв.',
          duration: '60 мин.',
          image: '/sisesthetics-scraped/manikiur-2-min.jpg',
          category: 'nails',
        },
        {
          id: 'pedicure',
          name: 'Педикюр',
          description: 'Релаксиращи педикюрни процедури за перфектно поддържани и здрави крака.',
          price: 'от 45 лв.',
          duration: '75 мин.',
          image: '/sisesthetics-scraped/pedikiur-2-min.jpg',
          category: 'nails',
        },
        {
          id: 'makeup',
          name: 'Грим',
          description: 'Професионален грим за всеки повод — натурален, гламурен, редакторски и булчински.',
          price: 'от 70 лв.',
          duration: '60 мин.',
          image: '/sisesthetics-scraped/grim-2-min.jpg',
          category: 'face',
        },
      ],
    },
    team: {
      sectionTitle: 'Нашият екип',
      sectionSubtitle: 'Запознайте се с талантливите професионалисти зад вашата трансформация',
      bookWith: 'Запази час при',
      members: [
        {
          id: 'pavlinka',
          name: 'Павлинка Ботева',
          role: 'Собственик и водещ стилист',
          bio: 'С над 15 години опит, Павлинка основа Sis Esthetics с визия да предложи премиум козметични услуги в София.',
          specialties: ['Боядисване', 'Булчинска визия', 'Стайлинг'],
          initials: 'ПБ',
        },
        {
          id: 'radoslav',
          name: 'Радослав Матев',
          role: 'Старши стилист',
          bio: 'Радослав носи креативна визия и прецизност във всяка подстрижка, специализирайки се в модерни тенденции и класически техники.',
          specialties: ['Подстригване', 'Стайлинг', 'Терапии'],
          initials: 'РМ',
        },
        {
          id: 'bela',
          name: 'Бела Тодорова',
          role: 'Специалист по красота',
          bio: 'Бела е нашият експерт по маникюр, педикюр и грим, постигащ безупречни резултати с внимание към всеки детайл.',
          specialties: ['Маникюр', 'Педикюр', 'Грим'],
          initials: 'БТ',
        },
      ],
    },
    testimonials: {
      sectionTitle: 'Какво казват нашите клиенти',
      sectionSubtitle: 'Реални преживявания от нашите ценени гости',
      items: [
        {
          id: '1',
          name: 'Мария К.',
          quote: 'Най-добрият салон в София! Павлинка трансформира косата ми напълно. Никога не съм се чувствала по-красива.',
          rating: 5,
          service: 'Боядисване',
        },
        {
          id: '2',
          name: 'Елена Д.',
          quote: 'Булчинската ми визия беше абсолютно перфектна. Екипът ме накара да се чувствам като кралица в деня на сватбата ми.',
          rating: 5,
          service: 'Булчинска визия',
        },
        {
          id: '3',
          name: 'София П.',
          quote: 'Професионални, приятелски настроени и невероятно талантливи. Моят любим салон за всичко — коса, нокти и грим.',
          rating: 5,
          service: 'Пълно обслужване',
        },
      ],
    },
    gallery: {
      sectionTitle: 'Нашата работа',
      sectionSubtitle: 'Галерия от трансформации и артистичност',
      viewFull: 'Пълна галерия',
      filterAll: 'Всички',
      categories: {
        hair: 'Коса',
        nails: 'Нокти',
        makeup: 'Грим',
        bridal: 'Булчинска',
      },
    },
    about: {
      sectionTitle: 'За нас',
      sectionSubtitle: 'Историята на Sis Esthetics',
      story: 'Основан от Павлинка Ботева, Sis Esthetics е роден от страст към красотата и ангажимент към съвършенството. Разположен в сърцето на София, нашият салон предлага премиум изживяване, където всеки клиент е третиран като VIP. Вярваме, че красотата не е само във външния вид — тя е в увереността, себеизразяването и усещането да се чувствате по най-добрия начин.',
      philosophy: 'Нашата философия',
      philosophyText: 'Вярваме, че всеки човек заслужава да се чувства красив. Нашият подход съчетава артистичност с най-новите техники и премиум продукти за резултати, които надминават очакванията.',
      quality: 'Стандарти за качество',
      qualityText: 'Използваме само професионални продукти от водещи марки. Нашият екип непрекъснато се обучава в най-новите тенденции и техники, за да гарантира, че получавате най-доброто обслужване.',
    },
    contact: {
      sectionTitle: 'Свържете се с нас',
      sectionSubtitle: 'Ще се радваме да чуем от вас',
      phone: 'Телефон',
      email: 'Имейл',
      address: 'Адрес',
      addressValue: 'София, България',
      workingHours: 'Работно време',
      hours: [
        { day: 'Понеделник – Петък', hours: '09:00 – 19:00' },
        { day: 'Събота', hours: '10:00 – 17:00' },
        { day: 'Неделя', hours: 'Почивен ден' },
      ],
      formName: 'Вашето име',
      formPhone: 'Телефонен номер',
      formEmail: 'Имейл адрес',
      formMessage: 'Вашето съобщение',
      formSubmit: 'Изпрати съобщение',
    },
    footer: {
      description: 'Премиум салон за красота в София, предлагащ експертна грижа за косата, стайлинг, маникюр, педикюр и грим.',
      quickLinks: 'Бързи връзки',
      contactUs: 'Свържете се',
      followUs: 'Последвайте ни',
      newsletter: 'Бъдете красиви',
      newsletterText: 'Абонирайте се, за да получавате специални оферти и съвети за красота.',
      newsletterPlaceholder: 'Вашият имейл адрес',
      newsletterButton: 'Абонирай се',
      rights: 'Всички права запазени.',
    },
    booking: {
      pageTitle: 'Запазете час',
      pageSubtitle: 'Изберете услуга и предпочитано време — ще потвърдим вашата резервация скоро.',
      selectService: 'Изберете услуга',
      selectStylist: 'Изберете стилист',
      selectDate: 'Изберете дата',
      selectTime: 'Изберете час',
      yourName: 'Вашето име',
      yourPhone: 'Вашият телефон',
      submit: 'Заявете час',
      step: 'Стъпка',
    },
    cta: {
      heading: 'Готови ли сте да промените визията си?',
      subheading: 'Запазете час днес и изживейте разликата на Sis Esthetics.',
      button: 'Запази час',
    },
    giftCards: {
      heading: 'Подарете изживяването на красотата',
      subheading: 'Перфектният подарък за някой специален',
      description: 'Изненадайте близките си с подаръчна карта от Sis Esthetics. Изберете от нашите подбрани пакети или създайте персонализирана сума.',
      button: 'Разгледай подаръчни карти',
    },
  },
};
