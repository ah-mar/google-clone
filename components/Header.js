import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="flex justify-between w-full p-5 text-sm text-gray-500">
      {/* left */}
      <div className="flex gap-4 items-center">
        <a className="link" href="#">About</a>
        <a className="link" href="#">Store</a>
      </div>
      {/* Right */}
      <div className="flex gap-4 items-center">
        <a className="link" href="#">Gmail</a>
        <a className="link" href="#">Images</a>
        {/* Icon */}
<ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100  cursor-pointer" />
        {/* Avatar */}
        <Avatar />
      </div>
    </header>
  );
}
export default Header;
