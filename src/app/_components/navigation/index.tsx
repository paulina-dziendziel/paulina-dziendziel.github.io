"use client";
import { useState } from "react";
import TopBar from "./TopBar";
import Sidebar from "./SideBar";

const Navigation = () => {
    // toggle sidebar
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        console.log("BEFORE TOGGLE", isOpen);
        setIsOpen(!isOpen);
        console.log("TOGGLED", isOpen);
    };
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <TopBar toggle={toggle} isSidebarOpen={isOpen} />
        </>
    );
};

export default Navigation;