import { Outlet } from "react-router-dom";
import { ReactSVG } from "react-svg";

import NavLink from "../NavLink";
export default function Root() {
    return (
        <div className="grid grid-cols-1 gap-64">
            <div>
                <nav className="absolute inset-x-0 top-0 flex flex-col md:flex-row bg-blue-600 text-white shadow-md leading-none">
                    <div className="flex items-center mx-5 py-5 md:py-0">
                        <ReactSVG src="/assets/bow.svg"/>
                        <h1 className="text-target-blue font-bold text-3xl ml-2 inline-block">Lukostřelba</h1>
                    </div>
                    <div className="md:flex md:flex-grow text-target-blue">
                        <ul className="text-lg md:flex md:ml-auto ">
                            <li><NavLink text="Úvod" link="About" /></li>
                            <li><NavLink text="Informace" link="Info" /></li>
                            <li><NavLink text="Jak začít" link="Start" /></li>
                            <li><NavLink text="Závody" link="" /></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}