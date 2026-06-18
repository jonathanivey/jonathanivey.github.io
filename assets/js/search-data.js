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
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-posts",
          title: "Posts",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/posts/index.html";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-student-perspectives-on-the-first-year-of-a-phd",
      
        title: "Student Perspectives on the First Year of a PhD",
      
      description: "Reflections on the first year of an NLP PhD from eight first-year students.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/2026/06/18/student-perspectives-first-year-phd.html";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-i-received-the-computing-research-association-s-outstanding-undergraduate-researcher-award",
          title: 'I received the Computing Research Association’s Outstanding Undergraduate Researcher Award!',
          description: "",
          section: "News",},{id: "news-i-received-the-arkansas-alumni-association-s-senior-honor-citation-recognizing-me-as-the-top-male-student-in-my-graduating-class-i-also-received-the-best-transfer-of-knowledge-award-from-the-university-of-arkansas-data-science-program",
          title: 'I received the Arkansas Alumni Association’s Senior Honor Citation, recognizing me as the...',
          description: "",
          section: "News",},{id: "news-i-graduated-summa-cum-laude-with-my-b-s-in-data-science-and-b-a-in-mathematics-from-the-university-of-arkansas",
          title: 'I graduated summa cum laude with my B.S. in Data Science and B.A....',
          description: "",
          section: "News",},{id: "news-our-paper-nutmeg-separating-signal-from-noise-in-annotator-disagreement-has-been-accepted-to-emnlp-2025",
          title: 'Our paper, NUTMEG: Separating Signal From Noise in Annotator Disagreement, has been accepted...',
          description: "",
          section: "News",},{id: "news-i-officially-began-my-phd-in-computer-science-at-johns-hopkins-university",
          title: 'I officially began my PhD in Computer Science at Johns Hopkins University!',
          description: "",
          section: "News",},{id: "news-our-paper-real-or-robotic-assessing-whether-llms-accurately-simulate-qualities-of-human-responses-in-dialogue-has-been-accepted-to-acl-2026-findings",
          title: 'Our paper, Real or Robotic? Assessing Whether LLMs Accurately Simulate Qualities of Human...',
          description: "",
          section: "News",},{id: "news-our-new-preprint-what-makes-a-good-response-an-empirical-analysis-of-quality-in-qualitative-interviews-is-out-now",
          title: 'Our new preprint, What Makes a Good Response? An Empirical Analysis of Quality...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "projects-automated-web-scraping-for-land-sales-data",
          title: 'Automated Web Scraping for Land Sales Data',
          description: "Industry Collaboration: AcreTrader",
          section: "Projects",handler: () => {
              window.location.href = "/projects/acretrader.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6F%6E%61%74%68%61%6E%38%69%76%65%79@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jonathanivey", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/j-ivey", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4DsHtB8AAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2268672867", "_blank");
        },
      },];
