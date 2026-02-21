"use client";

import React from "react";
import { useDisclosure } from "@heroui/react";
import { ContactModal } from "@/components/contact/ContactModal";
import Image from "next/image";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@heroui/react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const menuItems = [
    { name: "Inicio", href: "/" },
    { name: "Sala de Prensa", href: "/noticias" },
    { name: "Agenda", href: "/agenda" },
    { name: "Recursos", href: "/recursos" },
    { name: "Sedes", href: "/sedes" },
  ];

  return (
    <HeroNavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      maxWidth="xl"
      className="fixed top-0 z-50 bg-background/60 backdrop-blur-md border-b-1 border-white/10"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="text-foreground flex gap-2 items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/image/logo.png"
                alt="Logo MFCJ Monterrey"
                width={200}
                height={200}
                priority
                className="w-12 h-12 md:w-10 md:h-20 object-contain"
              />
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              className="font-medium hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            onClick={onOpen}
            className="font-bold text-white"
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* 4. MENÚ DESPLEGABLE MÓVIL */}
      <NavbarMenu className="bg-background/90 pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-2xl font-bold py-2"
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <ContactModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </HeroNavbar>
  );
};
