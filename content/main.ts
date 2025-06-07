export const attributes = {
  hero: {
    firstButton: {
      icon: 'briefcase-outline',
      link: '/#portfolio',
      text: 'Portfolio',
    },
    heading: "I'm Özgür Deli, and I create",
    image: '/img/hero.jpeg',
    secondButton: { icon: 'whatsapp', link: '/#about', text: 'About me' },
    social: {
      facebook: { link: 'https://facebook.com', show: false },
      instagram: { link: 'https://www.instagram.com/wedev_it/', show: true },
      linkedin: {
        link: 'https://www.linkedin.com/in/%C3%B6zg%C3%BCr-deli/',
        show: true,
      },
    },
    typed: [
      { text: 'fast websites.' },
      { text: 'awesome applications.' },
      { text: 'beautiful logos.' },
      { text: 'great experiences.' },
    ],
  },
  about: {
    heading: 'Who am I?',
    image: '/img/about.jpeg',
    text: 'I am a passionate Software Developer and experienced Software Tester, specialized in both manual and automated testing, including test management.With a strong focus on quality and precision, I work across industries such as: Lottery systems, SaaS platforms, Online gambling & gaming Insurance & financial services Banking solutions. I combine deep technical knowledge with a strategic mindset to ensure software is not only functional — but reliable, secure, and ready for real-world use.\n',
  },
  features: [
    {
      icon: 'xml',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'Web Development',
    },
    {
      icon: 'xml',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'Software Testing',
    },
    {
      icon: 'monitor-screenshot',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'UI/UX',
    },
    {
      icon: 'draw',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dapibus mi.\n',
      title: 'Logo Design',
    },
  ],
  portfolio: {
    projects: [
      {
        btnLink: 'https://wedev-it.at',
        btnText: 'Coming Soon',
        image: '/img/project-1.jpeg',
        title: 'Coming Soon',
      },
    ],
    title: 'My work',
  },
  footer: { text: '© John Doe' },
};
