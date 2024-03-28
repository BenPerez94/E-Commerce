"use client";
import {
  Armchair,
  Bean,
  Bone,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";

export const SideMenu = () => {
  const [isOpen, setIsopen] = useState(true);

  const toggleSideMenu = () => {
    setIsopen(!isOpen);
    if (isOpen) {
      const sideMenu = document.querySelector("#sideMenu");
      sideMenu?.classList.add("translate-x-[-240px]");
      const mainSection = document.querySelector("main");
      if (mainSection) {
        mainSection.style.paddingLeft = "15px";
      }
      const way = document.querySelector("#way") as HTMLElement;
      if (way) {
        way.style.paddingLeft = "30px";
      }
    }
    if (!isOpen) {
      const sideMenu = document.querySelector("#sideMenu");
      sideMenu?.classList.remove("translate-x-[-240px]");
      const mainSection = document.querySelector("main");
      if (mainSection) {
        mainSection.style.paddingLeft = "260px";
      }
      const way = document.querySelector("#way") as HTMLElement;
      if (way) {
        way.style.paddingLeft = "3px";
      }
    }
  };

  console.log(isOpen);

  return (
    <>
      {!isOpen && (
        <PanelLeftOpen
          className="absolute mt-20 left-3 z-10 cursor-pointer"
          onClick={toggleSideMenu}
          id="openButtonSideMenu"
        />
      )}
      <div
        className="transition pt-20 w-60 h-full absolute bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] border-r border-[hsl(var(--border))]"
        id="sideMenu"
      >
        <div className="flex justify-between px-2 pb-3">
          <h2>Catégories</h2>
          <PanelLeftClose
            className="0 z-10 left-[200px] cursor-pointer"
            onClick={toggleSideMenu}
          />
        </div>

        <div>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="px-2 text-[hls(var(--primary-foreground))]"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex">
                  <Armchair className="mr-2" /> Famille
                </div>
              </AccordionTrigger>
              <AccordionContent>Catégorie</AccordionContent>
              <AccordionContent>Catégorie</AccordionContent>
              <AccordionContent>Catégorie</AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="px-2 text-[hls(var(--primary-foreground))]"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex">
                  <Bean className="mr-2" /> Bricole
                </div>
              </AccordionTrigger>
              <AccordionContent>Catégorie</AccordionContent>
              <AccordionContent>Catégorie</AccordionContent>
              <AccordionContent>Catégorie</AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="px-2 text-[hls(var(--primary-foreground))]"
            >
              <AccordionTrigger className="hover:no-underline">
                <div className="flex">
                  <Bone className="mr-2" /> Divertissement
                </div>
              </AccordionTrigger>
              <AccordionContent>Catégorie</AccordionContent>
              <AccordionContent>Catégorie</AccordionContent>
              <AccordionContent>Catégorie</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="absolute flex justify-center bottom-3 w-full items-center">
          <div className="">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </>
  );
};
