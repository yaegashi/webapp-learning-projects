import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import { useLocation } from '@remix-run/react';

export const AppHeader = () => {
  const items = [
    { label: 'Me', path: '/me' },
    { label: 'People', path: '/people' },
    { label: 'Debug', path: '/debug' },
  ];

  const location = useLocation();
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <p className="font-bold text-inherit">Remix Sample</p>
      </NavbarBrand>
      <NavbarContent justify="start">
        {
          items.map((item) =>
            <NavbarItem key={item.path} isActive={location.pathname === item.path}>
              <Link color="foreground" href={item.path} >{item.label}</Link>
            </NavbarItem>
          )
        }
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="default" href="/.auth/login/aad" variant="flat">Log in</Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="default" href="/.auth/logout" variant="flat">Log out</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
