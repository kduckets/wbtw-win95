export default class DataService {
  _data = {
    projectRepo: 'https://github.com/InsafKhamzin/portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! I am a Software Developer based in Toronto. For the last several years I've been working as a Full Stack developer in big FinTech companies.",
            "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development and database design, I think I would be a valuable asset to your project.",
            'The main technology I have been using is C# .NET. But a few years ago I fell in love with Node.js and I use it for most of my side projects. Moreover, I am in a good relationship with React (this website runs on React btw) and fascinated by Big Data and Blockchain.',
            'When I am not in front of the computer, I usually do yoga, drink a specialty coffee and go on hikes (lake Yoho in Alberta is my favorite trail so far).',
          ],
        },
      }
    ],
    }

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
