import { NotebookText  } from "lucide-react";
import React from "react";



const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-10 border-gray-700 border-t-[0.1px] left-0 w-full bg-black">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4 w-2/3 ">
        {/* Brand Section */}

        <div className="mb-6 md:mb-0">

        <div className="flex items-center font-semibold gap-2">
            <img src="/icon.png" alt="Logo" className="w-9 h-9" />
            <span className="leading-10 text-xl">Alex</span>
          </div>
          
        </div>

        {/* Dev Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-4">Links</h3>
          <ul>
            <li>
              <a href="#" className="text-sm hover:underline">App</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">Report</a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul>
            <li>
              <a href="#" className="text-sm hover:underline">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">Refund & Cancellation</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;