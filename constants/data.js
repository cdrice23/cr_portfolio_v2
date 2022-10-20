import { keyframes } from "@emotion/react";

const portfolioData = {
  githubUsername: "ricechrisdtreat",
  name: "Chris Rice",
  email: "cd.rice23@gmail.com",
  projects: [
    {
      title: "Scotch Tour",
      link: "https://ricechrisdtreat.github.io/scotchTour/",
      description:
        "My earliest project in learning basic HTML and CSS, ripped straight out of a 1998 NetScape website.",
      imgUrl:
        "https://media-cdn.tripadvisor.com/media/photo-s/11/a6/1b/7a/scottish-whisky-tours.jpg",
    },
    {
      title: "Chris Rice - Developer Portfolio (v1)",
      link: "https://ricechrisdtreat.github.io/crPortfolio/",
      description: "v1 of portfolio page using basic HTML and CSS",
      imgUrl: "/profile_square_v1.jpg",
    },
    {
      title: "Scotch Tour - v2 [COMING SOON]",
      link: "https://docs.google.com/document/d/12smHmW4YedWwyTznduN6UfEXMhAk_jMSDjleLgof4Ao/edit?usp=sharing",
      description:
        "A progression of my first project built using next.js and Chakra UI. Much more whiz-bang!",
      imgUrl:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/c3/a1/4f/the-whisky-library.jpg?w=1200&h=1200&s=1",
    },
    {
      title: "Chris Rice - Developer Portfolio (v2)",
      link: "https://github.com/ricechrisdtreat/cr_portfolio_v2",
      description:
        "v2 of portfolio page, recreating v1 using next.js and Chakra UI",
      imgUrl: "/profile_square_v2.jpg",
    },
    {
      title: "Chris Rice - Developer Portfolio (v3)",
      link: "https://docs.google.com/document/d/1yG7egNK6NN_YNriMk50mIIrWug9FFnnplvL8uQ26-_4/edit?usp=sharing",
      description:
        "v3 of portfolio page. A complete overhaul with additional whiz-bang functionality and design.",
      imgUrl: "/profile_square_v3.jpg",
    },
  ],
  keyframes: {
    switch1: keyframes`0% {
      background-color: transparent;
      visibility: visible;
    }
    6.96% {
      visibility: hidden;
    }`,
    switch2: keyframes`0% {
      background-color: transparent;
      visibility: visible;
    }
    11.02% {
      visibility: hidden;
    }`,
    switch3: keyframes`0% {
      background-color: transparent;
      visibility: visible;
    }
    16.99% {
      visibility: hidden;
    }`,
    switch4: keyframes`0% {
      background-color: transparent;
      visibility: visible;
    }
    31.32% {
      visibility: hidden;
    }`,
    switch5: keyframes`0% {
      background-color: transparent;
      visibility: visible;
    }
    16.30% {
      visibility: hidden;
    }`,
    switch6: keyframes`0% {
      background-color: transparent;
      visibility: visible;
    }
    17.40% {
      visibility: hidden;
    }`,
    typing: keyframes`from {
      width: 0
    }`,
    endblink: keyframes`0% {
      border-right: 3px solid orange;
    }
    50% {
      border-color: transparent;
    }`,
    duringblink: keyframes`0% {
      border-right: 3px solid orange;
    }
    100% {
      border-right: 3px solid orange;
    }`,
    visible: keyframes`0% {
      color: black;
      opacity: 1;
    }`,
  },
  heroDuration: "49.26s",
  lineBuffer: "2.5s",
  herogroups: [
    {
      id: 1,
      switchDelay: "0s",
      switchAnim: "switch1",
      lines: [
        {
          hgroup: 1,
          id: "h1l1",
          text: "Hi, I'm Chris.",
          lineDuration: "0.93s",
          lineDelay: "0s",
          textChars: 14,
          blinkAnim: "endblink",
          visibleAnim: "",
        },
      ],
    },
    {
      id: 2,
      switchDelay: "3.43s",
      switchAnim: "switch2",
      lines: [
        {
          hgroup: 2,
          id: "h2l1",
          text: "I’ve spent my entire career working in tech.",
          lineDuration: "2.93s",
          lineDelay: "3.43s",
          textChars: 44,
          blinkAnim: "endblink",
          visibleAnim: "",
        },
      ],
    },
    {
      id: 3,
      switchDelay: "8.86s",
      switchAnim: "switch3",
      lines: [
        {
          hgroup: 3,
          id: "h3l1",
          text: "I’ve worked as a consultant and had various management roles within a large",
          lineDuration: "5s",
          lineDelay: "8.86s",
          textChars: 75,
          blinkAnim: "duringblink",
          visibleAnim: "",
        },
        {
          hgroup: 3,
          id: "h3l2",
          text: "tech startup.",
          lineDuration: "0.87s",
          lineDelay: "13.86s",
          textChars: 13,
          blinkAnim: "endblink",
          visibleAnim: "visible",
          visDuration: "0.87s",
        },
      ],
    },
    {
      id: 4,
      switchDelay: "17.23s",
      switchAnim: "switch4",
      lines: [
        {
          hgroup: 4,
          id: "h4l1",
          text: "Whenever I had the opportunity to build something technical from scratch",
          lineDuration: "4.8s",
          lineDelay: "17.23s",
          textChars: 72,
          blinkAnim: "duringblink",
          visibleAnim: "",
        },
        {
          hgroup: 4,
          id: "h4l2",
          text: "(be it a simple Excel macro to more complicated Retool applications), it",
          lineDuration: "4.8s",
          lineDelay: "22.03s",
          textChars: 72,
          blinkAnim: "duringblink",
          visibleAnim: "visible",
          visDuration: "8.13s",
        },
        {
          hgroup: 4,
          id: "h4l3",
          text: "gave me a renewed sense of passion and excitement.",
          lineDuration: "3.33s",
          lineDelay: "26.83s",
          textChars: 50,
          blinkAnim: "endblink",
          visibleAnim: "visible",
          visDuration: "3.33s",
        },
      ],
    },
    {
      id: 5,
      switchDelay: "32.66s",
      switchAnim: "switch5",
      lines: [
        {
          hgroup: 5,
          id: "h5l1",
          text: "8 years later, I decided to pivot careers and dive into the deep-end of",
          lineDuration: "4.73s",
          lineDelay: "32.66s",
          textChars: 71,
          blinkAnim: "duringblink",
          visibleAnim: "",
        },
        {
          hgroup: 5,
          id: "h5l2",
          text: "programming.",
          lineDuration: "0.8s",
          lineDelay: "37.39s",
          textChars: 12,
          blinkAnim: "endblink",
          visibleAnim: "visible",
          visDuration: "0.8s",
        },
      ],
    },
    {
      id: 6,
      switchDelay: "40.69s",
      switchAnim: "switch6",
      lines: [
        {
          hgroup: 6,
          id: "h6l1",
          text: "Take a look at some of my most recent projects, and don't hesitate to reach",
          lineDuration: "5s",
          lineDelay: "40.69s",
          textChars: 75,
          blinkAnim: "duringblink",
          visibleAnim: "",
        },
        {
          hgroup: 6,
          id: "h6l2",
          text: "out and connect!",
          lineDuration: "1.07s",
          lineDelay: "45.69s",
          textChars: 16,
          blinkAnim: "endblink",
          visibleAnim: "visible",
          visDuration: "1.07s",
        },
      ],
    },
  ],
  //   Future - add experience, resume, and social links
};

export default portfolioData;
