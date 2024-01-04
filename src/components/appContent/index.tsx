'use client'
import { useState } from "react"
import Footer from "../footer"
import Header from "../header"
import SidebarMenu from "../sidebarMenu"
import { RootLayoutProps } from "@/types"

const AppContent = ({ children }: RootLayoutProps) => {
    const [open, setOpen] = useState(false)
    const toggleSidebar = () => {
        setOpen(!open)
    }
    return <>
        <Header toggleSidebar={toggleSidebar} />
        <main>
            {children}
        </main>
        <Footer />
        {open && <SidebarMenu toggleSidebar={toggleSidebar} />}
    </>
}

export default AppContent