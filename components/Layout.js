import Head from "next/head";
import {Container, Nav, Navbar} from "react-bootstrap";
import NavbarMenu from "./NavbarMenu";

const Layout = ({children}) => (
    <Container>
        <Head>
            <title> My next app</title>
        </Head>

        <header>
           <NavbarMenu/>
        </header>

        <main>{children}</main>
    </Container>

)

export default Layout

