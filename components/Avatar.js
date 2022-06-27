import Image from "next/image";
import cookies from "../public/cookies.jpg";

function Avatar({ className }) {

  return (
    <img
    loading="lazy"
      src={cookies.src}
      alt="profile pic"
      className={`h-10 w-10 rounded-full object-cover cursor-pointer transition duration-100 transform hover:scale-125 ${className}`}
    />
  );
}
export default Avatar;

//  <Image
//       src={cookies}
//       alt="user-profile"
//       height="40"
//       width="40"
//       objectFit="cover"
//       className={`ml-auto  rounded-full cursor-pointer transition duration-100 transform hover:scale-125 ${className}`}
//     />
//   );
