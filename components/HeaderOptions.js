import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";


function HeaderOptions() {
  return (
    <div className="flex w-full text-sm text-gray-700 justify-evenly lg:text-base lg:justify-start lg:gap-36 lg:pl-52 border-b-[1px]">
      {/* left */}
      <div className="flex gap-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* right */}
      <div className="flex gap-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}
export default HeaderOptions;
