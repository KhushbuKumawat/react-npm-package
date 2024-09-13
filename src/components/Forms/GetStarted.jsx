"use client";
import React from "react";
import Image from "next/image";
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

export function page() {
  return (
    <div className="section-padding-x py-11 mt-6">
      <section className="grid xl:grid-cols-2 grid-cols-1 rounded-xl mb-7 overflow-hidden">
        <div className="text-white banner1 p-20">
          <h2 className="leading-[50px] text-5xl pb-6 text-[#fff] font-bold">
            Looking for a staking service provider?
          </h2>
          <div className="w-[62px] border-b-4 border-[#0CF0B4] mb-6"></div>
          <p className="text-white">
            Get in touch to set up a product demo and talk through your
            requirements.
          </p>
          <span className="flex justify-end items-end pt-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="66"
              height="148"
              viewBox="0 0 66 148"
              fill="none"
            >
              <path
                d="M0.621094 1.82617C33.7134 12.8732 88.7184 46.6038 44 93.1504C21.2439 115.246 -1.5872 71.7928 35.2372 62.955C72.0617 54.1171 73.3844 110.09 44 139.55"
                stroke="#0CF0B4"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <path
                d="M39.6627 143.99L42.1 135.306L48.4013 141.759L39.6627 143.99Z"
                fill="#0CF0B4"
              />
            </svg>
          </span>
          <div className="mt-11">
            <Image
              // eslint-disable-next-line no-undef
              src={`${process.env.imageBasePath}/images/coindeltaLogo.png`}
              alt="Coindelta"
              width="330"
              height="52"
            />
          </div>
        </div>
        <div className="bg-gray-50 px-12 pt-20">
          <form className="w-full">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <TextField
                label="Email"
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
              />
              <TextField
                id="outlined-basic"
                label="Company name"
                variant="outlined"
                style={{ backgroundColor: "#fff" }}
              />
            </div>

            <FormControl className="w-full" style={{ backgroundColor: "#fff" }}>
              <InputLabel>Preferred Method of Communication</InputLabel>
              <Select
                label="Preferred Method of Communication"
                type="text"
                style={{ backgroundColor: "#fff" }}
              >
                <MenuItem value={"Phonenumber"}>Phone Number</MenuItem>
                <MenuItem value={"WhatsApp"}>WhatsApp</MenuItem>
                <MenuItem value={"Telegram"}>Telegram</MenuItem>
                <MenuItem value={"WeChat"}>WeChat</MenuItem>
                <MenuItem value={"EmailPrefer"}>Email</MenuItem>
              </Select>
            </FormControl>
            <div className="grid grid-cols-2 gap-4 my-6">
              <MuiPhoneNumber
                fullWidth
                variant="outlined"
                defaultCountry="us"
                label="Phone Number"
                style={{ backgroundColor: "#fff" }}
              />
              <FormControl
                className="w-full"
                style={{ backgroundColor: "#fff" }}
              >
                <InputLabel>Which best describes you?</InputLabel>
                <Select
                  className="overflow-hidden bg-white-100"
                  label=" Which best describes you?"
                  type="text"
                >
                  <MenuItem value={"Phonenumber"}>Phone Number</MenuItem>
                  <MenuItem value={"WhatsApp"}>WhatsApp</MenuItem>
                  <MenuItem value={"Telegram"}>Telegram</MenuItem>
                  <MenuItem value={"WeChat"}>WeChat</MenuItem>
                  <MenuItem value={"EmailPrefer"}>Email</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-col">
              <TextField
                id="outlined-basic"
                label="Message"
                variant="outlined"
                type="text"
                minRows={4}
                multiline
                style={{ backgroundColor: "#fff" }}
              />
              <button
                type="button"
                className="text-black-900 bg-[#0CF0B4] h-12 w-24 hover:bg-grey-100 font-medium rounded-full text-md mt-4"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
