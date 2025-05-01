export const menu = [
    {
      id: 1,
      title: "MAIN",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/users/1",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "LISTS",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "user.svg",
        },
        {
          id: 2,
          title: "Products",
          url: "/products",
          icon: "product.svg",
        },
        {
          id: 3,
          title: "Orders",
          url: "/orders",
          icon: "order.svg",
        },
        {
          id: 4,
          title: "Posts",
          url: "/posts",
          icon: "post2.svg",
        },
      ],
    },
    {
      id: 3,
      title: "GENERAL",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "element.svg",
        },
        {
          id: 2,
          title: "Notes",
          url: "/",
          icon: "note.svg",
        },
        {
          id: 3,
          title: "Forms",
          url: "/",
          icon: "form.svg",
        },
        {
          id: 4,
          title: "Calendar",
          url: "/",
          icon: "calendar.svg",
        },
      ],
    },
    {
      id: 4,
      title: "MAINTENANCE",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "ANALYTICS",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.svg",
        },
      ],
    },
  ];

  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Elva McDonald",
      email: "elva@gmail.com",
      amount: "1.668",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Linnie Nelson",
      email: "linnie@gmail.com",
      amount: "1.256",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Brent Reeves",
      email: "brent@gmail.com",
      amount: "998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Adeline Watson",
      email: "adeline@gmail.com",
      amount: "512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      amount: "334",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Augusta McGee",
      email: "augusta@gmail.com",
      amount: "332",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Angel Thomas",
      email: "angel@gmail.com",
      amount: "260",
    },
  ];

  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "1.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Sun", users: 400 },
      { name: "Mon", users: 600 },
      { name: "Tue", users: 500 },
      { name: "Wed", users: 700 },
      { name: "Thu", users: 400 },
      { name: "Fri", users: 500 },
      { name: "Sat", users: 450 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "45",
    dataKey: "products",
    percentage: 21,
    chartData: [
      { name: "Sun", products: 400 },
      { name: "Mon", products: 600 },
      { name: "Tue", products: 500 },
      { name: "Wed", products: 700 },
      { name: "Thu", products: 400 },
      { name: "Fri", products: 500 },
      { name: "Sat", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "6.432€",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
      { name: "Sun", revenue: 400 },
      { name: "Mon", revenue: 600 },
      { name: "Tue", revenue: 500 },
      { name: "Wed", revenue: 700 },
      { name: "Thu", revenue: 400 },
      { name: "Fri", revenue: 500 },
      { name: "Sat", revenue: 450 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
      { name: "Sun", ratio: 400 },
      { name: "Mon", ratio: 600 },
      { name: "Tue", ratio: 500 },
      { name: "Wed", ratio: 700 },
      { name: "Thu", ratio: 400 },
      { name: "Fri", ratio: 500 },
      { name: "Sat", ratio: 450 },
    ],
  };


  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#1be7ff",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Total Visit",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };

  export interface pieChartBoxData {
    name: string;
    value: number;
    color: string;
  }
  
  export const data: pieChartBoxData[] = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];

  export interface bigChartBoxData {
    name: string;
    books: number;
    clothes: number;
    electronic: number;
  }

  export const data1: bigChartBoxData[] = [
    {
      name: "Sun",
      books: 4000,
      clothes: 2400,
      electronic: 2400,
    },
    {
      name: "Mon",
      books: 3000,
      clothes: 1398,
      electronic: 2210,
    },
    {
      name: "Tue",
      books: 2000,
      clothes: 9800,
      electronic: 2290,
    },
    {
      name: "Wed",
      books: 2780,
      clothes: 3908,
      electronic: 2000,
    },
    {
      name: "Thu",
      books: 1890,
      clothes: 4800,
      electronic: 2181,
    },
    {
      name: "Fri",
      books: 2390,
      clothes: 3800,
      electronic: 2500,
    },
    {
      name: "Sat",
      books: 3490,
      clothes: 4300,
      electronic: 2100,
    },
  ];

  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Hubbard",
      firstName: "Eula",
      email: "kewez@@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Manning",
      firstName: "Stella",
      email: "comhuhmit@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Greer",
      firstName: "Mary",
      email: "ujudokon@hottmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williamson",
      firstName: "Mildred",
      email: "tinhavabe@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Gross",
      firstName: "Jose",
      email: "gobtagbes@yahoo.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Sharp",
      firstName: "Jeremy",
      email: "vulca.eder@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Lowe",
      firstName: "Christina",
      email: "reso.bilic@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dean",
      firstName: "Garrett",
      email: "codaic@mail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Parsons",
      firstName: "Leah",
      email: "uzozor@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Reid",
      firstName: "Elnora",
      email: "tuhkabapu@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dunn",
      firstName: "Gertrude",
      email: "gibo@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Williams",
      firstName: "Mark",
      email: "tic.harvey@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Cruz",
      firstName: "Charlotte",
      email: "ceuc@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harper",
      firstName: "Sara",
      email: "bafuv@hotmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Griffin",
      firstName: "Eric",
      email: "ubi@gmail.com",
      phone: "123 456 789",
      createdAt: "01.02.2023",
    },
  ];

  export const products = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/4440715/pexels-photo-4440715.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sounds of English",
      description: "Learn how to pronunciate correctly most commons sounds of English.",
      duration: "8 hours",
      price: "29,99€",
      createdAt: "14.02.2023",
      inStock: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sight Word Recognition",
      description: "Learn how to instantly recognize common words.",
      duration: "6 hours",
      price: "25,99€",
      createdAt: "19.04.2023",
      inStock: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1822568/pexels-photo-1822568.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Early Literacy Skills",
      description: "Learn how to develop foundational skills like letter identification, rhyming, and simple sentence construction.",
      duration: "10 hours",
      price: "49,99€",
      createdAt: "08.06.2023",
      inStock: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Basic Grammar Concepts",
      description: "Learning simple sentence structure, basic verb tenses, and identifying parts of speech.",
      duration: "12 hours",
      price: "55,00€",
      createdAt: "16.08.2023",
      inStock: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Vocabulary Building Through Pictures",
      description: "Learning new words through images, photos, and videos.",
      duration: "8 hours",
      price: "45,00€",
      createdAt: "07.10.2023",
      inStock: true,
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/2954199/pexels-photo-2954199.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "English Through Storytelling",
      description: "Learning vocabulary and grammar within the context of engaging stories.",
      duration: "6 hours",
      price: "25,99€",
      createdAt: "15.01.2024",
      inStock: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Everyday English Conversations",
      description: "Basic conversational skills for everyday situations.",
      duration: "10 hours",
      price: "49,99€",
      createdAt: "11.02.2024",
      inStock: true,
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Life Skills English",
      description: "English for essential life skills like reading signs, understanding instructions, and filling out basic forms.",
      duration: "6 hours",
      price: "19,99€",
      createdAt: "05.04.2024",
      inStock: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/134065/pexels-photo-134065.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "English for Emergencies",
      description: "Learning essential English phrases for emergencies.",
      duration: "4 hours",
      price: "19,99€",
      createdAt: "14.07.2024",
      inStock: true,
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "English for Basic Literacy",
      description: "A comprehensive program covering all aspects of basic English literacy, from letter recognition to simple reading and writing.",
      duration: "12 hours",
      price: "59,99€",
      createdAt: "18.09.2024",
      inStock: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Conversational Partners",
      description: "Practicing conversation with native English speakers or fluent learners.",
      duration: "1 hour",
      price: "10,00€",
      createdAt: "12.11.2024",
      inStock: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/6929348/pexels-photo-6929348.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "English for Daily Routines",
      description: "English for everyday activities like shopping, cooking, telling time, using public transportation, and navigating basic medical situations.",
      duration: "6 hours",
      price: "24,99€",
      createdAt: "14.11.2024",
      inStock: true,
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/5427873/pexels-photo-5427873.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "English for Kids",
      description: "Fun and engaging lessons with songs, games, and stories.",
      duration: "20 hours",
      price: "99,99€",
      createdAt: "04.12.2024",
      inStock: true,
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/5427870/pexels-photo-5427870.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "English for Teen",
      description: "Relevant and actual topics, interactive activities.",
      duration: "14 hours",
      price: "75,00€",
      createdAt: "14.12.2024",
      inStock: true,
    },
  ];

  export const orders = [
    {
      id: 1,
      num: "#657844",
      img: "https://images.pexels.com/photos/5427870/pexels-photo-5427870.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Early Literacy Skills",
      client: "Orion Reed",
      date: "01/02/2024",
      price: "129,99€",
      status: "Complete",
    },
    {
      id: 2,
      num: "#447685",
      img: "https://images.pexels.com/photos/6929351/pexels-photo-6929351.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Vocabulary Building Through Pictures",
      client: "Elara Vance",
      date: "10/03/2024",
      price: "100,99€",
      status: "Complete",
    },
    {
      id: 3,
      num: "#903456",
      img: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "English for Basic Literacy",
      client: "Jasper Thorne",
      date: "16/03/2024",
      price: "249,99€",
      status: "Complete",
    },
    {
      id: 4,
      num: "#349234",
      img: "https://images.pexels.com/photos/1111368/pexels-photo-1111368.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Everyday English Conversations",
      client: "Indigo Croft",
      date: "28/03/2024",
      price: "149,99€",
      status: "Complete",
    },
    {
      id: 5,
      num: "#890456",
      img: "https://images.pexels.com/photos/6503096/pexels-photo-6503096.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Phonics Fundamentals",
      client: "Willow Fred",
      date: "10/04/2024",
      price: "49,99€",
      status: "Complete",
    },
    {
      id: 6,
      num: "#231905",
      img: "https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Sight Word Recognition",
      client: "Mary Bell",
      date: "20/06/2024",
      price: "44,99€",
      status: "Complete",
    },
    {
      id: 7,
      num: "#786045",
      img: "https://images.pexels.com/photos/5676740/pexels-photo-5676740.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Basic Grammar Concepts",
      client: "Seraphina Stone",
      date: "22/07/2024",
      price: "65,00€",
      status: "Complete",
    },
    {
      id: 8,
      num: "#032456",
      img: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "English for Emergencies",
      client: "Jordan MacKenzie",
      date: "10/11/2024",
      price: "50,00€",
      status: "Pending",
    },
    {
      id: 9,
      num: "#894538",
      img: "https://images.pexels.com/photos/2954199/pexels-photo-2954199.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "English Through Storytelling",
      client: "Kaelen Wilder",
      date: "03/12/2024",
      price: "119,99€",
      status: "Pendind",
    },
    {
      id: 10,
      num: "#786503",
      img: "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Conversational Partners",
      client: "Arden Monroe",
      date: "08.01.2025",
      price: "90,00€",
      status: "Pending",
    },
  ];
  
  export const singleUser = {
    id: 1,
    title: "Eula Hubbard",
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      username: "Eula1987",
      fullname: "Eula Hubbard",
      email: "kewez@@gmail.com",
      phone: "423 452 729",
      status: "Verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#f9a620" },
        { name: "clicks", color: "#1be7ff" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Eula bought the Basic Grammar Concepts course",
        time: "3 months ago",
      },
      {
        text: "Eula started the Basic Grammar Concepts course",
        time: "2 months ago",
      },
      {
        text: "Eula received the certification for ending the first part of Basic Grammar Concepts course",
        time: "1 month ago",
      },
      {
        text: "Eula ended the second part of Basic Grammar Concepts course and received the certification",
        time: "2 weeks ago",
      },
      {
        text: "Eula completed the Basic Grammar Concepts course",
        time: "1 week ago",
      },
    ],
  }
 ;

  export const singleProduct = {
    id: 1,
    title: "Sounds of English",
    img: "https://images.pexels.com/photos/4440715/pexels-photo-4440715.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: {
      productId: "Ps5SDF1156d",
      description: "Learn how to pronunciate correctly most commons sounds of English.",
      duration: "8 hours",
      price: "29.99€",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#f9a620" },
        { name: "clicks", color: "#1be7ff" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Sounds of English course was created",
        time: "2 years ago",
      },
      {
        text: "Jeremy Sharp added Sounds of English into their wishlist",
        time: "1 year ago",
      },
      {
        text: "Mary Grer purchased Sounds of English",
        time: "10 months ago",
      },
      {
        text: "Stella Manning reviewed the product",
        time: "6 months ago",
      },
      {
        text: "Jose Gross added Sounds of English into his wishlist",
        time: "5 months ago",
      },
      {
        text: "Mary Grer completed the Sounds of English course",
        time: "2 months ago",
      },
    ],
  };


  export const singleOrder = {
    id: 1,
    title: "Early Literacy Skills",
    img: "https://images.pexels.com/photos/5427870/pexels-photo-5427870.jpeg?auto=compress&cs=tinysrgb&w=600",
    info: {
      productId: "#657844",
      client: "Orion Reed",
      price: "49,99€",
      status: "Complete",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#f9a620" },
        { name: "clicks", color: "#1be7ff" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Orion Reed bought the Early Literacy Skills course",
        time: "1 year ago",
      },
      {
        text: "Orion Reed started the Early Literacy Skills course",
        time: "10 months ago",
      },
      {
        text: "Orion Reed gained the first certification of the Early Literacy Skills course",
        time: "6 months ago",
      },
      {
        text: "Orion Reed passed the second certification of the Early Literacy Skills course",
        time: "3 months ago",
      },
      {
        text: "Orion Reed ended the Early Literacy Skills course",
        time: "1 month ago",
      },
    ],
  };

  