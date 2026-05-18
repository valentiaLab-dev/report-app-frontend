import { atom } from 'nanostores';
import { persistentMap } from '@nanostores/persistent'


export const current_lat = atom(false);
export const current_lng = atom(false);

export const authState = atom({
    isLoggedIn: false,
    token: null,
});

export const persistentAuthState = persistentMap('authState', {
    isLoggedIn: false,
    token: null,
    username: null,
});
