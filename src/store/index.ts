import useUserStore from './modules/user';
import useAppStore from './modules/app';
import usePermissionStore from './modules/permission';
import useSettingStore from './modules/settings';
import useTagsViewStore from './modules/tagsView';
import homePageStore from './modules/homePageStore.d';
const useStore = () => ({
  app: useAppStore(),
  user: useUserStore(),
  permission: usePermissionStore(),
  setting: useSettingStore(),
  tagsView: useTagsViewStore(),
  homePageStore: homePageStore()
});

export default useStore;
