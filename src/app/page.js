/**
 * @author 張柏揚<patrick080963@gmail.com>
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  Carousel,
  Button,
  DarkThemeToggle,
} from "flowbite-react";
import Card from '../components/Card';
import AutoSizeImage from "../components/AutoSizeImage";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/items");
      const data = await response.json();
      console.log(data);
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="bg-cyan-800">
        <div className="container mx-auto">
          <Navbar fluid className="bg-cyan-800">
            <NavbarBrand as={Link} href="/">
              <AutoSizeImage
                src="https://www.yuntech.edu.tw/images/website_png/Group_640.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                YunTech Travel
              </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink href="#" className="text-white">
                <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">
                  交通
                </span>
              </NavbarLink>
              <NavbarLink as={Link} href="#" className="text-white">
                景點
              </NavbarLink>
              <NavbarLink href="#" className="text-white">
                關於我們
              </NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
          </Navbar>
        </div>
      </div>

      <div className="object-fit:fill h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <AutoSizeImage
            src="/banner/banner-1.jpg"
            alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869"
          />
          <AutoSizeImage
            src="/banner/banner-2.jpg"
            alt="..."
          />
          <AutoSizeImage
            src="/banner/banner-3.jpg"
            alt="..."
          />
          <AutoSizeImage
            src="/banner/banner-4.jpg"
            alt="Fcuk1203, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons"
          />
          <AutoSizeImage
            src="/banner/banner-5.jpg"
            alt="..."
          />
        </Carousel>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>

      <Footer container>
        <FooterCopyright href="#" by="Flowbite™" year={2022} />
        <FooterLinkGroup>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Licensing</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinkGroup>
      </Footer>
    </>
  );
}