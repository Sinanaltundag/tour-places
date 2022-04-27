import { Navbar,NavLink,Nav } from 'react-bootstrap';
import "./Navbar.css"
const NavBar = () => {

    let tabs = [
        { name: "ABOUT US", link: "#" },
        { name: "FOR YOU", link: "#" },
        { name: "SERVICES", link: "#" },
        { name: "BLOG", link: "#" },
        { name: "VLOG", link: "#" },
        { name: "CONTACT", link: "#" }
    ];  
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="mx-auto fs-4">
                    {
                        Object.keys(tabs).map(id => {return( <NavLink key={id} href={"/" + tabs[id].link}>{tabs[id].name}</NavLink>
                        )})
                    }
                </Nav>
            </Navbar>
        </>
    );
}

export default NavBar;