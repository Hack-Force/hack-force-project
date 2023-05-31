import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "Product",
    },

    {
      id: 2,
      link: "Company",
    },

    {
      id: 3,
      link: "Connect",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-from bg-red-400 to-red-900 px-4 sticky">
      <div>
        <h1 className="text-4xl px-10 ml-8 text-white font-semibold">Blogr</h1>
      </div>
      <ul className="hidden md:flex px-8 text-sm">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
        <button className="px-4 text-sm">Login</button>
        <button className="px-4 rounded-lg font-semibold text-sm bg-white text-red-500">
          sign up
        </button>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-red-400 to-red-800">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Nav;
