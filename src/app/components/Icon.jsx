import React from "react";
import Sijavascript from '../assets/icon/javascript.svg'
import SiReact from '../assets/icon/react.svg'
import SiNextdotjs from '../assets/icon/nextdotjs.svg'
import Siexpress from '../assets/icon/express.svg'
import SiPrisma from '../assets/icon/prisma.svg'
import SiMysql from '../assets/icon/mysql.svg'
import SiTailwindcss from '../assets/icon/tailwindcss.svg'

const techList = {
    "next.js": {
        name: "next.js",
        icon: <SiNextdotjs />
    },
    "prisma": {
        name: "prisma",
        icon: <SiPrisma />
    },
    "express.js": {
        name: "express.js",
        icon: <Siexpress />
    },
    "mySQL": {
        name: "mySQL",
        icon: <SiMysql />
    },
    "tailwind CSS": {
        name: "tailwind CSS",
        icon: <SiTailwindcss />
    },
    // "PHP": {
    //     name: "PHP",
    //     icon: <SiPhp />
    // },
    // "Bootstrap": {
    //     name: "Bootstrap",
    //     icon: <SiBootstrap />
    // },
    "react.js": {
        name: "react.js",
        icon: <SiReact />
    },
    "javascript": {
        name: "javascript",
        icon: <Sijavascript />
    },
    // "HTML": {
    //     name: "HTML",
    //     icon: <SiHtml5 />
    // },
    // "Vite": {
    //     name: "Vite",
    //     icon: <SiVite />
    // }
}

const TechIcons = ({ techs, className }) => {
    return (
        <ul className="flex flex-wrap gap-4">
            {techs?.map((tech, index) => (
                <li key={index}>
                    <span className="flexitems-center">
                        {techList[tech].name}
                        {/* <SiMysql/> */}
                        {/* <Image src={techList[tech].icon} width={30} height={30} className={className} /> */}
                        {/* {React.cloneElement(techList[tech].icon, { className })} */}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default TechIcons;