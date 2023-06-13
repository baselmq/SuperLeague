const clubsData = [
  {
    idClub: 1,
    name: "Real Madrid",
    image: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
    date_of_creation: "1902",
    country: "Spain",
    number_of_local_titles: 34,
    number_of_European_titles: 14,
    players: [
      {
        name: "Thibaut Courtois",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_courtois_20230215094344.jpg",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "David Alaba",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_alaba_20230215094352.jpg",
        number: 4,
        position: "Defender",
      },
      {
        name: "Éder Militão",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_militao_20230215094350.jpg",
        number: 3,
        position: "Defender",
      },
      {
        name: "Antonio Rüdiger",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_rudiger_20230215094414.jpg",
        number: 22,
        position: "Defender",
      },
      {
        name: "Daniel Carvajal",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_carvajal_20230215094337.jpg",
        number: 2,
        position: "Defender",
      },
      {
        name: "Aurélien Tchouaméni",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_tchouameni_20230215094415.jpg",
        number: 18,
        position: "Midfielder",
      },
      {
        name: "Toni Kroos",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_kroos_20230215094339.jpg",
        number: 8,
        position: "Midfielder",
      },
      {
        name: "Eduardo Camavinga",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_camavinga_20230215094413.jpg",
        number: 12,
        position: "Midfielder",
      },

      {
        name: "Valverde Dipetta",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_valverde_20230215094345.jpg",
        number: 15,
        position: "Midfielder",
      },
      {
        name: "Vinicius Junior",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_vinicius_20230215094346.jpg",
        number: 7,
        position: "Forward",
      },
      {
        name: "Rodrygo Goes",
        photo:
          "https://www.realmadrid.com/img/vertical_380px/380x501_rodrygo_20230215094348.jpg",
        number: 11,
        position: "Forward",
      },
    ],
    trophies: [
      {
        name: "FIFA Club World Cup",
        count: 8,

        image: "../image/fifa-club-world-cups.svg",
      },
      {
        name: "UEFA Champions League",
        count: 14,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "UEFA Super Cup",
        count: 5,
        image: "../image/uefa-supercup.svg",
      },
      // {
      //   name: "UEFA Europa League",
      //   count: 2,
      //   image: "../image/europa-league-cup.svg",
      // },
      {
        name: "La Liga",
        count: 35,
        image: "../image/spanish-la-liga-trophy.svg",
      },
      {
        name: "Copa del Rey",
        count: 20,
        image: "../image/spanish-copa-del-rey.svg",
      },
      {
        name: "Supercopa de España",
        count: 12,
        image: "../image/spanish-supercup.svg",
      },
    ],
    information:
      "Real Madrid is the most successful and popular club in the world. They play at the Santiago Bernabéu and are managed by Carlo Ancelotti. They have won the La Liga title 34 times, more than any other Spanish team, and also hold the record for the most European Cup/Champions League titles with 13. They are known for their glamorous and attacking style of play, and have some of the world's best players such as Karim Benzema, Luka Modric and Sergio Ramos.",
  },
  {
    idClub: 2,
    name: "Manchester City",
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
    date_of_creation: "1880",
    country: "England",
    number_of_local_titles: 7,
    number_of_European_titles: 1,
    players: [
      {
        name: "Ederson",
        photo:
          "https://www.mancity.com/meta/media/0hvgjawq/ederson.png?width=376&quality=100",
        number: 31,
        position: "GOALKEEPER",
      },
      {
        name: "Kyle Walker",
        photo:
          "https://www.mancity.com/meta/media/sgangg5o/kyle-walker.png?width=376&quality=100",
        number: 2,
        position: "DEFENDER",
      },
      {
        name: "Rúben Dias",
        photo:
          "https://www.mancity.com/meta/media/vw0b1q45/ruben-dias.png?width=376&quality=100",
        number: 3,
        position: "DEFENDERS",
      },
      {
        name: "Manuel Akanji",
        photo:
          "https://www.mancity.com/meta/media/oj0hihqs/manuel-akanji.png?width=376&quality=100",
        number: 25,
        position: "DEFENDERS",
      },
      {
        name: "Kevin De Bruyne",
        photo:
          "https://www.mancity.com/meta/media/i0fhd2ed/kevin-de-bruyne.png?width=376&quality=100",
        number: 17,
        position: "MIDFIELDERS",
      },
      {
        name: "Rodri",
        photo:
          "https://www.mancity.com/meta/media/ewwjl5pz/rodrigo.png?width=376&quality=100",
        number: 16,
        position: "MIDFIELDERS",
      },
      {
        name: "Ilkay Gündogan",
        photo:
          "https://www.mancity.com/meta/media/4vvjvvp0/ilkay-gundogan.png?width=376&quality=100",
        number: 8,
        position: "MIDFIELDERS",
      },
      {
        name: "Jack Grealish",
        photo:
          "https://www.mancity.com/meta/media/aoeldoi1/jack-grealish.png?width=376&quality=100",
        number: 10,
        position: "MIDFIELDERS",
      },
      {
        name: "Riyad Mahrez",
        photo:
          "https://www.mancity.com/meta/media/tl0bfftd/riyad-mahrez.png?width=376&quality=100",
        number: 26,
        position: "FORWARDS",
      },
      {
        name: "Erling Haaland",
        photo:
          "https://www.mancity.com/meta/media/e2lawnab/erling-haaland.png?width=376&quality=100",
        number: 9,
        position: "FORWARDS",
      },
      {
        name: "Bernardo Silva",
        photo:
          "https://www.mancity.com/meta/media/343pex31/bernardo-silva.png?width=376&quality=100",
        number: 20,
        position: "MIDFIELDERS",
      },
    ],
    trophies: [
      {
        name: "UEFA Champions League",
        count: 1,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "Premier League",
        count: 9,
        image: "../image/english-football-champions-cup.svg",
      },
      {
        name: "FA Cup",
        count: 7,
        image: "../image/english-football-cup.svg",
      },
      {
        name: "League Cup",
        count: 8,
        image: "../image/english-league-cup.svg",
      },
      {
        name: "Community Shield",
        count: 6,
        image: "../image/english-football-supercup.svg",
      },
      {
        name: "Cup Winners' Cup",
        count: 1,
        image: "../image/winners-cup.svg",
      },
    ],
    information:
      "Manchester City is one of the most successful and popular clubs in England. They play at the Etihad Stadium and are managed by Pep Guardiola. They have won the Premier League five times in the last decade, and also became the first English team to win a domestic treble in 2019. They are known for their attractive and attacking style of play, and have some of the world's best players such as Kevin De Bruyne, Raheem Sterling and Sergio Aguero.",
  },
  {
    idClub: 3,
    name: "Bayern München",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
    date_of_creation: "1900",
    country: "Germany",
    number_of_local_titles: 31,
    number_of_European_titles: 6,
    players: [
      {
        name: "Manuel Neuer",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0000i4-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "Matthijs de Ligt",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-j017re-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 4,
        position: "Centre-Back",
      },
      {
        name: "Dayot Upamecano",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0027kl-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 2,
        position: "Centre-Back",
      },
      {
        name: "Alphonso Davies",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-002fwz-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 19,
        position: "Left-Back",
      },
      {
        name: "João Cancelo",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-j015s4-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 22,
        position: "Right-Back",
      },
      {
        name: "Joshua Kimmich",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0002f5-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 6,
        position: "Defensive Midfield",
      },
      {
        name: "Leon Goretzka",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-000191-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 8,
        position: "Central Midfield",
      },
      {
        name: "Jamal Musiala",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-002gcr-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 42,
        position: "Attacking Midfield",
      },
      {
        name: "Kingsley Coman",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0026pm-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 11,
        position: "Left Winger",
      },
      {
        name: "Leroy Sané",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0002au-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 10,
        position: "Right Winger",
      },
      {
        name: "Serge Gnabry",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0027g6-dfl-clu-00000g-dfl-sea-0001k6.png",
        number: 7,
        position: "Right Winger",
      },
    ],
    trophies: [
      {
        name: "Bundesliga",
        count: 33,
        image: "../image/Bundesliga.png",
      },
      {
        name: "DFB-Pokal",
        count: 20,
        image: "../image/DFB-Pokal.png",
      },
      {
        name: "DFL-Supercup",
        count: 10,
        image: "../image/DFL-Supercup.png",
      },
      {
        name: "UEFA Champions League",
        count: 6,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "UEFA Super Cup",
        count: 2,
        image: "../image/uefa-supercup.svg",
      },

      {
        name: "FIFA Club World Cup",
        count: 3,
        image: "../image/fifa-club-world-cups.svg",
      },
    ],
    information:
      "Bayern München is the most dominant and successful club in Germany. They play at the Allianz Arena and are coached by Julian Nagelsmann. They have won the Bundesliga nine times in a row, and also achieved a historic sextuple in 2020, winning all six trophies they competed for. They are known for their high-intensity and versatile style of play, and have some of the world's best players such as Robert Lewandowski, Thomas Müller and Manuel Neuer.",
  },
  // {
  //   name: "Inter Milan",
  //   image:
  //     "https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg",
  //   date_of_creation: "1908",
  //   country: "Italy",
  //   number_of_local_titles: 19,
  //   number_of_European_titles: 3,
  //   players: [
  //     {
  //       name: "André Onana",
  //       photo:
  //         "https://tmssl.akamaized.net/images/portrait/header/226161-1614335559.jpg?lm=1614335570",
  //       number: 24,
  //       position: "Goalkeeper",
  //     },
  //     {
  //       name: "Milan Skriniar",
  //       photo:
  //         "https://tmssl.akamaized.net/images/portrait/header/232363-1614335559.jpg?lm=1614335570",
  //       number: 37,
  //       position: "Centre-Back",
  //     },
  //     {
  //       name: "Alessandro Bastoni",
  //       photo:
  //         "https://tmssl.akamaized.net/images/portrait/header/465737-1621344624.jpg?lm=1621344635",
  //       number: 95,
  //       position: "Centre-Back",
  //     },
  //     {
  //       name: "Stefan de Vrij",
  //       photo:
  //         "https://tmssl.akamaized.net/images/portrait/header/111196-1614335559.jpg?lm=1614335570",
  //       number: 6,
  //       position: "Centre-Back",
  //     },
  //     {
  //       name: "Federico Dimarco",
  //       photo: "",
  //       number: 32,
  //       position: "Left-Back",
  //     },
  //     {
  //       name: "Denzel Dumfries",
  //       photo: "",
  //       number: 2,
  //       position: "Right-Back",
  //     },
  //     {
  //       name: "Marcelo Brozovic",
  //       photo: "",
  //       number: 77,
  //       position: "Defensive Midfield",
  //     },
  //     {
  //       name: "Nicolò Barella",
  //       photo: "",
  //       number: 23,
  //       position: "Central Midfield",
  //     },
  //     {
  //       name: "Hakan Calhanoglu",
  //       photo: "",
  //       number: 20,
  //       position: "Central Midfield",
  //     },
  //     {
  //       name: "Joaquín Correa",
  //       photo: "",
  //       number: 11,
  //       position: "Second Striker",
  //     },
  //     {
  //       name: "Romelu Lukaku",
  //       photo: "",
  //       number: 90,
  //       position: "Centre-Forward",
  //     },
  //   ],
  //   information:
  //     "Inter Milan is one of the most prestigious and historic clubs in Italy. They play at the San Siro and are led by Simone Inzaghi. They have won the Serie A title for the first time in 11 years in 2021, ending Juventus' dominance. They are known for their defensive solidity and counter-attacking prowess, and have some of the world's best players such as Romelu Lukaku, Lautaro Martinez and Milan Skriniar.",
  // },
  {
    idClub: 4,
    name: "SSC Napoli",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/SSC_Neapel.svg",
    date_of_creation: "1926",
    country: "Italy",
    number_of_local_titles: 2,
    number_of_European_titles: 1,
    players: [
      {
        name: "Alex Meret",
        photo: "https://cdn-assets.sscnapoli.it/uploads/2022/09/meret-1.png",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "Min-jae Kim",
        photo: "https://cdn-assets.sscnapoli.it/uploads/2022/09/kim-1.png",
        number: 3,
        position: "Centre-Back",
      },
      {
        name: "Amir Rrahmani",
        photo: "https://cdn-assets.sscnapoli.it/uploads/2022/09/rrahmani-1.png",
        number: 13,
        position: "Centre-Back",
      },
      {
        name: "Leo Östigard",
        photo: "https://cdn-assets.sscnapoli.it/uploads/2022/09/ostigard-1.png",
        number: 55,
        position: "Centre-Back",
      },
      {
        name: "Mathías Olivera",
        photo: "https://cdn-assets.sscnapoli.it/uploads/2022/09/olivera-1.png",
        number: 17,
        position: "Left-Back",
      },
      {
        name: "Giovanni Di Lorenzo",
        photo:
          "https://cdn-assets.sscnapoli.it/uploads/2022/09/di-lorenzo-1.png",
        number: 22,
        position: "Right-Back",
      },
      {
        name: "Stanislav Lobotka",
        photo: "https://cdn-assets.sscnapoli.it/uploads/2022/09/lobotka-1.png",
        number: 68,
        position: "Defensive Midfield",
      },
      {
        name: "Piotr Zielinski",
        photo:
          "https://cdn-assets.sscnapoli.it/uploads/2022/09/zielinski-1.png",
        number: 20,
        position: "Central Midfield",
      },
      {
        name: "Frank Anguissa",
        photo: "https://cdn-assets.sscnapoli.it/uploads/2022/09/anguissa-1.png",
        number: 99,
        position: "Central Midfield",
      },
      {
        name: "Khvicha Kvaratskhelia",
        photo:
          "https://cdn-assets.sscnapoli.it/uploads/2022/09/kvaratskhelia-1.png",
        number: 77,
        position: "Left Winger",
      },
      {
        name: "Victor Osimhen",
        photo: "https://cdn-assets.sscnapoli.it/uploads/2022/09/osimhen-1.png",
        number: 9,
        position: "Centre-Forward",
      },
    ],
    trophies: [
      {
        name: "Serie A",
        count: 3,
        image: "../image/italian-champion-cup.svg",
      },
      {
        name: "Coppa Italia",
        count: 6,
        image: "../image/italian-Coppa-Italia-cup.svg",
      },
      {
        name: "Supercoppa Italiana",
        count: 2,
        image: "../image/italian-supercup.svg",
      },
      {
        name: "Europa League",
        count: 1,
        image: "../image/europa-league-cup.svg",
      },
      {
        name: "Serie B",
        count: 1,
        image: "../image/italian-cup-seria-b.svg",
      },
    ],
    information:
      "SSC Napoli is one of the most passionate and beloved clubs in Italy. They play at the Stadio Diego Armando Maradona and are coached by Luciano Spalletti. They have won the Serie A title twice, in 1987 and 1990, under the legendary Diego Maradona, who is considered as their greatest player ever. They are known for their flair and creativity, and have some of the world's best players such as Lorenzo Insigne, Dries Mertens and Kalidou Koulibaly.",
  },
  {
    idClub: 5,
    name: "Liverpool FC",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
    date_of_creation: "1892",
    country: "England",
    number_of_local_titles: 19,
    number_of_European_titles: 6,
    players: [
      {
        name: "Alisson Becker",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "Virgil van Dijk",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p97032.png",
        number: 4,
        position: "Centre-Back",
      },
      {
        name: "Ibrahima Konate",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p204716.png",
        number: 5,
        position: "Centre-Back",
      },
      {
        name: "Joe Gomez",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p171287.png",
        number: 2,
        position: "Centre-Back",
      },
      {
        name: "Andrew Robertson",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p122798.png",
        number: 26,
        position: "Left-Back",
      },
      {
        name: "Trent Alexander-Arnold",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p169187.png",
        number: 66,
        position: "Right-Back",
      },
      {
        name: "Fabinho",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p116643.png",
        number: 3,
        position: "Defensive Midfield",
      },
      {
        name: "Thiago Alcântara",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p61558.png",
        number: 6,
        position: "Central Midfield",
      },
      {
        name: "Jordan Henderson",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p56979.png",
        number: 14,
        position: "Central Midfield",
      },
      {
        name: "Roberto Firmino",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p92217.png",
        number: 9,
        position: "Second Striker",
      },
      {
        name: "Mohamed Salah",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png",
        number: 11,
        position: "Centre-Forward",
      },
    ],
    trophies: [
      {
        name: "Premier League",
        count: 19,
        image: "../image/english-football-champions-cup.svg",
      },
      {
        name: "FA Cup",
        count: 8,
        image: "../image/english-football-cup.svg",
      },
      {
        name: "League Cup",
        count: 9,
        image: "../image/english-league-cup.svg",
      },
      {
        name: "Community Shield",
        count: 16,
        image: "../image/english-football-supercup.svg",
      },
      {
        name: "UEFA Champions League",
        count: 6,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "UEFA Super Cup",
        count: 4,
        image: "../image/uefa-supercup.svg",
      },
    ],
    information:
      "Liverpool FC is one of the most successful and popular clubs in England and the world. They play at Anfield and are managed by Jürgen Klopp. They have won the Premier League once, in 2020, ending a 30-year drought, and also won the Champions League for the sixth time in 2019. They are known for their passionate fans, their anthem 'You'll Never Walk Alone', and their attacking style of play, featuring players such as Mohamed Salah, Sadio Mané and Virgil van Dijk.",
  },
  //   {
  //     name: "FC Porto",
  //     image: "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg",
  //     date_of_creation: "1893",
  //     country: "Portugal",
  //     number_of_local_titles: 29,
  //     number_of_European_titles: 2,
  //     players: [
  //       {
  //         name: "Diogo Costa",
  //         photo:
  //           "https://tmssl.akamaized.net/images/portrait/header/240414-1614335559.jpg?lm=1614335570",
  //         number: 99,
  //         position: "Goalkeeper",
  //       },
  //       {
  //         name: "David Carmo",
  //         photo: "",
  //         number: 4,
  //         position: "Centre-Back",
  //       },
  //       {
  //         name: "Fábio Cardoso",
  //         photo: "",
  //         number: 2,
  //         position: "Centre-Back",
  //       },
  //       {
  //         name: "Pepe",
  //         photo: "",
  //         number: 3,
  //         position: "Centre-Back",
  //       },
  //       {
  //         name: "Zaidu",
  //         photo: "",
  //         number: 12,
  //         position: "Left-Back",
  //       },
  //       {
  //         name: "Wendell",
  //         photo: "",
  //         number: 22,
  //         position: "Left-Back",
  //       },
  //       {
  //         name: "João Mário",
  //         photo: "",
  //         number: 23,
  //         position: "Right-Back",
  //       },
  //       {
  //         name: "Wilson Manafá",
  //         photo: "",
  //         number: 18,
  //         position: "Right-Back",
  //       },
  //       {
  //         name: "Marko Grujic",
  //         photo: "",
  //         number: 16,
  //         position: "Defensive Midfield",
  //       },
  //       {
  //         name: "Mateus Uribe",
  //         photo: "",
  //         number: 8,
  //         position: "Central Midfield",
  //       },
  //       {
  //         name: "Gabriel Veron",
  //         photo: "",
  //         number: 7,
  //         position: "Right Winger",
  //       },
  //     ],
  //     information:
  //       "FC Porto is the most dominant and successful club in Portugal. They play at the Estádio do Dragão and are coached by Sérgio Conceição. They have won the Primeira Liga 29 times, more than any other Portuguese team, and also won the Champions League twice, in 1987 and 2004. They are known for their fierce rivalry with Benfica and Sporting, their blue and white colors, and their talent development, producing players such as Deco, Ricardo Carvalho and James Rodríguez.",
  //   },
  {
    idClub: 6,
    name: "Benfica",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a2/SL_Benfica_logo.svg",
    date_of_creation: "1904",
    country: "Portugal",
    number_of_local_titles: 37,
    number_of_European_titles: 2,
    players: [
      {
        name: "Odysseas Vlachodimos",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/odysseas.jpg",
        number: 99,
        position: "Goalkeeper",
      },
      {
        name: "António Silva",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/antonio-silva.jpg",
        number: 66,
        position: "Centre-Back",
      },
      {
        name: "Morato",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/morato.jpg",
        number: 91,
        position: "Centre-Back",
      },
      {
        name: "Lucas Veríssimo",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/lucas-verissimo.jpg",
        number: 4,
        position: "Centre-Back",
      },
      {
        name: "Alejandro Grimaldo",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/grimaldo.jpg",
        number: 3,
        position: "Left-Back",
      },
      {
        name: "Mihailo Ristic",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/ristic.jpg",
        number: 23,
        position: "Left-Back",
      },
      {
        name: "Alexander Bah",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/alexander-bah.jpg",
        number: 6,
        position: "Right-Back",
      },
      {
        name: "Gilberto",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/gilberto.jpg",
        number: 2,
        position: "Right-Back",
      },
      {
        name: "Fredrik Aursnes",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/fredrik-aursnes.jpg",
        number: 8,
        position: "Defensive Midfield",
      },
      {
        name: "João Mário",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/joao-mario.jpg",
        number: 20,
        position: "Central Midfield",
      },
      {
        name: "David Neres",
        photo:
          "https://www.slbenfica.pt/-/media/benficadp/players-media/pictures/futebol/22-23/equipa-principal/neres.jpg",
        number: 7,
        position: "Right Winger",
      },
    ],
    trophies: [
      {
        name: "Primeira Liga",
        count: 38,
        image: "../image/Primeira_Liga_Trophy.svg",
      },
      {
        name: "Taça de Portugal",
        count: 26,
        image: "../image/Taça_de_Portugal_Trophy.svg",
      },
      {
        name: "Taça da Liga",
        count: 7,
        image: "../image/Portuguese_League_Cup.svg",
      },
      {
        name: "Supertaça Cândido de Oliveira",
        count: 8,
        image: "../image/Supertaça_Cândido_de_Oliveira.svg",
      },

      {
        name: "Champions League",
        count: 2,
        image: "../image/uefa-champions-league-cup.svg",
      },
    ],
    information:
      "Benfica is one of the most prestigious and historic clubs in Portugal and Europe. They play at the Estádio da Luz and are led by Jorge Jesus. They have won the Primeira Liga 37 times, more than any other Portuguese team, and also won the European Cup twice, in 1961 and 1962. They are known for their passionate fans, their red and white colors, and their legendary players such as Eusébio, Rui Costa and Luis Figo.",
  },
  {
    idClub: 7,
    name: "Borussia Dortmund",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    date_of_creation: "1909",
    country: "Germany",
    number_of_local_titles: 8,
    number_of_European_titles: 1,
    players: [
      {
        name: "Gregor Kobel",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0027bl-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "Nico Schlotterbeck",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0028t1-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 4,
        position: "Centre-Back",
      },
      {
        name: "Niklas Süle",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0001ht-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 25,
        position: "Centre-Back",
      },
      {
        name: "Mats Hummels",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-000007-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 15,
        position: "Centre-Back",
      },
      {
        name: "Raphaël Guerreiro",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0027ah-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 13,
        position: "Left-Back",
      },
      {
        name: "Tom Rothe",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0027ah-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 36,
        position: "Left-Back",
      },
      {
        name: "Julian Ryerson",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0028rm-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 26,
        position: "Right-Back",
      },
      {
        name: "Marius Wolf",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-0028rm-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 17,
        position: "Right-Back",
      },
      {
        name: "Salih Özcan",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-00278o-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 6,
        position: "Defensive Midfield",
      },
      {
        name: "Marco Pasalic",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-j01ie4-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 46,
        position: "Striker",
      },
      {
        name: "Karim Adeyemi",
        photo:
          "https://i.bundesliga.com/player/dfl-obj-j01e9x-dfl-clu-000007-dfl-sea-0001k6.png",
        number: 27,
        position: "Left Winger",
      },
    ],
    trophies: [
      {
        name: "Bundesliga",
        count: 8,
        image: "../image/Bundesliga.png",
      },
      {
        name: "DFB-Pokal",
        count: 5,
        image: "../image/DFB-Pokal.png",
      },
      {
        name: "DFL-Supercup",
        count: 6,
        image: "../image/DFL-Supercup.png",
      },
      {
        name: "UEFA Champions League",
        count: 1,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "UEFA Cup Winners' Cup",
        count: 1,
        image: "../image/winners-cup.svg",
      },
      {
        name: "Intercontinental Cup",
        count: 1,
        image: "../image/Intercontinental-Cup.svg",
      },
    ],
    information:
      "Borussia Dortmund is one of the most popular and exciting clubs in Germany and Europe. They play at the Signal Iduna Park and are managed by Marco Rose. They have won the Bundesliga eight times, and also won the Champions League in 1997. They are known for their loyal and loud fans, their yellow and black colors, and their attacking style of play, featuring players such as Erling Haaland, Marco Reus and Jadon Sancho.",
  },
  {
    idClub: 8,
    name: "Barcelona",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
    date_of_creation: "1899",
    country: "Spain",
    number_of_local_titles: 26,
    number_of_European_titles: 5,
    players: [
      {
        name: "Marc-André ter Stegen",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p77318/512x512/p77318_t178_2022_1_003_000.png",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "Ronald Araújo",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p445087/512x512/p445087_t178_2022_1_003_000.png",
        number: 4,
        position: "Centre-Back",
      },
      {
        name: "Jules Koundé",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p220325/512x512/p220325_t178_2022_1_003_000.png",
        number: 23,
        position: "Centre-Back",
      },
      {
        name: "Andreas Christensen",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p135363/512x512/p135363_t178_2022_1_003_000.png",
        number: 15,
        position: "Centre-Back",
      },
      {
        name: "Alejandro Balde",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p493019/512x512/p493019_t178_2022_1_003_000.png",
        number: 28,
        position: "Left-Back",
      },
      {
        name: "Ousmane Dembélé",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p219438/512x512/p219438_t178_2022_1_003_000.png",
        number: 7,
        position: "Forward",
      },
      {
        name: "Frenkie de Jong",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p209712/512x512/p209712_t178_2022_1_003_000.png",
        number: 21,
        position: "Central Midfield",
      },
      {
        name: "Pedri",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p490541/512x512/p490541_t178_2022_1_003_000.png",
        number: 8,
        position: "Central Midfield",
      },
      {
        name: "Gavi",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p500046/512x512/p500046_t178_2022_1_003_000.png",
        number: 30,
        position: "Midfielder",
      },
      {
        name: "Ansu Fati",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p465607/512x512/p465607_t178_2022_1_003_000.png",
        number: 10,
        position: "Left Winger",
      },
      {
        name: "Robert Lewandowski",
        photo:
          "https://assets.laliga.com/squad/2022/t178/p56764/512x512/p56764_t178_2022_1_003_000.png",
        number: 9,
        position: "Centre-Forward",
      },
    ],
    trophies: [
      {
        name: "La Liga",
        count: 27,
        image: "../image/spanish-la-liga-trophy.svg",
      },
      {
        name: "Copa del Rey",
        count: 31,
        image: "../image/spanish-copa-del-rey.svg",
      },
      {
        name: "Supercopa de España",
        count: 14,
        image: "../image/spanish-supercup.svg",
      },
      {
        name: "UEFA Champions League",
        count: 5,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "UEFA Super Cup",
        count: 5,
        image: "../image/uefa-supercup.svg",
      },
      {
        name: "FIFA Club World Cup",
        count: 3,
        image: "../image/fifa-club-world-cups.svg",
      },
    ],
    information:
      "Barcelona is one of the most successful and admired clubs in the world. They play at the Camp Nou and are coached by Xavi Hernández. They have won La Liga 26 times, and also won the Champions League five times, most recently in 2015. They are known for their philosophy of 'more than a club', their motto 'mes que un club', and their beautiful style of play, featuring players such as Lionel Messi, Sergio Busquets and Pedri.",
  },
  {
    idClub: 9,
    name: "Manchester United",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
    date_of_creation: "1878",
    country: "England",
    number_of_local_titles: 20,
    number_of_European_titles: 3,
    players: [
      {
        name: "David de Gea",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p51940.png",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "Raphaël Varane",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p90152.png",
        number: 19,
        position: "Centre-Back",
      },
      {
        name: "Harry Maguire",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p90152.png",
        number: 5,
        position: "Centre-Back",
      },
      {
        name: "Luke Shaw",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p106760.png",
        number: 23,
        position: "Left-Back",
      },
      {
        name: "Aaron Wan-Bissaka",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p214590.png",
        number: 29,
        position: "Right-Back",
      },
      {
        name: "Casemiro",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p61256.png",
        number: 18,
        position: "Defensive Midfield",
      },
      {
        name: "Bruno Fernandes",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p141746.png",
        number: 8,
        position: "Central Midfield",
      },
      {
        name: "Christian Eriksen",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p80607.png",
        number: 14,
        position: "Attacking Midfield",
      },
      {
        name: "Antony",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p467169.png",
        number: 21,
        position: "Forward",
      },
      {
        name: "Marcus Rashford",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p176297.png",
        number: 10,
        position: "Forward",
      },
      {
        name: "Fred",
        photo:
          "https://resources.premierleague.com/premierleague/photos/players/250x250/p101582.png",
        number: 17,
        position: "Midfielder",
      },
    ],
    trophies: [
      {
        name: "Premier League",
        count: 20,
        image: "../image/english-football-champions-cup.svg",
      },
      {
        name: "FA Cup",
        count: 12,
        image: "../image/english-football-cup.svg",
      },
      {
        name: "League Cup",
        count: 6,
        image: "../image/english-league-cup.svg",
      },
      {
        name: "Community Shield",
        count: 21,
        image: "../image/english-football-supercup.svg",
      },
      {
        name: "UEFA Champions Leaguep",
        count: 3,
        image: "../image/uefa-champions-league-cup.svg",
      },
    ],
    information:
      "Manchester United is one of the most successful and popular clubs in England and the world. They play at Old Trafford and are managed by Ole Gunnar Solskjær. They have won the Premier League 13 times, more than any other English team, and also won the Champions League three times, most recently in 2008. They are known for their history of producing homegrown talent, their iconic red shirts, and their legendary players such as Sir Bobby Charlton, George Best and Cristiano Ronaldo.",
  },
  {
    idClub: 10,
    name: "Chelsea",
    image: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg",
    date_of_creation: "1905",
    country: "England",
    number_of_local_titles: 6,
    number_of_European_titles: 2,
    players: [
      {
        name: "Kepa Arrizabalaga",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Kepa_profile_avatar_final_22-23.png",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "Kalidou Koulibaly",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Koulibaly_profile_avatar_final_22-23.png",
        number: 26,
        position: "Centre-Back",
      },
      {
        name: "Thiago Silva",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,h_860,q_50/editorial/people/first-team/2022-23/Thiago_Silva_profile_avatar_final_22-23.png",
        number: 6,
        position: "Centre-Back",
      },
      {
        name: "Marc Cucurella",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Cucurella_profile_avatar_final_22-23.png",
        number: 32,
        position: "Left-Back",
      },
      {
        name: "Reece James",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Reece_James_profile_avatar_final_22-23.png",
        number: 24,
        position: "Right-Back",
      },
      {
        name: "Denis Zakaria",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Zakaria_profile_avatar_final_22-23.png",
        number: 20,
        position: "Defensive Midfield",
      },
      {
        name: "Mateo Kovacic",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Kovacic_profile_avatar_final_22-23.png",
        number: 8,
        position: "Central Midfield",
      },
      {
        name: "Christian Pulisic",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Pulisic_profile_avatar_final_22-23.png",
        number: 10,
        position: "Attacking Midfield",
      },
      {
        name: "Hakim Ziyech",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Ziyech_profile_avatar_final_22-23.png",
        number: 22,
        position: "Left Winger",
      },
      {
        name: "Kai Havertz",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Havertz_profile_avatar_final_22-23.png",
        number: 29,
        position: "Attacking midfielder",
      },
      {
        name: "Ngolo Kante",
        photo:
          "https://img.chelseafc.com/image/upload/f_auto,w_400,q_90/editorial/people/first-team/2022-23/Kante_profile_avatar_final_22-23.png",
        number: 7,
        position: "Midfielder",
      },
    ],
    trophies: [
      {
        name: "Premier League",
        count: 6,
        image: "../image/english-football-champions-cup.svg",
      },
      {
        name: "FA Cup",
        count: 8,
        image: "../image/english-football-cup.svg",
      },
      {
        name: "League Cup",
        count: 5,
        image: "../image/english-league-cup.svg",
      },
      {
        name: "Community Shield",
        count: 4,
        image: "../image/english-football-supercup.svg",
      },
      {
        name: "UEFA Champions League",
        count: 2,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "UEFA Super Cup",
        count: 2,
        image: "../image/uefa-supercup.svg",
      },
    ],
    information:
      "Chelsea is one of the most successful and wealthy clubs in England and Europe. They play at Stamford Bridge and are coached by Thomas Tuchel. They have won the Premier League six times, and also won the Champions League twice, in 2012 and 2021. They are known for their ambitious owner Roman Abramovich, their blue shirts, and their star players such as N'Golo Kanté, Mason Mount and Romelu Lukaku.",
  },
  {
    idClub: 11,
    name: "AC Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg",
    date_of_creation: "1899",
    country: "Italy",
    number_of_local_titles: 18,
    number_of_European_titles: 7,
    players: [
      {
        name: "Mike Maignan",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/92846aac-5469-4755-8146-9e1ebc08ee95/Maignan-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 16,
        position: "Goalkeeper",
      },
      {
        name: "Fikayo Tomori",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/85562950-0a4e-4480-9797-9074a34b9b96/Tomori-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 23,
        position: "Centre-Back",
      },
      {
        name: "Malick Thiaw",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/58ad3f40-607b-4972-bf51-b03812583df8/Thiaw-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 28,
        position: "Centre-Back",
      },

      {
        name: "Fodé Ballo-Touré",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/79e7a705-6bac-4a26-87c0-cb140fc77688/BalloToure-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 5,
        position: "Left-Back",
      },
      {
        name: "Theo Hernández",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/56f16dfd-0064-4eb2-ae6e-8ec66b34c56c/Hernandez-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 19,
        position: "Left-Back",
      },
      {
        name: "Tiémoué Bakayoko",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/0ef70db0-68db-425a-8016-af5269d1f5de/Bakayoko-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 14,
        position: "Defensive Midfield",
      },
      {
        name: "Sandro Tonali",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/3ce6a763-4013-4fb1-bdf6-7fe590b3ac94/Tonali-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 8,
        position: "Defensive Midfield",
      },
      {
        name: "Ismaël Bennacer",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/2498de38-cc84-4ca1-ab4d-e3e35522582e/Bennacer-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 4,
        position: "Central Midfield",
      },
      {
        name: "Yacine Adli",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/6ec761b0-2c84-4e43-8296-50e884cb51cf/Adli-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 7,
        position: "Attacking Midfield",
      },
      {
        name: "Rafael Leão",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/0403d37e-f8ab-4900-a269-b1bf4bafefae/Leao-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 17,
        position: "Left Winger",
      },
      {
        name: "Olivier Giroud",
        photo:
          "https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/6b2414d4-a109-43d5-9387-cff825ddd3fd/Giroud-Large.png?w=undefined&h=498&dpr=1&auto=format",
        number: 9,
        position: "Centre-Forward",
      },
    ],
    trophies: [
      {
        name: "Serie A",
        count: 19,
        image: "../image/italian-champion-cup.svg",
      },
      {
        name: "Coppa Italia",
        count: 5,
        image: "../image/italian-Coppa-Italia-cup.svg",
      },
      {
        name: "Supercoppa Italiana",
        count: 7,
        image: "../image/italian-supercup.svg",
      },
      {
        name: "UEFA Champions League",
        count: 7,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "UEFA Super Cup",
        count: 5,
        image: "../image/uefa-supercup.svg",
      },
      {
        name: "FIFA Club World Cup",
        count: 4,
        image: "../image/fifa-club-world-cups.svg",
      },
    ],
    information:
      "AC Milan is one of the most prestigious and historic clubs in Italy and Europe. They play at the San Siro and are led by Stefano Pioli. They have won the Serie A title 18 times, and also won the Champions League seven times, most recently in 2007. They are known for their red and black colors, their fierce rivalry with Inter Milan, and their legendary players such as Paolo Maldini, Franco Baresi and Kaká.",
  },
  {
    idClub: 12,
    name: "Juventus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juventus_FC_2017_icon_%28black%29.svg",
    date_of_creation: "1897",
    country: "Italy",
    number_of_local_titles: 36,
    number_of_European_titles: 2,
    players: [
      {
        name: "Wojciech Szczesny",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/xu2mzmixqajdgs0qdlpt.png",
        number: 1,
        position: "Goalkeeper",
      },
      {
        name: "Bremer",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/pl9vzpq1lpeycyiv2jw2.png",
        number: 3,
        position: "Centre-Back",
      },
      {
        name: "Federico Gatti",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/vgjm5m6aikicwu93yayc.png",
        number: 15,
        position: "Centre-Back",
      },
      {
        name: "Leonardo Bonucci",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/oedomcjzh5a7fkmbw8ok.png",
        number: 19,
        position: "Centre-Back",
      },
      {
        name: "Alex Sandro",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/uzf5kzguyrj5f5qsghbh.png",
        number: 12,
        position: "Left-Back",
      },
      {
        name: "Mattia De Sciglio",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/ms5sjhvbcjjlcqxi8w86.png",
        number: 2,
        position: "Right-Back",
      },
      {
        name: "Manuel Locatelli",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/oywez1sy1df4b6uhrif0.png",
        number: 5,
        position: "Defensive Midfield",
      },
      {
        name: "Paul Pogba",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/iiobfklyouu2hcegvhux.png",
        number: 10,
        position: "Central Midfield",
      },
      {
        name: "Filip Kostic",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/aabsbcoybf6nurljqzvp.png",
        number: 17,
        position: "Left Midfield",
      },
      {
        name: "Dusan Vlahovic",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/vgcpbdht5zicyuohavcz.png",
        number: 9,
        position: "Centre-Forward",
      },
      {
        name: "Angel Di Maria",
        photo:
          "https://www.juventus.com/images/image/private/t_portrait_tablet_desktop/f_png/dev/rgtg7fe5bpn7chkgdkrq.png",
        number: 22,
        position: "Right Winger",
      },
    ],
    trophies: [
      {
        name: "Serie A",
        count: 36,
        image: "../image/italian-champion-cup.svg",
      },
      {
        name: "Coppa Italia",
        count: 14,
        image: "../image/italian-Coppa-Italia-cup.svg",
      },
      {
        name: "Supercoppa Italiana",
        count: 9,
        image: "../image/italian-supercup.svg",
      },
      {
        name: "UEFA Champions League",
        count: 2,
        image: "../image/uefa-champions-league-cup.svg",
      },
      {
        name: "UEFA Super Cup",
        count: 2,
        image: "../image/uefa-supercup.svg",
      },
      {
        name: "UEFA Europa League",
        count: 3,
        image: "../image/europa-league-cup.svg",
      },
    ],
    information:
      "Juventus is the most dominant and successful club in Italy. They play at the Allianz Stadium and are coached by Massimiliano Allegri. They have won the Serie A title 36 times, more than any other Italian team, and also won the Champions League twice, in 1985 and 1996. They are known for their black and white stripes, their nickname 'The Old Lady', and their star players such as Giorgio Chiellini, Paulo Dybala and Federico Chiesa.",
  },
];

export default clubsData;
