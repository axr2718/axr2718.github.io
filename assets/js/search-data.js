// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-graduated-from-ut-dallas-with-a-b-s-in-computer-science",
          title: 'Graduated from UT Dallas with a B.S. in Computer Science.',
          description: "",
          section: "News",},{id: "news-our-paper-breast-cancer-detection-with-topological-deep-learning-was-accepted-to-the-iccv-2025-workshops",
          title: 'Our paper Breast Cancer Detection with Topological Deep Learning was accepted to the...',
          description: "",
          section: "News",},{id: "news-avrobustbench-was-accepted-to-the-neurips-2025-datasets-and-benchmarks-track",
          title: 'AVROBUSTBENCH was accepted to the NeurIPS 2025 Datasets and Benchmarks Track.',
          description: "",
          section: "News",},{id: "news-joined-yilun-du-s-embodied-minds-lab-at-harvard-university-as-a-visiting-researcher",
          title: 'Joined Yilun Du’s Embodied Minds Lab at Harvard University as a visiting researcher....',
          description: "",
          section: "News",},{id: "news-received-a-2-000-lambda-research-grant-in-gpu-credits-for-energy-based-modeling-research",
          title: 'Received a $2,000 Lambda Research Grant in GPU credits for energy-based modeling research....',
          description: "",
          section: "News",},{id: "news-received-a-5-000-google-research-grant-in-gpu-credits-for-my-ms-thesis-research-on-energy-based-models-for-reasoning-and-planning",
          title: 'Received a $5,000 Google Research Grant in GPU credits for my MS thesis...',
          description: "",
          section: "News",},{id: "news-our-paper-generative-associative-memory-via-equilibrium-matching-was-accepted-to-the-iclr-2026-workshop-on-new-frontiers-in-associative-memory",
          title: 'Our paper Generative Associative Memory via Equilibrium Matching was accepted to the ICLR...',
          description: "",
          section: "News",},{id: "news-our-paper-unifying-reasoning-and-planning-through-energy-minimization-was-accepted-to-neurips-2026",
          title: 'Our paper Unifying Reasoning and Planning through Energy Minimization was accepted to NeurIPS...',
          description: "",
          section: "News",},{id: "news-received-a-2-000-lambda-research-grant-in-gpu-credits-for-energy-minimization-search",
          title: 'Received a $2,000 Lambda Research Grant in GPU credits for Energy Minimization Search....',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%78%72%31%39%30%30%34%32@%75%74%64%61%6C%6C%61%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/axr2718", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/arod2718", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3378LcAAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://deil-lab-utd.github.io/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
