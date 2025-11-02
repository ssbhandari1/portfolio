'use client'
import { getExperience } from '@/utils/helper';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";

const ProfileCard = () => {
  const experience = getExperience('2023-10-01');

  const handleOpenPDF = () => {
    const filePath = "/santoshSingh.pdf";
    window.open(filePath, "_blank");
  };
  const generateWhatsAppLink = () => {
    const phoneNumber = "9650157684";
    const message = "Hi";
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  };
  return (
    <div  className={`
      bg-slate-900 p-4
      lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/3
    `}>
     <div className="w-full h-full rounded-lg flex flex-col bg-slate-900">
      <div className="w-full flex-1 flex justify-center items-center p-3">
        <div className="m-2  bg-slate-300 rounded-md">
          <Image
              width={250}
              height={250}
            src={'/profile.jpg'}
            alt="profile"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
      <div className="w-full flex-1 p-6">
        <div className="text w-full h-full  flex flex-col justify-around">
          <h3 className="text-xl font-bold text-blue-500">
            Santosh Bhandari 👋
          </h3>
          <p>
            A Passionate <span className="font-bold">MERN Stack Developer</span>{" "}
            🖥️ &amp; having
            <span className="font-bold"> {experience} years</span> of Experience.
          </p>
          <div className=" mt-4 flex space-x-2">
            <Link
              className="bg-secondary text-white px-4 py-2 rounded-lg flex items-center space-x-2 whitespace-nowrap"
              href={"#contact"}
            >
              <FiPhoneCall />
              <span>Let&apos;s connect</span>
            </Link>
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 cursor-pointer whitespace-nowrap"
              data-clipboard-text="example@example.com"
              onClick={handleOpenPDF}
            >
              <MdContentCopy />
              <span>My Resume</span>
            </button>
          </div>
          <div className="mt-4">
            <ul className="flex space-x-4">
              <li className="border border-solid border-gray-400 p-2 rounded cursor-pointer">
                <Link
                  href="https://www.linkedin.com/in/santosh-singh-bhandari"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl" />
                </Link>
              </li>
              <li className="border border-solid border-gray-400 p-2 rounded cursor-pointer">
              <Link
                  href={"https://github.com/ssbhandari1"}
                  target="_blank"
                >
                  <FaGithub className="text-2xl" />
                </Link>
              </li>
              <li className="border border-solid border-gray-400 p-2 rounded cursor-pointer">
                <Link href={generateWhatsAppLink()} target="_blank">
                  <FaWhatsappSquare className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileCard