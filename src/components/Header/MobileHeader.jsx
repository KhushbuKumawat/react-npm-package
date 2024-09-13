"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import * as React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Icons from "../icons";

import {
  Box,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  SwipeableDrawer,
} from "@mui/material";
import Link from "next/link";

export function SwipeableTemporaryDrawer({ setHideLogo, hideLogo }) {
  // const [isConsultingServicesOpen, setIsConsultingServicesOpen] =
  //   React.useState(true);
  const [isServicesDropDownOpen, setIsServicesDropDownOpen] =
    React.useState(false);
  // const router = useRouter();
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open, path) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    if (path) {
      router.push(path);
    }
    setState({ ...state, [anchor]: open });
    setHideLogo(!hideLogo);
  };
  const list = (anchor) => (
    // {isOpen?
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "150px" }}
      role="presentation"
    >
      <div className="flex justify-between p-4 header">
        <Link href="/">
          <Image
            // eslint-disable-next-line no-undef
            src={`${process.env.imageBasePath}/images/logo.webp`}
            alt="coindelta-logo"
            width={160}
            height={60}
          />
        </Link>
        <p
          onClick={toggleDrawer(anchor, false)}
          className="text-[22px] font-bold cursor-pointer"
        >
          <>&#9747;</>
        </p>
      </div>

      <List >
        <ListItem
        className="flex items-center justify-center px-[11%]"
          onClick={toggleDrawer(anchor, false, "/")}
          onKeyDown={toggleDrawer(anchor, false)}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <Icons name="home"/>
            </ListItemIcon>
           <span className='ml-2'>
            <ListItemText primary="Home" />
            </span> 
          </ListItemButton>
        </ListItem>

        <div className="group relative bg-[#fff] flex items-center justify-start z-[999] ml-[40px]">
          <span className='min-w-[25px] max-w-[25px] h-full'>
              <Icons name="services"/>
          </span>
          <button
            type="button"
            onClick={() => setIsServicesDropDownOpen(!isServicesDropDownOpen)}
            className="css-10hburv-MuiTypography-root outline-none bg-[#fff] focus:outline-none py-[6px] flex items-center justify-center px-1"
          >
            Services
            {isServicesDropDownOpen ? (
              <span className="ml-[-4px]">
                <svg
                  className="fill-current transform -rotate-180 transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  id="arrow-drop-down"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="m7 10 5 5 5-5H7z"></path>
                </svg>
              </span>
            ) : (
              <span className="ml-[-4px]">
                <svg
                  className="fill-current transform transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  id="arrow-drop-down"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="m7 10 5 5 5-5H7z"></path>
                </svg>
              </span>
            )}
          </button>
          {!isServicesDropDownOpen ? (
            <></>
          ) : (
            <ul className="bg-[#fff] left-[20px] top-[35px] transform scale-100 absolute transition duration-150 ease-in-out origin-top min-w-[180px] pb-2" style={{borderRadius:'0px 0px 30px 30px',boxShadow:'0px 6px 30px 0px rgba(47, 50, 65, 0.20)'}}>
              <li className="rounded-md px-3 py-1 hover:bg-gray-100">
                <button
                  type="button"
                  className="w-full text-left flex items-center outline-none focus:outline-none"
                   onClick={toggleDrawer(
                    anchor,
                    false,
                    "/services/consulting-services"
                  )}
                  onKeyDown={toggleDrawer(anchor, false)}
                >
                  <span className="w-full text-left flex items-center outline-none focus:outline-none">
                    <span className="pr-1 flex-1 hover:text-[#28118A] text-[#2F3241] nav_bar_font text-[14px]">
                      Consulting Services
                    </span>
                    <span className="mr-auto">
                      <svg
                        className="fill-current h-4 w-4 transition duration-150 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </span>
                </button>
                <ul
                  
                  onClick={toggleDrawer(
                    anchor,
                    false,
                    "/services/consulting-services/blockchain-consulting"
                  )}
                  onKeyDown={toggleDrawer(anchor, false)}
                  className="bg-white cursor-pointer rounded-md absolute lg:top-0 top-[33px] lg:right-[2px] right-[221px] z-[999] transition duration-150 ease-in-out origin-top-left min-w-full"
                >
                  <li className="px-3 py-1 hover:bg-gray-100">
                    Blockchain Consulting
                  </li>
                </ul>
              </li>
              <li
                onClick={toggleDrawer(
                  anchor,
                  false,
                  "/services/custom-software-development"
                )}
                onKeyDown={toggleDrawer(anchor, false)}
                className="cursor-pointer rounded-md px-3 py-1 hover:bg-gray-100 text-[14px] hover:text-[#28118A] text-[#2F3241] nav_bar_font"
              >
                Custom Software Development
              </li>
              <li
                onClick={toggleDrawer(
                  anchor,
                  false,
                  "/services/ui-ux-development"
                )}
                onKeyDown={toggleDrawer(anchor, false)}
                className="rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer text-[14px]"
              >
                UI/UX Development
              </li>
              <li
               onClick={toggleDrawer(
                anchor,
                false,
                "/services/nft-development"
              )}
              onKeyDown={toggleDrawer(anchor, false)}
                className="rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer text-[14px]"
              >
                Nft Development
              </li>
            </ul>
          )}
        </div>
        
          {/* Company */}
        <ListItem className="flex items-center justify-start py-2 ml-[16px]">
          <span className='px-2'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path d="M1 16.9794H2V4.20887C2.00003 3.89076 2.09914 3.58072 2.28328 3.32268C2.46743 3.06465 2.72727 2.8717 3.026 2.77118L11.026 0.0776547C11.2515 0.00178664 11.4915 -0.0188759 11.7264 0.0173688C11.9614 0.0536135 12.1844 0.145728 12.3772 0.286125C12.5699 0.426522 12.7269 0.611183 12.8352 0.824895C12.9435 1.03861 13 1.27526 13 1.51534V16.9794H14V7.87634C14 7.80163 14.0165 7.72786 14.0482 7.66035C14.0798 7.59283 14.1259 7.53326 14.1831 7.48591C14.2403 7.43856 14.3072 7.40461 14.3789 7.38652C14.4507 7.36843 14.5255 7.36664 14.598 7.38128L16.794 7.82582C17.1339 7.89447 17.4398 8.07993 17.6597 8.35069C17.8795 8.62145 17.9998 8.96078 18 9.311V16.9794H19C19.2652 16.9794 19.5196 17.0858 19.7071 17.2753C19.8946 17.4647 20 17.7217 20 17.9897C20 18.2576 19.8946 18.5146 19.7071 18.7041C19.5196 18.8936 19.2652 19 19 19H1C0.734784 19 0.48043 18.8936 0.292893 18.7041C0.105357 18.5146 0 18.2576 0 17.9897C0 17.7217 0.105357 17.4647 0.292893 17.2753C0.48043 17.0858 0.734784 16.9794 1 16.9794Z" fill="#2F3241"/>
          </svg>
          </span>
            <NavDropdown title="Company" id="basic-nav-dropdown"className="text-center css-10hburv-MuiTypography-root">
                <NavDropdown.Item onKeyDown={toggleDrawer(anchor, false)}  onClick={toggleDrawer(
                anchor,
                false,
                "/about-us"
              )}>
                  <span className="flex justify-start items-center span_font">
                  <Link
                    href="/about-us"
                  >
                    About Us
                  </Link>
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={toggleDrawer(
                anchor,
                false,
                "/join-us"
              )}
              onKeyDown={toggleDrawer(anchor, false)}>
                  <span className="flex justify-start items-center span_font">
                  <Link
                href="/join-us">
                Join Our Team
              </Link>
                  </span>
                </NavDropdown.Item>

                <NavDropdown.Item onClick={toggleDrawer(
                anchor,
                false,
                "/blog"
              )}
              onKeyDown={toggleDrawer(anchor, false)}>
                  <span className="flex justify-start items-center span_font">
                  <Link
                  href="/blog"
                  >
                    Blogs
                  </Link>
                  </span>
                </NavDropdown.Item>

                <NavDropdown.Item onClick={toggleDrawer(
                anchor,
                false,
                "/affiliate-marketing"
              )}
              onKeyDown={toggleDrawer(anchor, false)}>
                <span className="flex justify-start items-center span_font">
                    <Link href="/affiliate-marketing">Become an affiliate</Link>
                  </span>
                </NavDropdown.Item>
              </NavDropdown>

         </ListItem>
         
        <ListItem
        className="px-[11%] flex items-center justify-start"
          onClick={toggleDrawer(anchor, false, "https://docs.coindelta.io/")}
          onKeyDown={toggleDrawer(anchor, false)}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
              <path d="M9.84359 5.64872H9.2188V0H1.40684C0.629082 0 0 0.614667 0 1.37376L0 16.6262C0 17.3853 0.629082 18 1.40598 18H13.594C14.3709 18 15 17.3853 15 16.6262V5.64872H9.84359ZM9.37522 14.4279H3.28034V13.2825H9.3735V14.4279H9.37522ZM11.7188 11.6795H3.2812V10.5341H11.7188V11.6795ZM11.7188 8.93114H3.2812V7.78662H11.7188V8.93114ZM9.84359 5.03825H15L9.84359 0V5.03825Z" fill="#2F3241"/>
            </svg></ListItemIcon>
            <span className='ml-2'>
              <ListItemText primary="Docs" /></span>
          </ListItemButton>
        </ListItem>
        
      </List>
    </Box>
  );
  return (
    <div className="sm:pl-[3rem] container-padding-x h-[60px] flex justify-center items-center">
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="flex">
            <span
              onClick={toggleDrawer(anchor, true)}
              className="cursor-pointer text-[25px] flex"
            >
              &#9776;
            </span>
            {!hideLogo && (
              <Link href="/">
                <Image
                  // eslint-disable-next-line no-undef
                  src={`${process.env.imageBasePath}/images/logo.webp`}
                  alt="logo"
                  width="160"
                  height="60"
                  className="mt-1 ml-2"
                />
              </Link>
            )}
          </div>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            variant="persistent"
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
