export default class DataService {
  _data = {
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'wbtw.txt',
        icon: 'info_bubble',
      },
      {
        id: 'merch',
        name: 'merch',
        icon: 'progman_30',
      },
      {
        id: 'shows',
        name: 'shows',
        icon: 'flying_through_space_100',
      },
      {
        id: 'credits',
        name: 'credits',
        icon: 'shell32_21',
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
