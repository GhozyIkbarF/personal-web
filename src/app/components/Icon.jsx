import React from "react";
import { SiNextdotjs, SiPrisma, SiMysql, SiTailwindcss, SiPhp, SiBootstrap, SiReact, SiJavascript, SiHtml5, SiVite, SiExpress, SiLaravel } from "@icons-pack/react-simple-icons";

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
        icon: <SiExpress />
    },
    "mySQL": {
        name: "mySQL",
        icon: <SiMysql />
    },
    "tailwind CSS": {
        name: "tailwind CSS",
        icon: <SiTailwindcss />
    },
    "laravel": {
        name: "laravel",
        icon: <SiLaravel />
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
        icon: <SiJavascript />
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
                        {/* {techList[tech].name} */}
                        {/* <SiMysql/> */}
                        {/* <Image src={techList[tech].icon} width={30} height={30} className={className} /> */}
                        {React.cloneElement(techList[tech].icon, { className })}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default TechIcons;