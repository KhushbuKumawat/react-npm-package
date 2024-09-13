"use client";
import React from "react";
import { useState } from "react";
import Icons from "./../icons";
import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Checkbox,
} from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import ApiService from "../../services/ApiService";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function Getintouch() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState("");
  const [company, setCompany] = useState("");
  const [comunicationMethod, setcomunicationMethod] = useState("Phone Number");
  const [discribeType, setdiscribeType] = useState("Individual Investor");
  const [number, setNumber] = useState("");
  const [IsCheckboxTrue, setIsCheckboxTrue] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setmessage(value);
    } else if (name === "company") {
      setCompany(value);
    } else if (name === "comunicationMethod") {
      setcomunicationMethod(value);
    } else if (name === "discribeType") {
      setdiscribeType(value);
    }
  };
  const handleChangePhoneNumber = (value) => {
    setNumber(value);
  };

  const validation = () => {
    let errors = {};
    let formIsValid = true;

    if (!firstName) {
      formIsValid = false;
      errors["Firstname"] = "*Please enter a valid first name.";
    }

    if (!lastName) {
      formIsValid = false;
      errors["Lastname"] = "*Please enter a valid last name.";
    }
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email || regex.test(email) === false) {
      formIsValid = false;
      errors["Email"] = "*Please enter your valid Email.";
    }

    if (!number) {
      formIsValid = false;
      errors["PhoneNumber"] = "*Please provide valid phone number.";
    }

    if (!discribeType) {
      formIsValid = false;
      errors["describe"] = "*Please select a best describe you.";
    }

    if (!comunicationMethod) {
      formIsValid = false;
      errors["IndividualInvestor"] =
        "*Please select a method of communication.";
    }
    if (!message) {
      formIsValid = false;
      errors["Message"] = "*Please enter your message.";
    }

    if (!IsCheckboxTrue || IsCheckboxTrue == false) {
      formIsValid = false;
      errors["IsCheckboxTrue"] =
        "*Please indicate that you have read and agree with privacy and policy.";
    }
    setError(errors);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (validation()) {
      console.log("error", error);
      const data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        message: message,
        company_name: company,
        preferred_method: comunicationMethod,
        what_describes_you: discribeType,
        mobile_no: number,
      };
      axios
        .post(
          "https://ikxl2f3jzh6cufqtr3hbwepnmm0meelh.lambda-url.us-west-2.on.aws/",
          data
        )
        .then(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setmessage("");
          setCompany("");
          setcomunicationMethod("Phone Number");
          setdiscribeType("Individual Investor");
          setNumber("");
          toast.success("Thanks for reaching out. We'll get back to you soon!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something is wrong!");
        });

      ApiService.post("api/get-in-touches", { data })
        .then(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setmessage("");
          setCompany("");
          setcomunicationMethod("Phone Number");
          setdiscribeType("Individual Investor");
          setNumber("");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something is wrong!");
        });
    }
  };
  return (
    <div
      className="mt-11 bg-[#F4F6FA]"
      
    >
      
      <section className="grid grid-cols-12 rounded-xl mb-7 overflow-hidden p-[30px]">
        <div className="xl:pt-16 lg:pt-16 pt-4 lg:px-16 px-8 pb-10 xl:col-span-5 col-span-12 border-2">
        <h2 className="leading-[45px] pb-2 text-[#000] md:text-[50px] text-[40px] font-bold">
          Get In <span className="text-[#28118A]"> Touch</span>
        </h2>
          <div
            className="flex md:flex-row lg:flex-row xl:flex-row flex-col md:mt-[43px] p-4"
            style={{
              borderRadius: "8px",
              background: "#ECE9F5",
              boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
            }}
          >
            <span className="min-w-[56px] max-w-[56px] h-[56px] rounded-md flex items-center justify-center bg-[#28118A]">
              <Icons name="message-icon" />
            </span>
            <div className="mx-[0px] md:mx-[10px] lg:mx-[10px] xl:mx-[10px] lg:my-[0px] my-[10px]">
              <h3 className="text-[#28118A] text-[22px] font-semibold">
                General Inquiries
              </h3>
              <h4 className="text-[#000] font-bold text-[16px] p-1">
                info@coindelta.io
              </h4>
            </div>
          </div>

          <div
            className="flex md:flex-row lg:flex-row xl:flex-row flex-col mt-[43px] p-4"
            style={{
              borderRadius: "8px",
              background: "#ECE9F5",
              boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
            }}
          >
            <span className="min-w-[56px] max-w-[56px] h-[56px] rounded-md flex items-center justify-center bg-[#28118A]">
              <Icons name="press-icon" />
            </span>
            <div className="mx-[0px] md:mx-[10px] lg:mx-[10px] xl:mx-[10px] lg:my-[0px] my-[10px]">
              <h3 className="text-[#28118A] text-[22px] font-semibold ">
                Media Inquiries
              </h3>
              <h4 className="text-[#000] font-bold text-[16px] p-1">
                press@coindelta.io
              </h4>
            </div>
          </div>
          <div
            className="flex md:flex-row lg:flex-row xl:flex-row flex-col mt-[43px] p-4"
            style={{
              borderRadius: "8px",
              background: "#ECE9F5",
              boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
            }}
          >
            <span className="min-w-[56px] max-w-[56px] h-[56px] rounded-md flex items-center justify-center bg-[#28118A]">
              <Icons name="location-icon" />
            </span>
            <div className="mx-[0px] md:mx-[10px] lg:mx-[10px] xl:mx-[10px] lg:my-[0px] my-[10px] ">
              <h3 className="text-[#28118A] text-[22px] font-semibold ">
                Location
              </h3>
              <h4 className="text-[#000] font-bold text-[16px] p-1">
                30 North Gould Street, Sheridan, WY, 82801
              </h4>
            </div>
          </div>
        </div>
        <div className="lg:py-16 py-8 lg:pr-[60px] px-[30px] xl:col-span-7 col-span-12">
          <div className="w-full cursor-pointer">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mb-6">
              <div className="">
                <TextField
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  value={firstName}
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">
                  {error.Firstname}
                </div>
              </div>
              <div className="">
                <TextField
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={lastName}
                  variant="outlined"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">{error.Lastname}</div>
              </div>
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mb-6">
              <div className="">
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  id="email"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">{error.Email}</div>
              </div>
              <div className="">
                <TextField
                  id="company"
                  label="Company name"
                  name="company"
                  value={company}
                  variant="outlined"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">
                  {error.Companyname}
                </div>
              </div>
            </div>

            <FormControl className="w-full" style={{ backgroundColor: "#fff" }}>
              <InputLabel id="comunicationMethodlabel">
                Preferred Method of Communication
              </InputLabel>
              <Select
                label="Preferred Method of Communication"
                name="comunicationMethod"
                value={comunicationMethod}
                id="comunicationMethodid"
                type="text"
                style={{
                  borderRadius: "8px",
                  background: "#ECE9F5",
                  boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                }}
                onChange={handleChange}
                defaultValue="Phone Number"
              >
                <MenuItem value={"Phone Number"}>Phone Number</MenuItem>
                <MenuItem value={"WhatsApp"}>WhatsApp</MenuItem>
                <MenuItem value={"Telegram"}>Telegram</MenuItem>
                <MenuItem value={"WeChat"}>WeChat</MenuItem>
                <MenuItem value={"Email Prefer"}>Email</MenuItem>
              </Select>
            </FormControl>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 my-6">
              <div className="">
                <MuiPhoneNumber
                  fullWidth
                  variant="outlined"
                  defaultCountry="us"
                  label="Phone Number"
                  value={number}
                  name="number"
                  id="number"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChangePhoneNumber}
                />
                <div className="text-[12px] text-red-500">
                  {error.PhoneNumber}
                </div>
              </div>
              <div className="">
                <FormControl
                  className="w-full"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                >
                  <InputLabel id="discribeTypelabel">
                    Which best describes you?
                  </InputLabel>
                  <Select
                    className="overflow-hidden bg-white-100"
                    label=" Which best describes you?"
                    name="discribeType"
                    type="text"
                    id="discribeTypeid"
                    defaultValue="Individual Investor"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Individual Investor"}>
                      Individual Investor
                    </MenuItem>
                    <MenuItem value={"Crypto or venture fund"}>
                      Crypto or Venture Fund
                    </MenuItem>
                    <MenuItem value={"Exchange"}>Exchange</MenuItem>
                    <MenuItem value={"Something else"}>Something Else</MenuItem>
                  </Select>
                </FormControl>
                {/* <div className="text-[12px] text-red-500">{error.describe}</div> */}
              </div>
            </div>

            <div className="flex flex-col">
              <TextField
                id="message"
                label="Message"
                name="message"
                variant="outlined"
                type="text"
                value={message}
                minRows={4}
                multiline
                style={{
                  borderRadius: "8px",
                  background: "#ECE9F5",
                  boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                }}
                onChange={handleChange}
              />
              <div className="text-[12px] text-red-500">{error.Message}</div>
              <div className="flex flex-col items-start">
                <div className="flex justify-center items-center pt-[15px]">
                  <Checkbox
                    {...label}
                    required
                    name="IsCheckboxTrue"
                    onChange={() => setIsCheckboxTrue(!IsCheckboxTrue)}
                  />
                  <p>
                    By clicking submit, you agree with our{" "}
                    <span className="text-[#28118A]">
                      <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>.
                    </span>
                  </p>
                </div>
                <div className="text-[12px] text-red-500">
                  {error.IsCheckboxTrue}
                </div>
              </div>

              <button
                type="button"
                className={
                  "border-2 border-[#28118A] text-[#28118A] hover:text-white hover:bg-[#28118A] h-12 w-[200px] bg-grey-100 font-bold rounded-2xl mt-2 cursor-pointer"
                }
                onClick={handleSubmit}
              >
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
