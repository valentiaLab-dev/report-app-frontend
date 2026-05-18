import { useActionState, useEffect, startTransition} from 'react';
import { withState} from '@astrojs/react/actions';
import { actions } from 'astro:actions';
import { persistentAuthState } from '../mainStore';
import { navigate } from "astro:transitions/client";
import { useStore } from '@nanostores/react';

export default function AstroLoginFormJS() {
  const [result, action, isPending] = useActionState(
    withState(actions.login),
    {   success: null, token: null, error: null }
  );

  const $persistentAuthState = useStore(persistentAuthState);
  

  useEffect(() => {
    console.log('Login result:', $persistentAuthState );
    persistentAuthState.setKey('isLoggedIn', result?.data?.success || false);
    persistentAuthState.setKey('token', result?.data?.token || null);
    persistentAuthState.setKey('username', result?.data?.username || null);

    if(result?.data?.success) {
      navigate('/dashboard');
    }

  }, [result]);
  return (
    <>
        <form method="POST" action={action}>
          <label>
            Email:
            <input type="text" name="username" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
        
          
          <button type="submit">Log In</button>
        </form>
    </>
  )
}


