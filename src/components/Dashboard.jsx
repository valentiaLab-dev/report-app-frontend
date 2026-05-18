import { useStore } from '@nanostores/react';
import { persistentAuthState } from '../mainStore.js';


export default function Dashboard() {
    const $persistentAuthState = useStore(persistentAuthState); 
    console.log("Dashboard rendered with persistentAuthState:", $persistentAuthState.token);

    return (
        <div>
            <h1>Welcome to the Dashboard, {$persistentAuthState.username}!</h1>
            <p>This is a protected page that only authenticated users can access.</p>
        </div>
    );
}