const apiaries = [
  {
    id: 1,
    contact: {
      name: "Pasieka Słodka Kraina",
      phone: "535283646",
      www: "https://pasiekaslodkakraina.pl",
    },
    location: {
      latitude: 50.6666705894856,
      longitude: 18.69799685424456,
      city: "Lubliniec",
      postalCode: "42-700",
      street: "ul. Pokoju",
      houseNumber: "62",
    },
    hives: {
      numberOfHives: 24,
      totalNumberOfBees: 1440000,
      beesPerHive: 60000,
      beesOpenToAdoption: 4000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 5,
      typeOfHoney: "multiflorous, buckwheat, acacia",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 25,
        numberOfBees: 1500000,
      },
      {
        year: "2021",
        numberOfHives: 23,
        numberOfBees: 1380000,
      },
      {
        year: "2022",
        numberOfHives: 24,
        numberOfBees: 1440000,
      },
    ],
  },

  {
    id: 2,
    contact: {
      name: "Pasieka Nad Dunajcem",
      phone: "666299587",
      www: "https://pasieka-nad-dunajcem.pl/",
    },
    location: {
      latitude: 49.946401756503874,
      longitude: 20.61695174073274,
      city: "Okocim",
      postalCode: "32-800",
      street: "Klęczany",
      houseNumber: "10",
    },
    hives: {
      numberOfHives: 14,
      totalNumberOfBees: 840000,
      beesPerHive: 60000,
      beesOpenToAdoption: 2500,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 15,
      typeOfHoney: "lime, raspberry, dandelion, rapeseed",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 14,
        numberOfBees: 840000,
      },
      {
        year: "2021",
        numberOfHives: 10,
        numberOfBees: 600000,
      },
      {
        year: "2022",
        numberOfHives: 12,
        numberOfBees: 720000,
      },
    ],
  },

  {
    id: 3,
    contact: {
      name: "Skarby Roztocza",
      phone: "660850764",
      www: "https://www.skarbyroztocza.com/",
    },
    location: {
      latitude: 50.06787130523457,
      longitude: 19.94150827142116,
      city: "Kraków",
      postalCode: "31-151",
      street: "Rynek Kleparski",
      houseNumber: "1",
    },
    hives: {
      numberOfHives: 5,
      totalNumberOfBees: 350000,
      beesPerHive: 70000,
      beesOpenToAdoption: 1000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 8,
      typeOfHoney: "heather, honeydew, forest",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2021",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2022",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
    ],
  },

  {
    id: 4,
    contact: {
      name: "Gospodarstwo Pasieczne 'Leśny Dwór'",
      phone: "896243777",
      www: "https://miod.com.pl/",
    },
    location: {
      latitude: 53.5518462,
      longitude: 20.9809255,
      city: "Szczytno",
      postalCode: "12-100",
      street: "Leśny Dwór",
      houseNumber: "8A",
    },
    hives: {
      numberOfHives: 10,
      totalNumberOfBees: 800000,
      beesPerHive: 80000,
      beesOpenToAdoption: 2500,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 50,
      typeOfHoney: "raspberry, acacia, rapeseed",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 8,
        numberOfBees: 640000,
      },
      {
        year: "2021",
        numberOfHives: 9,
        numberOfBees: 720000,
      },
      {
        year: "2022",
        numberOfHives: 10,
        numberOfBees: 800000,
      },
    ],
  },

  {
    id: 5,
    contact: {
      name: "Hawran - Pasieka z Pasją",
      phone: "661532463",
      www: "https://sklep.pasiekazpasja.pl/",
    },
    location: {
      latitude: 54.1994986361351,
      longitude: 15.894604609629363,
      city: "Szczytno",
      postalCode: "12-100",
      street: "Leśny Dwór",
      houseNumber: "8A",
    },
    hives: {
      numberOfHives: 10,
      totalNumberOfBees: 600000,
      beesPerHive: 60000,
      beesOpenToAdoption: 5000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 50,
      typeOfHoney: "raspberry, acacia, rapeseed",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 6,
        numberOfBees: 3600000,
      },
      {
        year: "2021",
        numberOfHives: 8,
        numberOfBees: 480000,
      },
      {
        year: "2022",
        numberOfHives: 10,
        numberOfBees: 600000,
      },
    ],
  },

  {
    id: 6,
    contact: {
      name: "Borowskie Miody",
      phone: "",
      www: "https://www.borowskiemiody.pl/",
    },
    location: {
      latitude: 52.57476638484788,
      longitude: 19.636363884980657,
      city: "Maszewo Duże",
      postalCode: "09-400",
      street: "ul. Grabowa",
      houseNumber: "2",
    },
    hives: {
      numberOfHives: 18,
      totalNumberOfBees: 900000,
      beesPerHive: 50000,
      beesOpenToAdoption: 1500,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 5,
      typeOfHoney: "acacia, rapeseed, multiflorous",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 7,
        numberOfBees: 3500000,
      },
      {
        year: "2021",
        numberOfHives: 13,
        numberOfBees: 650000,
      },
      {
        year: "2022",
        numberOfHives: 18,
        numberOfBees: 900000,
      },
    ],
  },

  {
    id: 7,
    contact: {
      name: "Gospodarstwo Pasieczne Tomasz Łysoń",
      phone: "33 875 88 07",
      www: "https://pasiekalyson.pl/",
    },
    location: {
      latitude: 49.88681079435461,
      longitude: 19.578676111895597,
      city: "Klecza Górna",
      postalCode: "34-124",
      street: "ul. Klecza Dolna",
      houseNumber: "338b",
    },
    hives: {
      numberOfHives: 8,
      totalNumberOfBees: 480000,
      beesPerHive: 60000,
      beesOpenToAdoption: 3000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 10,
      typeOfHoney: "multiflorous, honeydew, acacia",
    },

    statistics: [
      {
        year: "2020",
        numberOfHives: 1,
        numberOfBees: 60000,
      },
      {
        year: "2021",
        numberOfHives: 5,
        numberOfBees: 300000,
      },
      {
        year: "2022",
        numberOfHives: 8,
        numberOfBees: 900000,
      },
    ],
  },

  {
    id: 8,
    contact: {
      name: "Miód Mydło i Powidło",
      phone: "602345673",
      www: "https://pasiekalyson.pl/",
    },
    location: {
      latitude: 51.235187319728695,
      longitude: 22.63348469843784,
      city: "Lublin",
      postalCode: "20-270",
      street: "ul. Macieja Rataja",
      houseNumber: "50",
    },
    hives: {
      numberOfHives: 3,
      totalNumberOfBees: 480000,
      beesPerHive: 180000,
      beesOpenToAdoption: 1000,
    },
    honey: {
      isAvaiable: true,
      discount: false,
      discountAmount: 0,
      typeOfHoney: "multiflorous",
    },

    statistics: [
      {
        year: "2020",
        numberOfHives: 12,
        numberOfBees: 720000,
      },
      {
        year: "2021",
        numberOfHives: 13,
        numberOfBees: 780000,
      },
      {
        year: "2022",
        numberOfHives: 14,
        numberOfBees: 840000,
      },
    ],
  },

  {
    id: 9,
    contact: {
      name: "ULIK - Pszczelarska Zagroda Edukacyjna",
      phone: "537421566",
      www: "https://ulikroztocze.pl/",
    },
    location: {
      latitude: 50.74414291678437,
      longitude: 22.85411396958924,
      city: "Radecznica",
      postalCode: "22-463",
      street: "Mokrelipie",
      houseNumber: "85",
    },
    hives: {
      numberOfHives: 24,
      totalNumberOfBees: 1440000,
      beesPerHive: 60000,
      beesOpenToAdoption: 4000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 5,
      typeOfHoney: "multiflorous, buckwheat, acacia",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 25,
        numberOfBees: 1500000,
      },
      {
        year: "2021",
        numberOfHives: 23,
        numberOfBees: 1380000,
      },
      {
        year: "2022",
        numberOfHives: 24,
        numberOfBees: 1440000,
      },
    ],
  },

  {
    id: 10,
    contact: {
      name: "Miody Fujarskich Kluczewo",
      phone: "603565267",
      www: "http://miodyfujarskich.pl/",
    },
    location: {
      latitude: 53.65132523627793,
      longitude: 16.18484491199608,
      city: "Kluczewo",
      postalCode: "78-552",
      street: "ul. Górna",
      houseNumber: "4",
    },
    hives: {
      numberOfHives: 10,
      totalNumberOfBees: 800000,
      beesPerHive: 80000,
      beesOpenToAdoption: 2500,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 50,
      typeOfHoney: "raspberry, acacia, rapeseed",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 8,
        numberOfBees: 640000,
      },
      {
        year: "2021",
        numberOfHives: 9,
        numberOfBees: 720000,
      },
      {
        year: "2022",
        numberOfHives: 10,
        numberOfBees: 800000,
      },
    ],
  },

  {
    id: 11,
    contact: {
      name: "7 Miodowych Kontynentów",
      phone: "504105592",
      www: "https://7mk.pl/",
    },
    location: {
      latitude: 51.76098317467304,
      longitude: 19.44114171194482,
      city: "Łódź",
      postalCode: "90-560",
      street: "ul. Karolewska",
      houseNumber: "1",
    },
    hives: {
      numberOfHives: 10,
      totalNumberOfBees: 800000,
      beesPerHive: 80000,
      beesOpenToAdoption: 2500,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 50,
      typeOfHoney: "raspberry, acacia, rapeseed",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 8,
        numberOfBees: 640000,
      },
      {
        year: "2021",
        numberOfHives: 9,
        numberOfBees: 720000,
      },
      {
        year: "2022",
        numberOfHives: 10,
        numberOfBees: 800000,
      },
    ],
  },

  {
    id: 12,
    contact: {
      name: "Gospodarstwo Pasieczne „Maja” ",
      phone: "695134051",
      www: "https://miodypojezierzadrawskiego.pl/",
    },
    location: {
      latitude: 53.632262216839344,
      longitude: 16.256465813845132,
      city: "Czaplinek",
      postalCode: "78-550",
      street: "Czarne Wielkie",
      houseNumber: "49",
    },
    hives: {
      numberOfHives: 5,
      totalNumberOfBees: 350000,
      beesPerHive: 70000,
      beesOpenToAdoption: 1000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 8,
      typeOfHoney: "heather, honeydew, forest",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2021",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2022",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
    ],
  },

  {
    id: 13,
    contact: {
      name: "Gospodarstwo Pasieczne MIÓD PODKARPACKI",
      phone: "506858057",
      www: "http://www.miodpodkarpacki.pl/",
    },
    location: {
      latitude: 49.75104527602,
      longitude: 21.700886811892033,
      city: "Ustrobna",
      postalCode: "38-406",
      street: "Ustrobna",
      houseNumber: "370",
    },
    hives: {
      numberOfHives: 5,
      totalNumberOfBees: 350000,
      beesPerHive: 70000,
      beesOpenToAdoption: 1000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 8,
      typeOfHoney: "heather, honeydew, forest",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2021",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2022",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
    ],
  },

  {
    id: 14,
    contact: {
      name: "Bartnik Mazurski",
      phone: "501753098",
      www: "http://www.miodpodkarpacki.pl/",
    },
    location: {
      latitude: 54.08846961575243,
      longitude: 21.346010685022122,
      city: "Gnatowo",
      postalCode: "11-400",
      street: "Gnatowo",
      houseNumber: "4A",
    },
    hives: {
      numberOfHives: 10,
      totalNumberOfBees: 800000,
      beesPerHive: 80000,
      beesOpenToAdoption: 2500,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 50,
      typeOfHoney: "raspberry, acacia, rapeseed",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 8,
        numberOfBees: 640000,
      },
      {
        year: "2021",
        numberOfHives: 9,
        numberOfBees: 720000,
      },
      {
        year: "2022",
        numberOfHives: 10,
        numberOfBees: 800000,
      },
    ],
  },

  {
    id: 15,
    contact: {
      name: "Biogo",
      phone: "71 7575995",
      www: "https://biogo.pl/",
    },
    location: {
      latitude: 51.110843016223754,
      longitude: 17.03525661192762,
      city: "Wrocław",
      postalCode: "50-139",
      street: "ul. Szewska",
      houseNumber: "18",
    },
    hives: {
      numberOfHives: 15,
      totalNumberOfBees: 1050000,
      beesPerHive: 70000,
      beesOpenToAdoption: 10000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 15,
      typeOfHoney: "heather, honeydew, forest",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2021",
        numberOfHives: 10,
        numberOfBees: 700000,
      },
      {
        year: "2022",
        numberOfHives: 15,
        numberOfBees: 1050000,
      },
    ],
  },

  {
    id: 16,
    contact: {
      name: "Gospodarstwo Pasieczne Mateusz Zygmunt",
      phone: "500458314",
      www: "http://www.miody-mis.pl/",
    },
    location: {
      latitude: 49.472797172018694,
      longitude: 20.672568955137166,
      city: "Obłazy Ryterskie",
      postalCode: "33-343",
      street: "Obłazy Ryterskie",
      houseNumber: "4",
    },
    hives: {
      numberOfHives: 6,
      totalNumberOfBees: 480000,
      beesPerHive: 80000,
      beesOpenToAdoption: 5000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 15,
      typeOfHoney: "heather, honeydew, forest",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 4,
        numberOfBees: 320000,
      },
      {
        year: "2021",
        numberOfHives: 4,
        numberOfBees: 320000,
      },
      {
        year: "2022",
        numberOfHives: 6,
        numberOfBees: 480000,
      },
    ],
  },

  {
    id: 17,
    contact: {
      name: "GOSPODARSTWO PASIECZNE 'DARY PSZCZÓŁ'",
      phone: "604630435",
      www: "http:/www.darypszczol.pl/",
    },
    location: {
      latitude: 50.4122980170595,
      longitude: 23.71652369750748,
      city: "Dyniska",
      postalCode: "22-678",
      street: "Dyniska",
      houseNumber: "8",
    },
    hives: {
      numberOfHives: 20,
      totalNumberOfBees: 1200000,
      beesPerHive: 60000,
      beesOpenToAdoption: 8000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 5,
      typeOfHoney: "heather, honeydew, forest",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 4,
        numberOfBees: 320000,
      },
      {
        year: "2021",
        numberOfHives: 4,
        numberOfBees: 320000,
      },
      {
        year: "2022",
        numberOfHives: 20,
        numberOfBees: 1200000,
      },
    ],
  },

  {
    id: 18,
    contact: {
      name: "Gospodarstwo Pasieczne 'Beskidzka Barć'",
      phone: "505786430",
      www: "http://www.beskidzkabarc.pl/",
    },
    location: {
      latitude: 50.4122980170595,
      longitude: 23.71652369750748,
      city: "Dyniska",
      postalCode: "22-678",
      street: "Dyniska",
      houseNumber: "8",
    },
    hives: {
      numberOfHives: 10,
      totalNumberOfBees: 800000,
      beesPerHive: 80000,
      beesOpenToAdoption: 2500,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 50,
      typeOfHoney: "raspberry, acacia, rapeseed",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 8,
        numberOfBees: 640000,
      },
      {
        year: "2021",
        numberOfHives: 9,
        numberOfBees: 720000,
      },
      {
        year: "2022",
        numberOfHives: 10,
        numberOfBees: 800000,
      },
    ],
  },

  {
    id: 19,
    contact: {
      name: "Gospodarstwo Pasieczne 'Królewskie Miody'",
      phone: "696098797",
      www: "https://krolewskie-miody.pl/",
    },
    location: {
      latitude: 49.90003858986557,
      longitude: 22.56662009655336,
      city: "Pruchnik",
      postalCode: "37-560",
      street: "Chorzów",
      houseNumber: "86",
    },
    hives: {
      numberOfHives: 16,
      totalNumberOfBees: 960000,
      beesPerHive: 60000,
      beesOpenToAdoption: 4500,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 5,
      typeOfHoney: "heather, honeydew, forest",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 10,
        numberOfBees: 600000,
      },
      {
        year: "2021",
        numberOfHives: 13,
        numberOfBees: 780000,
      },
      {
        year: "2022",
        numberOfHives: 16,
        numberOfBees: 960000,
      },
    ],
  },

  {
    id: 20,
    contact: {
      name: "Gospodarstwo Pszczelarskie MRÓWKA",
      phone: "507050133",
      www: "http://www.pmrowka.pl/",
    },
    location: {
      latitude: 52.440206244418576,
      longitude: 16.82924285614138,
      city: "Poznań",
      postalCode: "60-454",
      street: "Fromborska",
      houseNumber: "14",
    },
    hives: {
      numberOfHives: 5,
      totalNumberOfBees: 350000,
      beesPerHive: 70000,
      beesOpenToAdoption: 1000,
    },
    honey: {
      isAvaiable: true,
      discount: true,
      discountAmount: 8,
      typeOfHoney: "heather, honeydew, forest",
    },
    statistics: [
      {
        year: "2020",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2021",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
      {
        year: "2022",
        numberOfHives: 5,
        numberOfBees: 350000,
      },
    ],
  },
];
export default apiaries;
