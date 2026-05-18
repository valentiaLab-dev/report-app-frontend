import { useStore } from '@nanostores/react';
import { persistentAuthState } from '../mainStore';

export default function FooterComponent ({ path }) {
  const $persistentAuthState = useStore(persistentAuthState); 
  console.log("FooterComponent rendered with path:", path);
  console.log("User logged in:", ($persistentAuthState.isLoggedIn ? "Yes" : "No"));
  const hideLoginLink = path === "/login" || ($persistentAuthState.isLoggedIn && path === "/dashboard");
  
  return (
  <> 
    <div className="footer-container p-4 text-center">
      { hideLoginLink ? null : <a href="/login" className="text-2xl text-sm text-gray-100 hover:text-gray-700">Login</a>}
      <p className="text-sm text-gray-500">© 2026 Valentia Lab. All rights reserved.</p>
    </div>
  </>  
  )
}