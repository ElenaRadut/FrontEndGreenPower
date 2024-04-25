import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { FaBolt } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar className="bg-green-100 h-20">
      <NavbarBrand>
        <FaBolt className="w-16 h-16 text-green-600" />
        <p className="font-bold text-green-600 text-5xl" style={{ textAlign: "center" }}>GREENPOWER</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="green" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>
  );
};

export default NavBar;