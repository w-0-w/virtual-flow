import { defineAppConfig, defineDataLoader } from 'ice';
import { fetchUserInfo } from './services/user';
import { defineStoreConfig } from '@ice/plugin-store/types';

// App config, see https://v3.ice.work/docs/guide/basic/app
export default defineAppConfig(() => ({}));

export const storeConfig = defineStoreConfig(async (appData) => {
  const { userInfo = {} } = appData;
  return {
    initialStates: {
      user: {
        currentUser: userInfo,
      },
    },
  };
});

export const dataLoader = defineDataLoader(async () => {
  const userInfo = await getUserInfo();
  return {
    userInfo,
  };
});

async function getUserInfo() {
  try {
    const userInfo = await fetchUserInfo();
    return userInfo;
  } catch (error) {
    return {
      error,
    };
  }
}
