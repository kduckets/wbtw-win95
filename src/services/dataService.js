export default class DataService {
  _data = {
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'videos',
        name: 'videos',
        icon: 'media_video',
      },
      {
        id: 'shows',
        name: 'shows.txt',
        icon: 'flying_through_space_100',
      },
      {
        id: 'merch',
        name: 'merch.txt',
        icon: 'progman_30',
      },
      {
        id: 'about',
        name: 'wbtw.txt',
        icon: 'info_bubble',
      },
      {
        id: 'credits',
        name: 'credits.txt',
        icon: 'shell32_21',
      },      
      {
        id: 'recycle bin',
        name: 'recycle bin.txt',
        icon: 'explorer_108',
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
