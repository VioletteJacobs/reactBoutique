import React from 'react'

// icons
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as MdIcons from "react-icons/md"

export const SideBarData = [
    {
        title: "Home",
        path:"/",
        icon: <AiIcons.AiFillHome />,
        className : "nav-text"
    },
    {
        title: "Présentation",
        path:"/presentation",
        icon: <AiIcons.AiFillHome />,
        className : "nav-text"

    },
    {
        title: "Portfolio",
        path:"/portfolio",
        icon:    <MdIcons.MdPhotoCamera />,
        className : "nav-text"

    },
    {
        title: "Contact",
        path:"/contact",
        icon:    <IoIcons.IoMdMailOpen />,
        className : "nav-text"

    },
]

