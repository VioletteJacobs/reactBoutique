import React, { Fragment, useState } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
// icons
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {IconContext} from "react-icons" 

import "./header.css"
// import components
import Contact from "../Contact/Contacts"
import Portfolio from "../portfolio/Portfolio"
import Presentation from "../presentation/Presentation"
import { SideBarData} from "./SidebarData"

export default function Header() {
    // useState permettant qu'on ne voit pas la nav sans cliquer sur le bouton. 
    const [sidebar, setSidebar] = useState(false);
    // permet de changer de state.
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <Fragment>
            <IconContext.Provider value = {{ color : "#fff"}}>
            {/* router */}
            <Router>
                {/* nav */}
                <div className="Nav">
                    <Link to="#" className="menu">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link className="menu">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideBarData.map((item, index)=> {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}> 
                                        {item.icon}
                                        <span>
                                            {item.title}
                                        </span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {/* bannière */}
                <section className="banniere" >
                    <div>
                        <h1>Le style dont vous n'aurez pas honte</h1>
                        <span className="banniereSpan">Stylez-vous</span>
                    </div>

                </section>
                {/* switch routes */}
                <Switch>
                <Route path="/contact">
                        <Contact />
                </Route>
                <Route path="/presentation">
                        <Presentation />
                </Route>
                <Route path="/porfolio">
                        <Portfolio />
                </Route>
                </Switch>
            </Router>
            </IconContext.Provider>
        </Fragment>
    )
}
