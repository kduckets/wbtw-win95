export default class DataService {
  _data = {
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'about.txt',
        icon: 'info_bubble',
      },
      {
        id: 'shows',
        name: 'shows.exe',
        icon: 'd3_maze_100',
      },
      
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
