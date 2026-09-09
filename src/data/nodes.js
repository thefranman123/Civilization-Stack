export const NODES = [

  // =========================
  // BIG 7 CORE
  // =========================

  {
    id:"core-nvda",
    ticker:"NVDA",
    name:"NVIDIA",
    portfolio:"core",
    layer:"Compute",
    mission:"AI Compute Backbone",
    dependency:99,
    pullback:15,
    ceiling:null,
    thesis:"The GPU backbone powering modern AI."
  },

  {
    id:"core-msft",
    ticker:"MSFT",
    name:"Microsoft",
    portfolio:"core",
    layer:"Software",
    mission:"Enterprise AI",
    dependency:98,
    buyRule:"Market Pullbacks",
    ceiling:null,
    thesis:"Azure, OpenAI and enterprise software."
  },

  {
    id:"core-googl",
    ticker:"GOOGL",
    name:"Alphabet",
    portfolio:"core",
    layer:"AI Software",
    mission:"Information Infrastructure",
    dependency:96,
    buyRule:"Market Pullbacks",
    ceiling:null,
    thesis:"Search, cloud and AI models."
  },

  {
    id:"core-amzn",
    ticker:"AMZN",
    name:"Amazon",
    portfolio:"core",
    layer:"Logistics",
    mission:"Global Commerce",
    dependency:95,
    buyRule:"Market Pullbacks",
    ceiling:null,
    thesis:"AWS plus global logistics."
  },

  {
    id:"core-meta",
    ticker:"META",
    name:"Meta",
    portfolio:"core",
    layer:"AI Applications",
    mission:"Consumer AI",
    dependency:92,
    buyRule:"Corrections",
    ceiling:null,
    thesis:"Open-source models and social distribution."
  },

  {
    id:"core-aapl",
    ticker:"AAPL",
    name:"Apple",
    portfolio:"core",
    layer:"Consumer Hardware",
    mission:"Global Device Network",
    dependency:91,
    buyRule:"Major Pullbacks",
    ceiling:null,
    thesis:"Hardware ecosystem and services."
  },

  {
    id:"core-tsla",
    ticker:"TSLA",
    name:"Tesla",
    portfolio:"core",
    layer:"Automation",
    mission:"Robotics & Energy",
    dependency:90,
    buyRule:"Deep Pullbacks",
    ceiling:null,
    thesis:"Autonomy, robotics and batteries."
  },

  // =========================
  // CIVILIZATION STACK
  // =========================

  {
    id:"civil-orcl",
    ticker:"ORCL",
    name:"Oracle",
    portfolio:"civilization",
    layer:"Cloud",
    mission:"Enterprise Data Centers",
    dependency:96,
    buyMin:145,
    buyMax:153,
    ceiling:310,
    thesis:"Enterprise cloud infrastructure."
  },

  {
    id:"civil-peng",
    ticker:"PENG",
    name:"Penguin Solutions",
    portfolio:"civilization",
    layer:"AI Infrastructure",
    mission:"Server Cluster Engineering",
    dependency:94,
    buyMin:42,
    buyMax:46,
    ceiling:75,
    thesis:"Builds AI server infrastructure."
  },

  {
    id:"civil-nbis",
    ticker:"NBIS",
    name:"Nebius",
    portfolio:"civilization",
    layer:"GPU Cloud",
    mission:"Alternative Compute",
    dependency:91,
    buyMax:18,
    ceiling:45,
    thesis:"Challenger GPU cloud."
  },

  {
    id:"civil-lite",
    ticker:"LITE",
    name:"Lumentum",
    portfolio:"civilization",
    layer:"Photonics",
    mission:"Fiber Optics",
    dependency:92,
    buyMin:720,
    buyMax:780,
    ceiling:1150,
    thesis:"Laser networking."
  },

  {
    id:"civil-aaoi",
    ticker:"AAOI",
    name:"Applied Optoelectronics",
    portfolio:"civilization",
    layer:"Optical Networking",
    mission:"Data Transfer",
    dependency:89,
    buyMin:85,
    buyMax:95,
    ceiling:145,
    thesis:"Optical transceivers."
  },

  {
    id:"civil-ceg",
    ticker:"CEG",
    name:"Constellation Energy",
    portfolio:"civilization",
    layer:"Power",
    mission:"Nuclear Grid",
    dependency:96,
    buyMin:175,
    buyMax:185,
    ceiling:300,
    thesis:"America's largest nuclear fleet."
  },

  {
    id:"civil-ccj",
    ticker:"CCJ",
    name:"Cameco",
    portfolio:"civilization",
    layer:"Uranium",
    mission:"Fuel Civilization",
    dependency:97,
    buyMin:40,
    buyMax:44,
    ceiling:78,
    thesis:"Uranium mining and fuel supply."
  },

  {
    id:"civil-hp",
    ticker:"HP",
    name:"Helmerich & Payne",
    portfolio:"civilization",
    layer:"Fusion",
    mission:"Drilling Infrastructure",
    dependency:84,
    buyMin:32,
    buyMax:35,
    ceiling:58,
    thesis:"Private fusion proxy."
  },

  {
    id:"civil-xyl",
    ticker:"XYL",
    name:"Xylem",
    portfolio:"civilization",
    layer:"Cooling",
    mission:"Water Systems",
    dependency:89,
    buyMin:120,
    buyMax:128,
    ceiling:180,
    thesis:"Industrial cooling."
  },

  {
    id:"civil-tmo",
    ticker:"TMO",
    name:"Thermo Fisher",
    portfolio:"civilization",
    layer:"Biotech",
    mission:"Life Sciences",
    dependency:91,
    buyMin:510,
    buyMax:530,
    ceiling:680,
    thesis:"Biotech tools."
  },

  {
    id:"civil-lmt",
    ticker:"LMT",
    name:"Lockheed Martin",
    portfolio:"civilization",
    layer:"Space",
    mission:"Planetary Logistics",
    dependency:90,
    buyMin:520,
    buyMax:540,
    ceiling:690,
    thesis:"Space and defense."
  },

  {
    id:"civil-intc",
    ticker:"INTC",
    name:"Intel",
    portfolio:"civilization",
    layer:"Foundries",
    mission:"Domestic Chips",
    dependency:88,
    buyMax:20,
    ceiling:45,
    thesis:"American chip manufacturing."
  },

  {
    id:"civil-edf",
    ticker:"EDF",
    name:"Electricite de France",
    portfolio:"civilization",
    layer:"European Grid",
    mission:"Nuclear Utility",
    dependency:89,
    buyRule:"EU Weakness",
    ceiling:null,
    thesis:"French nuclear utility."
  },

  {
    id:"civil-tepco",
    ticker:"TEPCO",
    name:"Tokyo Electric Power",
    portfolio:"civilization",
    layer:"Asia Grid",
    mission:"Regional Power",
    dependency:88,
    buyRule:"Yen Pullbacks",
    ceiling:null,
    thesis:"Japan's power infrastructure."
  }
];