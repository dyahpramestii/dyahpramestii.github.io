const BASE = import.meta.env.BASE_URL

const simba = `${BASE}images/simba.png`
const marketplace = `${BASE}images/mobile-marketplace.png`
const movingApp = `${BASE}images/moving-app.png`
const pinasia = `${BASE}images/pinasia.png`
const hackathon = `${BASE}images/hackathon.png`
const sentiment = `${BASE}images/sentiment.png`
const news = `${BASE}images/news.png`
const trager = `${BASE}images/trager.png`
const rsib = `${BASE}images/rsib.png`
const sportgear = `${BASE}images/sportgear.png`

export const projects = [
  {
    id: 'simba',
    title: 'SIMBA',
    category: 'Information System',
    description:
      'Web-based information system for centralizing institutional data across BLKK, FKLPID, and LPKS. Involved in requirements analysis, system flow design, relational database design, and full-stack development.',
    tools: ['Laravel', 'React.js', 'MySQL', 'Figma'],
    image: simba,
    url: '/projects/simba',
  },

  {
    id: 'uiux',
    title: 'UI/UX Design',
    category: 'Selected UI/UX Work',
    description:
      'Selected interface and product design work across web and mobile projects.',
    tools: ['Figma', 'Wireframing', 'Prototyping'],

    items: [
      
      {
        id: 'pinasia',
        title: 'PINASIA — Mobility Support App',
        image: pinasia,
        url: '/projects/pinasia',
      },
      {
        id: 'sportgear',
        title: 'Sport Gear — Marketplace Website',
        image: sportgear,
        url: '/projects/sportgear',
      },
      {
        id: 'marketplace',
        title: 'Yuk Beli — Marketplace Mobile App',
        image:  marketplace,
        url: '/projects/marketplace',
      },
      {
        id: 'hackathon',
        title: 'Workfrom.id — Hackathon Redesign',
        image: hackathon,
        url: '/projects/hackathon',
      },
      {
        id: 'news',
        title: 'News Portal',
        image: news,
        url: '/projects/news',
      },
      {
        id: 'trager',
        title: 'Trager — Wildlife Monitoring App',
        image: trager,
        url: '/projects/trager',
      },
      {
        id: 'moving-app',
        title: 'Moving App — Moving & Cleaning Assistant',
        image: movingApp,
        url: '/projects/moving-app',
      },
    ],
  },

  {
    id: 'sentiment-analysis',
    title: 'Mobile Banking Sentiment Analysis',
    category: 'Data Science',
    description:
      'Sentiment analysis project using 400+ mobile banking reviews, covering data preprocessing, classification with Naive Bayes, SVM, and KNN, and interactive visualization through a Python and Flask dashboard.',
    tools: ['Python', 'Pandas', 'scikit-learn', 'Flask'],
    image: sentiment,
    url: '/projects/sentiment-analysis',
  },

  {
    id: 'system-analysis',
    title: 'System Analysis & Mobile Development',
    category: 'System Analysis',
    description:
      'Mobile queue management application for a hospital, covering user requirements analysis, SRS development, UI design in Figma, and Android development using Java and SQLite.',
    tools: ['SRS', 'UML', 'Figma', 'Java', 'Android Studio', 'SQLite'],
    image: rsib,
    url: '/projects/system-analysis',
  },
]