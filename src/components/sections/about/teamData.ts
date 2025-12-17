export const achievements = [
  { number: '19', label: 'Участников' },
  { number: '50+', label: 'Марафонов' },
  { number: '200+', label: 'Медалей' },
  { number: '5', label: 'Лет опыта' }
];

export interface TeamMember {
  name: string;
  role: string;
  achievement: string;
  image?: string;
  gallery?: string[];
  description?: string;
  achievements?: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Юрий Большаков',
    role: 'Владелец клуба',
    achievement: 'Бежит всегда, бежит везде. Примерный семьянин, многодетный отец',
    image: 'https://cdn.poehali.dev/files/ura.png',
    gallery: [
      'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/ff2c8613-a10b-4eec-887f-a24a202ac39d.jpg',
      'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/ea3e6d41-f067-415b-8ad3-d51467240ea4.jpg',
      'https://cdn.poehali.dev/projects/753ec68b-a295-46dd-8659-fca0e769ac37/files/2bea2de9-f579-4c5b-bf69-531df941bc86.jpg'
    ],
    description: 'Основатель клуба и вдохновитель команды. Многолетний опыт в беге и организации спортивных мероприятий.',
    achievements: ['10+ марафонов', 'Организатор беговых клубов', 'Наставник начинающих бегунов']
  },
  {
    name: 'Наталья Куйдина',
    role: 'Тигрица из Тюмени',
    achievement: 'Педагог от Бога. Обворожительная блондинка',
    image: 'https://cdn.poehali.dev/files/kdn.png',
    description: 'Профессиональный педагог и страстный бегун. Вдохновляет своим примером учеников и коллег.',
    achievements: ['15+ марафонов', 'Призёр региональных соревнований', 'Лучший темп в команде']
  },
  {
    name: 'Елена Шовковая',
    role: 'Леди Байкал',
    achievement: 'Спортивный концентрат. Бег, лыжи, горы - кайф',
    image: 'https://cdn.poehali.dev/files/shovk.png',
    gallery: [
      'https://cdn.poehali.dev/files/IMG_2869.JPG',
      'https://cdn.poehali.dev/files/IMG_3219.JPG',
      'https://cdn.poehali.dev/files/IMG_3261.JPG',
      'https://cdn.poehali.dev/files/IMG_3306.JPG',
      'https://cdn.poehali.dev/files/IMG_9452.JPG',
      'https://cdn.poehali.dev/files/IMG_9866.JPG',
      'https://cdn.poehali.dev/files/IMG_0520.JPG',
      'https://cdn.poehali.dev/files/IMG_3534.JPG',
      'https://cdn.poehali.dev/files/IMG_7573.JPG'
    ],
    description: 'Универсальная спортсменка с опытом в беге, лыжах и горном туризме. Покоряет вершины и дистанции.',
    achievements: ['Участница Байкальского марафона', 'Мастер горного бега', '20+ медалей']
  },
  {
    name: 'Марина Любимова',
    role: 'Августовская Тигрица',
    achievement: 'Ни дня без бега',
    image: 'https://cdn.poehali.dev/files/Lub.png',
    description: 'Настоящий пример постоянства и дисциплины. Ежедневные тренировки - её образ жизни.',
    achievements: ['365 дней бега подряд', '12 марафонов за год', 'Рекорд клуба по регулярности']
  },
  {
    name: 'Маргарита Самойлова',
    role: 'Риточка',
    achievement: 'Бегу, дышу',
    image: 'https://cdn.poehali.dev/files/Ri.png',
    description: 'Бег - это её медитация и способ находить гармонию с собой.',
    achievements: ['8 марафонов', 'Полумарафон до 1:45', 'Вдохновляет новичков']
  },
  {
    name: 'Раушан Рафикова',
    role: 'Раушан',
    achievement: 'Бегу и сочиняю стихи на ходу',
    description: 'Творческая натура, которая находит вдохновение в каждой пробежке.',
    achievements: ['Автор беговых стихов', '6 марафонов', 'Душа команды']
  },
  {
    name: 'Александр Редькин',
    role: 'Mag_Fafnir',
    achievement: 'Бег и хобби',
    description: 'Бег - это не просто спорт, а любимое хобби и способ самовыражения.',
    achievements: ['5 марафонов', 'Участник трейлов', 'Фотограф команды']
  },
  {
    name: 'Оксана Алексеева',
    role: 'Оксана',
    achievement: 'Бегу за Ярославль',
    image: 'https://cdn.poehali.dev/files/oks.png',
    gallery: [
      'https://cdn.poehali.dev/files/IMG_3833.JPG',
      'https://cdn.poehali.dev/files/IMG_3831.JPG',
      'https://cdn.poehali.dev/files/ED0BC7E8-C2B4-44EE-9C91-3A54143E3A8F.jpg',
      'https://cdn.poehali.dev/files/IMG_0904.PNG',
      'https://cdn.poehali.dev/files/IMG_0905_1.png'
    ],
    description: 'Представляет Ярославль на всероссийских соревнованиях с гордостью.',
    achievements: ['Чемпионка области', '7 марафонов', 'Амбассадор Ярославля']
  },
  {
    name: 'Динара',
    role: 'Динара',
    achievement: 'Бег в суровом Челябе',
    description: 'Челябинская закалка помогает преодолевать любые дистанции.',
    achievements: ['Бег при -30°C', '4 марафона', 'Железная воля']
  },
  {
    name: 'Валентина',
    role: 'Валентина',
    achievement: 'Бегу в СПБ',
    description: 'Покоряет улицы и набережные Санкт-Петербурга.',
    achievements: ['Марафон Белые ночи', '10 полумарафонов', 'Городской рекорд']
  },
  {
    name: 'Светлана',
    role: 'Светлана',
    achievement: 'Улан удэ тудэ сюдэ',
    description: 'Бегает по всему Улан-Удэ, изучая родной город.',
    achievements: ['Локальный эксперт', '5 марафонов', 'Организатор пробежек']
  },
  {
    name: 'Николай',
    role: 'Скиф',
    achievement: 'ZA Челябинск',
    description: 'Стойкий и выносливый, как древний воин-скиф.',
    achievements: ['Ультрамарафон 50км', '8 марафонов', 'Несгибаемый дух']
  },
  {
    name: 'Юлия Аридова',
    role: 'Юлия',
    achievement: 'Карельский бег',
    image: 'https://cdn.poehali.dev/files/ari.png',
    description: 'Бегает по карельским лесам и тропам, находя силы в природе.',
    achievements: ['Трейлраннер', '6 марафонов', 'Покорительница Карелии'],
    gallery: [
      'https://drive.google.com/file/d/1sKgpt7uvCOySFXc66OsnBI2DsE5O6mJC/view'
    ]
  },
  {
    name: 'Михаил Марков',
    role: 'МыслейНет',
    achievement: 'Челябинск',
    image: 'https://cdn.poehali.dev/files/mih.png',
    description: 'Во время бега отключает мысли и наслаждается процессом.',
    achievements: ['Медитативный бег', '7 марафонов', 'Дзен-мастер']
  },
  {
    name: 'Алёна Луговая',
    role: 'Алёна',
    achievement: 'Новосибирск',
    description: 'Представляет Новосибирск на спортивной карте России.',
    achievements: ['Сибирский марафон', '9 марафонов', 'Топ-3 региона']
  },
  {
    name: 'Марина Булгакова',
    role: 'Марина',
    achievement: 'Кемерово',
    image: 'https://cdn.poehali.dev/files/Bul.png',
    description: 'Кемеровская бегунья с большими амбициями.',
    achievements: ['5 марафонов', 'Рекорд города', 'Командный игрок'],
    gallery: [
      'https://cdn.poehali.dev/files/SHRM2676.JPG',
      'https://cdn.poehali.dev/files/IMG_20230728_114132_981(1).jpg',
      'https://cdn.poehali.dev/files/IMG_20230728_114434_715(1).jpg',
      'https://cdn.poehali.dev/files/IMG_20230804_131815_855(1).jpg',
      'https://cdn.poehali.dev/files/IMG_20230728_114645_208.jpg',
      'https://cdn.poehali.dev/files/IMG_20251215_235734_940.jpg',
      'https://cdn.poehali.dev/files/kCuZWJWH67U(1).jpg',
      'https://cdn.poehali.dev/files/Picsart_23-01-31_17-01-32-310(1).jpg'
    ]
  },
  {
    name: 'Константин',
    role: 'Константин',
    achievement: 'Иркутск',
    description: 'Иркутский бегун с настоящим сибирским характером.',
    achievements: ['Байкальский лёд', '6 марафонов', 'Зимний воин']
  },
  {
    name: 'Ксения Петербургская',
    role: 'Ксения',
    achievement: 'СПБ',
    image: 'https://cdn.poehali.dev/files/ksu.png',
    description: 'Петербургская элегантность сочетается с железной волей.',
    achievements: ['15 марафонов', 'Белые ночи чемпион', 'Лидер команды СПБ']
  },
  {
    name: 'Владимир Коротин',
    role: 'VK',
    achievement: 'Вологда',
    description: 'Вологодский бегун с современным подходом к тренировкам.',
    achievements: ['IT и спорт', '8 марафонов', 'Гаджет-фанат']
  }
];