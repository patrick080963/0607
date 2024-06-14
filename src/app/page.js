/**
 * @author 張柏揚<patrick080963@gmail.com>
 */
'use client';
import Link from "next/link";
import { useState,useEffect } from "react";
import image from "next/image"
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
  Card,
  Button,
  DarkThemeToggle
} from "flowbite-react";
import CustomCard from './components/Card';

export default function Home() {
 
  const[items,setItems]=useState([]);

  useEffect(() => {
    async function FetchData(){
      const response = await fetch('api/items');
      const data=await response.json();
      console.log(data);
      setItems(data.apiData);
    }
    FetchData();
  },[]);
 

  return (
    <>
    <div className="bg-cyan-800">
      <div className="container mx-auto">
      <Navbar fluid className="bg-cyan-800">
        <NavbarBrand as={Link} href="/">
          <image src="https://www.yuntech.edu.tw/images/website_png/Group_640.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white">YunTech Travale</span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="#" className="text-white">
            <span className="px-4 py-2 hover:text-yellow-500 hover:border-yellow-500 hover:border-b-2">交通</span>
          </NavbarLink>
          <NavbarLink as={Link} href="#" className="text-white">
            景點
          </NavbarLink>
          <NavbarLink href="#" className="text-white">關於我們</NavbarLink>
        </NavbarCollapse>
        <DarkThemeToggle />
      </Navbar>
      </div>
    </div>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <image src="/banner/banner-1.jpg" alt="由 WU PEI HSUAN - 自己的作品, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=110297869" />
          <image src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <image src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <image src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <image src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto grid grid-cols-4 gap-4">
          { items.map( (item,index) =>
          <Card item
            className="max-w-sm"
            imgAlt={item.Picture.PictureDescription1}
            imgSrc={item.Picture.PictureUrl1}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.ScenicSpotName}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {item.DescriptionDetail}
            </p>
            <Button>
              Read more
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          )}
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          { items.map( item =>
            <CustomCard item={item}/>
          )}
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
