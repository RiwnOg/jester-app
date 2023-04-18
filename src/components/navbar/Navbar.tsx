import { FC } from "react";
import ThemeSwitch from "./ThemeSwitch";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <>
      <div className="border-b-2 border-b-purple-700 p-2">
        <div className=" flex items-center justify-between">
          <h1 className="text-red-700 underline">Jester</h1>
          <ThemeSwitch />
          <div>
            <p>login-placeholder</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
