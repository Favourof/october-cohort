import { ThemeContext } from "@/context/ThemeContext/ThemeContext"
import { CiLight, CiDark } from "react-icons/ci";
import { useContext } from "react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <ul style={{ width: "60%", backgroundColor: "black", display: "flex", justifyContent: 'space-between', borderRadius: "16px", color: "white", padding: "10px", margin: "auto", listStyleType: "none", cursor: "pointer" }}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
                <li><Link to={"/register"}>Register</Link></li>
                <li><Link to={"/login"}>login</Link></li>

                
                <li><Link to={"/dashboard"}>Dashboard</Link></li>
                <li>{theme === "light"? <CiLight />: <CiDark />}</li>
            </ul>
        </div>
    )
}
