import {storage} from '@services';
import {AuthCredentials, StorageKeys} from '@types';

const AUTH_KEY = StorageKeys.Auth;

async function save(authCredentials: AuthCredentials): Promise<void> {
  await storage.setItem(AUTH_KEY, authCredentials);
}

async function load(): Promise<AuthCredentials | null> {
  const authCredentials = await storage.getItem<AuthCredentials>(AUTH_KEY);

  return authCredentials;
}

async function remove(): Promise<void> {
  await storage.removeItem(AUTH_KEY);
}

export const authCredentialsStorage = {
  save,
  load,
  remove,
};
