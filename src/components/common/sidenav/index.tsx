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
import Image from "next/image";


const SideNav = () => {
    const routes = [
        { id: "home", value: "Home", iconSrc: RiHome6Line },
        { id: "about", value: "About", iconSrc: FaRegCircleUser },
        { id: "projects", value: "Projects", iconSrc: VscGithubProject },
        { id: "contact", value: "Contact", iconSrc: BsChatSquareText },
    ];
    return (
        <div className=" fixed top-0 right-0 h-screen w-30 py-6 px-0 lg:px-4 z-40 lg:flex flex-col gap-4">
            <div className="cursor-pointer rounded-md flex items-center justify-center p-1 lg:hidden">
                <label htmlFor="my-drawer-4" className="p-2 rounded-md hover:text-blue-400 cursor-pointer border border-gray-500">
                    <GiHamburgerMenu className="text-[1.4rem]" />
                </label>
            </div>

            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay text-white text-3xl p-3">&times;</label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10">
                                <Image
                                    width={100}
                                    height={100}
                                    src={'/profile.jpg'}
                                    alt="profile"
                                    className="w-full h-full object-center rounded-full"
                                />{" "}
                            </div>{" "}
                            <span className="text-sm sm:text-xl font-bold text-blue-500">Santosh Singh</span>
                        </div>
                        {routes.map((route) => {
                            const Icon = route.iconSrc;

                            return (
                                <li key={route.id} className="p-3 rounded-md hover:text-blue-400 cursor-pointer ">
                                    <a href={`#${route.id}`}>
                                        <Icon className="text-2xl" /> {route.value}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <ul className="hidden lg:flex flex-1  flex-col justify-center items-center space-y-4 bg-slate-700 rounded-md">
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