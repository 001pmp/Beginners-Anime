const animeDatabase = [
    {
        id: 1,
        name: "Attack on Titan",
        emoji: "⚔️",
        genres: ["Action", "Fantasy", "Drama"],
        episodes: 75,
        seasons: 4,
        rating: 9.0,
        status: "Completed",
        description: "In a world where giant humanoid creatures called Titans prey on humans, a young man witnesses his mother's death and joins the military to fight against the Titans. An epic tale of survival and revenge.",
        suggestions: [2, 5, 8],
        details: {
            studio: "Wit Studio / MAPPA",
            aired: "2013 - 2023",
            director: "Hajime Isayama",
            votes: 1200000
        }
    },
    {
        id: 2,
        name: "Death Note",
        emoji: "📓",
        genres: ["Supernatural", "Drama", "Comedy"],
        episodes: 37,
        seasons: 2,
        rating: 8.9,
        status: "Completed",
        description: "A high school student finds a notebook that allows him to kill anyone whose name he writes in it. A psychological thriller about power, justice, and morality.",
        suggestions: [1, 6, 10],
        details: {
            studio: "Madhouse",
            aired: "2006 - 2007",
            director: "Tetsuo Araki",
            votes: 980000
        }
    },
    {
        id: 3,
        name: "Demon Slayer",
        emoji: "🗡️",
        genres: ["Action", "Adventure", "Supernatural"],
        episodes: 55,
        seasons: 3,
        rating: 8.8,
        status: "Ongoing",
        description: "After his sister is turned into a demon, a young man joins the Demon Slayer Corps to find a cure and avenge his family. Stunning visuals and emotional storytelling.",
        suggestions: [1, 4, 7],
        details: {
            studio: "ufotable",
            aired: "2019 - Present",
            director: "Haruo Sotozaki",
            votes: 1100000
        }
    },
    {
        id: 4,
        name: "My Hero Academia",
        emoji: "🦸",
        genres: ["Action", "Comedy", "Slice of Life"],
        episodes: 113,
        seasons: 6,
        rating: 8.4,
        status: "Ongoing",
        description: "In a world where most people have superpowers called 'Quirks', a powerless boy enrolls in a hero academy to achieve his dreams. An inspiring story about determination and friendship.",
        suggestions: [3, 9, 12],
        details: {
            studio: "Bones",
            aired: "2016 - Present",
            director: "Kenji Nagasaki",
            votes: 1050000
        }
    },
    {
        id: 5,
        name: "Fullmetal Alchemist",
        emoji: "⚗️",
        genres: ["Action", "Fantasy", "Drama"],
        episodes: 64,
        seasons: 2,
        rating: 9.1,
        status: "Completed",
        description: "Two brothers attempt to resurrect their mother using alchemy, leading to a catastrophic consequence. A masterpiece about sacrifice, ambition, and redemption.",
        suggestions: [1, 2, 11],
        details: {
            studio: "Bones",
            aired: "2005 - 2010",
            director: "Kazuya Murata / Yasuhiro Imagawa",
            votes: 920000
        }
    },
    {
        id: 6,
        name: "Steins;Gate",
        emoji: "⏰",
        genres: ["Sci-Fi", "Supernatural", "Drama"],
        episodes: 24,
        seasons: 1,
        rating: 9.0,
        status: "Completed",
        description: "A group of friends discovers their microwave can send messages to the past, altering timelines. A mind-bending thriller about time travel and consequences.",
        suggestions: [2, 10, 13],
        details: {
            studio: "White Fox",
            aired: "2011",
            director: "Hiroshi Hamasaki",
            votes: 850000
        }
    },
    {
        id: 7,
        name: "Sword Art Online",
        emoji: "⚔️",
        genres: ["Action", "Romance", "Fantasy"],
        episodes: 97,
        seasons: 4,
        rating: 7.8,
        status: "Ongoing",
        description: "Players are trapped in a virtual reality MMORPG and must clear all levels to escape. An adventure filled with action, romance, and mystery.",
        suggestions: [3, 4, 14],
        details: {
            studio: "A-1 Pictures",
            aired: "2012 - Present",
            director: "Tomohiko Itô",
            votes: 780000
        }
    },
    {
        id: 8,
        name: "Tokyo Ghoul",
        emoji: "👹",
        genres: ["Action", "Supernatural", "Drama"],
        episodes: 48,
        seasons: 2,
        rating: 7.8,
        status: "Completed",
        description: "A human becomes a half-ghoul after a chance encounter and must navigate a world where ghouls hide among humans. Dark and intense psychological thriller.",
        suggestions: [1, 5, 15],
        details: {
            studio: "Studio Pierrot",
            aired: "2014 - 2018",
            director: "Shuhei Mobutu",
            votes: 810000
        }
    },
    {
        id: 9,
        name: "One Piece",
        emoji: "🏴‍☠️",
        genres: ["Adventure", "Action", "Comedy"],
        episodes: 1000,
        seasons: 20,
        rating: 8.9,
        status: "Ongoing",
        description: "A young pirate dreams of finding the legendary treasure and becoming Pirate King. An epic adventure with unforgettable characters and themes of friendship.",
        suggestions: [4, 11, 12],
        details: {
            studio: "Toei Animation",
            aired: "1999 - Present",
            director: "Konosuke Uda / Hiroyuki Yamashita",
            votes: 950000
        }
    },
    {
        id: 10,
        name: "Ergo Proxy",
        emoji: "🤖",
        genres: ["Sci-Fi", "Supernatural", "Drama"],
        episodes: 23,
        seasons: 1,
        rating: 7.6,
        status: "Completed",
        description: "In a post-apocalyptic world, a girl and a proxy (android) form an unlikely bond. A philosophical journey through a decaying world.",
        suggestions: [6, 13, 16],
        details: {
            studio: "Manglobe",
            aired: "2006 - 2007",
            director: "Atsuko Ishizuka",
            votes: 420000
        }
    },
    {
        id: 11,
        name: "Naruto",
        emoji: "🥷",
        genres: ["Action", "Adventure", "Supernatural"],
        episodes: 500,
        seasons: 16,
        rating: 8.5,
        status: "Completed",
        description: "A young ninja with a demon sealed inside him dreams of becoming Hokage. A legendary series about hard work, determination, and friendship.",
        suggestions: [9, 4, 12],
        details: {
            studio: "Studio Pierrot",
            aired: "2002 - 2017",
            director: "Hayato Date / Osamu Dezaki",
            votes: 1000000
        }
    },
    {
        id: 12,
        name: "Code Geass",
        emoji: "👁️",
        genres: ["Action", "Drama", "Supernatural"],
        episodes: 50,
        seasons: 2,
        rating: 8.3,
        status: "Completed",
        description: "A high school student gains a supernatural power to command anyone with his gaze and leads a rebellion against an empire. Strategic battles and moral dilemmas.",
        suggestions: [2, 11, 6],
        details: {
            studio: "Sunrise",
            aired: "2006 - 2008",
            director: "Goro Taniguchi",
            votes: 750000
        }
    },
    {
        id: 13,
        name: "Psycho-Pass",
        emoji: "📸",
        genres: ["Sci-Fi", "Drama", "Action"],
        episodes: 22,
        seasons: 1,
        rating: 8.1,
        status: "Completed",
        description: "In a dystopian future, an AI system monitors citizens' mental states. When a crime-fighting unit becomes involved in a conspiracy, they question the system's morality.",
        suggestions: [6, 10, 14],
        details: {
            studio: "Production I.G",
            aired: "2012 - 2013",
            director: "Naoyoshi Shiotani",
            votes: 680000
        }
    },
    {
        id: 14,
        name: "The Rising of the Shield Hero",
        emoji: "🛡️",
        genres: ["Action", "Fantasy", "Adventure"],
        episodes: 39,
        seasons: 2,
        rating: 7.9,
        status: "Ongoing",
        description: "An ordinary boy is summoned to a fantasy world as one of four heroes. Betrayed and alone, he rises to become the hero nobody expected.",
        suggestions: [7, 4, 11],
        details: {
            studio: "Kinema Citrus",
            aired: "2019 - Present",
            director: "Takao Yoshimatsu",
            votes: 620000
        }
    },
    {
        id: 15,
        name: "Jujutsu Kaisen",
        emoji: "🔥",
        genres: ["Action", "Supernatural", "Comedy"],
        episodes: 47,
        seasons: 2,
        rating: 8.8,
        status: "Ongoing",
        description: "A high school student swallows a cursed finger and becomes the host of a powerful curse. He must train to become a jujutsu sorcerer to protect humanity.",
        suggestions: [3, 8, 1],
        details: {
            studio: "MAPPA",
            aired: "2020 - Present",
            director: "Park Sung Ho",
            votes: 1050000
        }
    },
    {
        id: 16,
        name: "Made in Abyss",
        emoji: "⛰️",
        genres: ["Adventure", "Fantasy", "Drama"],
        episodes: 25,
        seasons: 2,
        rating: 8.7,
        status: "Ongoing",
        description: "Two orphans descend into a massive pit to find the girl's mother and discover the truth. A beautiful yet dark adventure with profound mysteries.",
        suggestions: [10, 16, 5],
        details: {
            studio: "Kinema Citrus",
            aired: "2017 - Present",
            director: "Masayuki Sakoi",
            votes: 540000
        }
    }
];
