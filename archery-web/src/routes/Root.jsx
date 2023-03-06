import { Outlet } from "react-router-dom";

import NavLink from "../NavLink";
export default function Root() {
    return (
        <div className="flex flex-col">
            <nav class="absolute inset-x-0 top-0 flex flex-col md:flex-row bg-blue-600 text-white shadow-md leading-none">
                <div class="flex items-center mx-5 py-5 md:py-0">
                    <img src="../assets/bow.svg" alt="luk"/>
                    <h1 class="text-target-blue font-bold text-3xl ml-2 inline-block">Brand</h1>
                </div>
                <div class="md:flex md:flex-grow text-target-blue">
                    <ul class="text-lg md:flex md:ml-auto ">
                        <li><NavLink text="Úvod" link=""/></li>
                        <li><NavLink text="Informace" link=""/></li>
                        <li><NavLink text="Jak začít" link=""/></li>
                        <li><NavLink text="Závody" link=""/></li>
                    </ul>
                </div>
            </nav>
            <Outlet className="py-5" />
        </div>
    );
}