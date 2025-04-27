"use client";
import React, { useState } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscGithubProject } from "react-icons/vsc";
import { BsChatSquareText } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";


const SideNav = () => {
    const routes = [
        { id: "home", value: "Home", iconSrc: RiHome6Line },
        { id: "about", value: "About", iconSrc: FaRegCircleUser },
        { id: "projects", value: "Projects", iconSrc: VscGithubProject },
        { id: "contact", value: "Contact", iconSrc: BsChatSquareText },
    ];
    return (
        <div className="hidden fixed top-0 right-0 h-screen w-30 py-6 px-4 z-40 lg:flex flex-col gap-4 bg-white">
            <div className="cursor-pointer bg-slate-700 rounded-md flex items-center justify-center p-3">
                <button className="p-2 rounded-md hover:text-blue-400 cursor-pointer border border-gray-500">
                    <GiHamburgerMenu className="text-[1.4rem]" />
                </button>
            </div>

            <ul className="flex-1 flex flex-col justify-center items-center space-y-4 bg-slate-700 rounded-md">
                {routes.map((route) => {
                    const Icon = route.iconSrc;

                    return (
                        <li key={route.id} className="p-3 rounded-md hover:text-blue-400 cursor-pointer border border-gray-500">
                            <a href={`#${route.id}`}>
                                <Icon className="text-2xl" />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}


export default SideNav