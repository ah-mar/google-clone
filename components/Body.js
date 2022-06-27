import Image from "next/image";
import logo from "../public/logo_color.png";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

function Body() {
  const inputRef = useRef(null)
  const router = useRouter()


  function search(e) {
    e.preventDefault();
    console.log(e.target.textContent)
    const searchTerm = inputRef.current.value;
    console.log(searchTerm)
    if(!searchTerm) return
    router.push(`/search?term=${searchTerm}`)

  }

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
      <Image src={logo} alt="" height={100} width={300} />
      <div className="flex  w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input ref={inputRef} type="text" className="flex-grow focus:outline-none " />
        <MicrophoneIcon className="h-5 ml-3 text-gray-400" />
      </div>
      <div className="flex flex-col w-1/2 gap-2 justify-center mt-8 sm:flex-row sm:gap-4 ">
        <button onClick={search} className="btn">
          Google Search
        </button>
        <button onClick={search} className="btn">
          I am Feeling Lucky
        </button>
      </div>
    </form>
  );
}
export default Body;
