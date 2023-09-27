"use client";

import {
  Link as Linkin,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
          <Linkin as={Link} color="foreground" href="/">
            Início
          </Linkin>
        </NavbarItem>
        <NavbarItem isActive>
          <Linkin as={Link} href="/#tab-produtos">
            Produtos
          </Linkin>
        </NavbarItem>
        <NavbarItem>
          <Linkin as={Link} color="foreground" href="/#tab-sobre">
            Sobre
          </Linkin>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <NavbarItem>
          <Linkin as={Link} color="foreground" href="/#hero-cover">
            Início
          </Linkin>
        </NavbarItem>
        <NavbarMenuItem>
          <Linkin as={Link} href="/#tab-produtos">
            Produtos
          </Linkin>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Linkin as={Link} href="/#tab-servicos">
            Serviços
          </Linkin>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Linkin as={Link} color="foreground" href="/#tab-sobre">
            Sobre
          </Linkin>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Linkin as={Link} color="foreground" href="/#tab-contato">
            Contato
          </Linkin>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
