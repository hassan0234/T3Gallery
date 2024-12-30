import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <div className="flex justify-between items-center w-full p-4 border-b mb-4">
      <h1 className="text-xl font-semibold">T3-Gallery</h1>
      <div className="text-xl font-semibold">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
