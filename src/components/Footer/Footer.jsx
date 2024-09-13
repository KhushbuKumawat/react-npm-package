"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Icons from "../icons";
import Link from "next/link";
import JoinOurTeam from "@/component/cards/JoinOurTeamNew";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const ref = useRef(null);
  const [isMouseIn, setIsMouseIn] = useState("");
  var path =
    pathname !== "/join-us"
      ? pathname !== "/privacy-policy"
        ? pathname !== "/terms"
          ? pathname !== "/staking"
            ? pathname !== "/affiliate-marketing"
              ? pathname !== "/join-now"
                ? true
                : false
              : false
            : false
          : false
        : false
      : false;
  return (
    <div className="">
      {path ? (
        <div
          className="container-padding-x "
          ref={ref}
        >
          
          <JoinOurTeam />
        </div>
      ) : (
        <div></div>
      )}
      <footer
        className="border-b-2 container-padding-x pb-[30px] pt-[60px] mt-[0px] z-[2] relative"
        style={{ borderColor: "rgba(47, 50, 65, 0.15)" }}
      >
        <div className="flex lg:flex-row flex-col justify-between w-full">
          <span className="flex flex-col justify-start items-start lg:w-[30%]">
            <Image
              // eslint-disable-next-line no-undef
              src={`${process.env.imageBasePath}/images/logo.webp`}
              alt="logo"
              width={200}
              height={64}
            />
            <p className=" text-[18px] font-medium mt-[25px] text-[#2F3241]">
              The leading investors in crypto trust Coindelta to deliver the
              optimal staking rewards reliably and securely across the broadest
              range of assets.
            </p>
            <h3 className=" text-[24px] mt-[26px] text-[#2F3241]">
              Follow Us on Social
            </h3>
            <span className="flex justify-center items-center mt-[22px] gap-x-6">
              <a 
                onMouseEnter={() => setIsMouseIn("LinkedIn")}
                onMouseLeave={() => setIsMouseIn("")}
                href="https://www.linkedin.com/company/coindeltaio/"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
                aria-label="Linkedin"
              >
                <Icons name="linkedIn-icon"  fill={isMouseIn === "LinkedIn" ? "#0077B7" : "#2F3241"} stroke={isMouseIn === "LinkedIn" ? "#0077B7" : "#2F3241"}/>
              </a>
              <a
              onMouseEnter={() => setIsMouseIn("Twitter")}
              onMouseLeave={() => setIsMouseIn("")}
                href="https://twitter.com/CoinDeltaio"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Icons name="twitter-icon"  fill={isMouseIn  === "Twitter"? "#1D9BF0" : "#2F3241"} stroke={isMouseIn === "Twitter" ? "#1D9BF0" : "#2F3241"}/>
              </a>
              <a
              onMouseEnter={() => setIsMouseIn("facebook")}
              onMouseLeave={() => setIsMouseIn("")}
                href="https://www.facebook.com/people/Coindelta/61550862007144/?mibextid=ZbWKwL"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
                aria-label="facebook"
              >
                <Icons name="facebook-icon"  fill={isMouseIn  === "facebook"? "#0573E7" : "#2F3241"} stroke={isMouseIn === "facebook" ? "#0573E7" : "#2F3241"}/>
              </a>
              <a
              onMouseEnter={() => setIsMouseIn("youtube")}
              onMouseLeave={() => setIsMouseIn("")}
                href="https://www.youtube.com/@kcoindelta"
                target="_blank"
                className="cursor-pointer"
                rel="noreferrer"
                aria-label="Youtube"
              >
                <Icons name="youtube-icon"  fill={isMouseIn  === "youtube"? "#FF0000" : "#2F3241"} stroke={isMouseIn === "youtube" ? "#FF0000" : "#2F3241"}/>
              </a>
            </span>
          </span>
          <span className="flex flex-col text-white  lg:mt-0 mt-6">
            <h3 className="text-[24px] pb-[10px] text-[#2F3241]">
            Supported Networks
            </h3>
            <span className="flex py-2 nav_bar_font">
              <span className="mr-2">
                <Icons name="avax-icon" />
              </span>
              <Link
                href={"/networks/avalanche"}
                className="hover:text-[#28118A] text-[#2F3241]"
              >
                Stake Avalanche (AVAX)
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <span className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full mr-2">
                <Icons name="etherium-icon" />
              </span>
              <Link href={"/networks/etherium"} className="hover:text-[#28118A] text-[#2F3241]">
                Stake Ethereum 2.0 (ETH)
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <span className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full mr-2">
                <Icons name="polkadot-icon" />
              </span>
              <Link href={"/networks/polkadot"} className="hover:text-[#28118A] text-[#2F3241]">
                Stake Polkadot (DOT)
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <span className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full mr-2">
                <Icons name="chainlink-icon" />
              </span>
              <Link
                href={"/networks/chainlink"}
                className="hover:text-[#28118A] text-[#2F3241]"
              >
                Stake Chainlink (Link)
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <span className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full mr-2">
                <Icons name="stake-ssv-icon" />
              </span>
              <Link
                href={"/networks/stake-ssv"}
                className="hover:text-[#28118A] text-[#2F3241]"
              >
                Stake SSV (SSV)
              </Link>
            </span>
          </span>
          <span className="lg:pt-[35px] pt-[0px] ">
            <span className="flex py-2 nav_bar_font">
              <span className="mr-2">
                <Icons name="stake-graph" />
              </span>
              <Link href={"/networks/graph"} className="hover:text-[#28118A] text-[#2F3241]">
                Stake The Graph (GRT)
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <span className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full mr-2">
                <Icons name="etherium-icon" />
              </span>
              <Link href={"/networks/render"} className="hover:text-[#28118A] text-[#2F3241]">
                Stake Render (RNDR)
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <span className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full mr-2">
                <Icons name="polkadot-icon" />
              </span>
              <Link href={"/networks/arweave"} className="hover:text-[#28118A] text-[#2F3241]">
                Stake Arweave (AR)
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <span className="w-[25px] h-[25px] bg-white flex justify-center items-center rounded-full mr-2">
                <Icons name="chainlink-icon" />
              </span>
              <Link href={"/networks/cosmos"} className="hover:text-[#28118A] text-[#2F3241]">
                Stake Cosmos (ATOM)
              </Link>
            </span>
          </span>
          <span className="flex flex-col lg:mt-0 mt-6">
            <h3 className="text-[24px] pb-[10px] text-[#2F3241]">Company</h3>
            <span className="nav_bar_font pb-2">
              <Link href={"/"} className="hover:text-[#28118A] text-[#2F3241]">
                Home
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <Link href={"/"} className="hover:text-[#28118A] text-[#2F3241]">
                Services
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <Link href={"/about-us"} className="hover:text-[#28118A] text-[#2F3241]">
               Solutions
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <Link href={"/about-us"} className="hover:text-[#28118A] text-[#2F3241]">
               Company
              </Link>
            </span>
            <span className="flex py-2 nav_bar_font">
              <Link
                href={"https://docs.coindelta.io/"}
                className="hover:text-[#28118A] text-[#2F3241]"
              >
                Docs
              </Link>
            </span>
            
          </span>
        </div>
      </footer>
      <div
        className="w-full flex md:flex-row lg:flex-row xl:flex-row flex-col justify-between items-start container-padding-x py-2 bg-[#F4F6FA]"
      >
        <span className="text-[#2F3241] text-[16px] nav_bar_font">Copyright@2023 Coindelta</span>
        <div className="flex">
          <Link href={"/privacy-policy"}>
            <span className="text-[#2F3241] hover:text-[#28118A] text-[16px] nav_bar_font">Privacy Policy</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
