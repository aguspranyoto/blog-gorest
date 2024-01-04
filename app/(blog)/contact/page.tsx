import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center">Contact Page</h1>
      <div className="flex flex-col items-center justify-center w-full   ">
        <div className="w-full max-w-2xl p-8 mx-auto ">
          <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="text-center">
              <PhoneIcon className="w-10 h-10 mx-auto text-gray-700 " />
              <h3 className="mt-2 text-lg font-semibold text-gray-700 ">
                Phone
              </h3>
              <p className="mt-2 text-sm text-gray-600 ">(021) 111-222-3333</p>
            </div>
            <div className="text-center">
              <MailIcon className="w-10 h-10 mx-auto text-gray-700 " />
              <h3 className="mt-2 text-lg font-semibold text-gray-700 ">
                Email
              </h3>
              <p className="mt-2 text-sm text-gray-600 ">info@bloggorest.com</p>
            </div>
            <div className="text-center">
              <LocateIcon className="w-10 h-10 mx-auto text-gray-700 " />
              <h3 className="mt-2 text-lg font-semibold text-gray-700 ">
                Address
              </h3>
              <p className="mt-2 text-sm text-gray-600 ">
                Jl asrama haji, Jakarta timur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
