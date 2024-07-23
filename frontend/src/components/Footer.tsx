import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-purple-500 py-10">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-8">
          <div>
            <img src={logo} className="mr-5 h-10 sm:h-12" alt="logo" />
            <p className="font-sans font-normal mt-4 text-sm text-gray-200">
              The mission of Booking is to empower people to experience the world. Whatever people want to do, wherever they want to go, they can book it with us.
            </p>
            <div className="flex mt-8 space-x-6 text-gray-200">
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-6 h-6" />
              </a>
              <a className="hover:opacity-75" href="#" target="_blank" rel="noreferrer">
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-200">COMPANY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-200">
                <a className="hover:opacity-75" href="#">About Us</a>
                <a className="hover:opacity-75" href="#">Meet the Team</a>
                <a className="hover:opacity-75" href="#">History</a>
                <a className="hover:opacity-75" href="#">Careers</a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-gray-200">CONSUMER DISCLOSURE</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-200">
                <a className="hover:opacity-75" href="#">Privacy Policy</a>
                <a className="hover:opacity-75" href="#">Terms & Conditions</a>
                <a className="hover:opacity-75" href="#">Contact Us</a>
                <a className="hover:opacity-75" href="#">Careers</a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-gray-200">COMMUNITY</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-200">
                <a className="hover:opacity-75" href="#">Blog</a>
                <a className="hover:opacity-75" href="#">Community</a>
                <a className="hover:opacity-75" href="#">Ideas</a>
                <a className="hover:opacity-75" href="#">Developers</a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-gray-200">USEFUL LINKS</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-200">
                <a className="hover:opacity-75" href="#">Cookie Policy</a>
                <a className="hover:opacity-75" href="#">Cookie Settings</a>
                <a className="hover:opacity-75" href="#">Media</a>
                <a className="hover:opacity-75" href="#">Influencer</a>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-200">
          © 2022 Booking Easy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
