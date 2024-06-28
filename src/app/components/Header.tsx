import { getSignInUrl, getUser, signOut } from '@workos-inc/authkit-nextjs';
import Link from 'next/link';

export default async function Header() {
  const { user } = await getUser();  // Get the user from the session
  const signInUrl = await getSignInUrl();   // Get the URL to redirect the user to AuthKit to sign in

  return (
    <header>
      <div className=" container flex items-center justify-between mx-auto my-4">
        <Link href={'/'} className="font-bold text-xl ">Job Board</Link>
        <nav className="flex gap-2">
          {!user && (    // If the user is not signed in show the login link
            <Link className="bg-gray-200 font-semibold rounded-md py-2 px-4" href={signInUrl}>Login</Link>
          )}
          {user && (    // If the user is signed in show the logout link
            <form action={async () =>{
              "use server";
              await signOut();
            }}>
              <button type="submit" className="bg-gray-200 rounded-md py-2 px-4 font-semibold">
                Logout
              </button>
            </form>
          )}
          <Link className="bg-blue-600 rounded-md py-2 px-4 text-white font-semibold" href={'/new-job'}>Post a Job</Link>
        </nav>
      </div>
    </header>
  )
}