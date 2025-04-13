// Home.tsx (Server Component)
import { signIn, signOut } from '@/actions'; // Adjust the import path as necessary
import { auth } from '@/auth'; // Function to retrieve the session
import Profile from '@/components/profile';

export default async function Home() {
    // Retrieve the session on the server
    const session = await auth();

    return (
        <div>
            {session ? (
                <form action={signOut}>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200"
                        aria-label="Sign Out"
                    >
                        Sign Out
                    </button>
                </form>
            ) : (
                <form action={signIn}>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200"
                        aria-label="Sign In with GitHub"
                    >
                        Sign In with GitHub
                    </button>
                </form>
            )}
            <Profile />
        </div>
    );
}
