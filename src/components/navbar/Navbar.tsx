"use client";

import { FC } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { signIn, signOut, useSession } from "next-auth/react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <div className="border-b-2 border-b-purple-700 p-2">
        <div className=" flex items-center justify-between">
          <h1 className="text-red-700 underline">Jester</h1>
          <ThemeSwitch />
          <div>
            <AuthShowcase />
          </div>
        </div>
      </div>
    </>
  );
};

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="rounded-full  bg-slate-200 px-10 py-3  font-semibold no-underline transition hover:bg-slate-600/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};

export default Navbar;
