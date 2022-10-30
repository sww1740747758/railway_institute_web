import { defineStore } from 'pinia';
const homePageStore = defineStore({
  id: 'homePageStore',
  state: () => {
    return {
      titleObj: {},
      childrenObj: {},
      titleList: [
        {
          id: '1',
          href: '#',
          title: '学会介绍',
          children: [
            {
              id: '1-1',
              href: '#',
              title: '学会简介'
            },
            {
              id: '1-2',
              href: '#',
              title: '学会章程'
            },
            {
              id: '1-3',
              href: '#',
              title: '组织机构'
            },
            {
              id: '1-4',
              href: '#',
              title: '历届理事会'
            },
            {
              id: '1-5',
              href: '#',
              title: '秘书处'
            }
          ]
        },
        {
          id: '2',
          href: '#',
          title: '学会动态',
          children: [
            {
              id: '2-1',
              href: '#',
              title: '通知公告'
            },
            {
              id: '2-2',
              href: '#',
              title: '工作动态'
            },
            {
              id: '2-3',
              href: '#',
              title: '行业要闻'
            }
          ]
        },
        {
          id: '3',
          href: '#',
          title: '学术交流',
          children: [
            {
              id: '3-1',
              href: '#',
              title: '学术活动'
            },
            {
              id: '3-2',
              href: '#',
              title: '论文交流'
            },
            {
              id: '3-3',
              href: '#',
              title: '刊物'
            }
          ]
        },
        {
          id: '4',
          href: '#',
          title: '科学普及',
          children: [
            {
              id: '4-1',
              href: '#',
              title: '科普活动'
            },
            {
              id: '4-2',
              href: '#',
              title: '科普基地'
            }
          ]
        },
        {
          id: '5',
          href: '#',
          title: '专业委员会',
          children: [
            {
              id: '5-1',
              href: '#',
              title: '专业设置'
            }
          ]
        },
        {
          id: '6',
          href: '#',
          title: '科技服务',
          children: [
            {
              id: '6-1',
              href: '#',
              title: '科技成果评价'
            },
            {
              id: '6-2',
              href: '#',
              title: '科技奖励'
            }
          ]
        },
        {
          id: '7',
          href: '#',
          title: '会员服务',
          children: [
            {
              id: '7-1',
              href: '#',
              title: '会员单位'
            },
            {
              id: '7-2',
              href: '#',
              title: '会员风采'
            }
          ]
        }
      ]
    };
  },
  getters: {},
  actions: {
    getTitleObj(parent, children) {
      for (let i = 0; i < this.titleList.length; i++) {
        if (this.titleList[i].id == parent) {
          this.titleObj = this.titleList[i];
          for (let y = 0; y < this.titleObj.children.length; y++) {
            if (this.titleObj.children[y].id == children) {
              this.childrenObj = this.titleObj.children[y];
            }
          }
        }
      }
    }
  }, // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'homePageTitle',
        storage: localStorage
      }
    ]
  }
});
export default homePageStore;
