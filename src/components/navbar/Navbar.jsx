import { Navbar,NavLink,Nav } from 'react-bootstrap';
import "./Navbar.css"
const NavBar = () => {

    let tabs = [
        { name: "ABOUT US", link: "about" },
        { name: "FOR YOU", link: "foryou" },
        { name: "SERVICES", link: "services" },
        { name: "BLOG", link: "blog" },
        { name: "VLOG", link: "vlog" },
        { name: "CONTACT", link: "contact" }
    ];  
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="me-auto">
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