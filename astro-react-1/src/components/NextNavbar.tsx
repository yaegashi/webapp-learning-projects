import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

export default () =>
    <Navbar isBordered maxWidth="xl">
        <NavbarBrand>
            <Link href="/" className="font-bold text-inherit">WebApp</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4">
            <NavbarItem>
                <Link color="foreground" href="/old">Old Counter</Link>
                </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="/next">NextUI Counter</Link>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
