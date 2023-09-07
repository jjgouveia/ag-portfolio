"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Início",
    "Produtos",
    "Serviços",
    "Sobre",
    "Contato",
    "Ajuda & Feedback",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden pr-3 w-full justify-center"
        justify="center"
      >
        <NavbarBrand>
          <p className="font-bold text-black w-full text-center">
            Anderson Gouveia
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 border border-red-600"
        justify="center"
      >
        <NavbarBrand>
          <p className="font-bold text-black">Anderson Gouveia</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Início
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/#tab-produtos">Produtos</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#tab-sobre">
            Sobre
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 0
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "warning"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
