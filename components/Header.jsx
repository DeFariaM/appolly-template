import { IoMdMail } from "react-icons/io";
import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="absolute top-0 z-50 mx-auto w-full">
      <div className="container mx-auto hidden justify-between p-4 text-white lg:flex">
        <div className="flex space-x-16">
          <div className="flex items-center space-x-2">
            <IoMdMail className="h-5 w-5" />
            <span>info@youremail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone className="h-4 w-4" />
            <span>(480) 555-0103</span>
          </div>
        </div>
        <div className="flex space-x-16">
          <FaFacebookF className="h-6 w-6" />
          <FaInstagram className="h-6 w-6" />
          <FaXTwitter className="h-6 w-6" />
          <FaYoutube className="h-6 w-6" />
        </div>
      </div>

      <div></div>
    </div>
  );
};
