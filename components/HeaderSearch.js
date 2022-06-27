import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import logo from "../public/logo_color.png";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function HeaderSearch() {
    
    const router = useRouter()
    const searchInputRef = useRef(null)


  function search(e) {
    e.preventDefault();
    console.log(e.target.textContent);
    const searchTerm = searchInputRef.current.value;
    console.log(searchTerm);
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}`);
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={logo}
          alt="google logo"
          height={40}
          width={120}
          objectFit="cover"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl px-6 py-3 ml-10 mr-5">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto"/>
      </div>
      {/* HEADER OPTIONS */}
      <HeaderOptions />
    </header>
  );
}
export default HeaderSearch;


