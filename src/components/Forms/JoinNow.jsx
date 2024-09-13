"use client";
import React from "react";
import { useState } from "react";
// import Icons from "../../api/sendMail";
import { TextField, Checkbox } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
// import axios from "axios";
import ApiService from "@/services/ApiService";
import { toast } from "react-toastify";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export function JoinNow() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [number, setNumber] = useState("");
  // const [telegram, setTelegram] = useState("");
  const [message, setmessage] = useState("");
  const [error, setError] = useState("");
  const [IsCheckboxTrue, setIsCheckboxTrue] = useState(false);
  // const isConditionMet = IsCheckboxTrue;
  const [selectedOption, setSelectedOption] = useState("");
  // const isConditionMet = IsCheckboxTrue == true ? ;
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName") {
      setFullName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "country") {
      setCountry(value);
    } else if (name === "company") {
      setCompany(value);
    } else if (name === "website") {
      setWebsite(value);
    } else if (name === "linkedin") {
      setLinkedin(value);
    } else if (name === "message") {
      setmessage(value);
    }
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChangePhoneNumber = (value) => {
    setNumber(value);
  };
  // console.log("IsCheckboxTrue", IsCheckboxTrue);

  const validation = () => {
    let errors = {};
    let formIsValid = true;

    if (!fullName) {
      formIsValid = false;
      errors["fullName"] = "*Please enter a valid full name.";
    }

    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!email || regex.test(email) === false) {
      formIsValid = false;
      errors["Email"] = "*Please enter your valid EmailID.";
    }

    if (!IsCheckboxTrue || IsCheckboxTrue == false) {
      formIsValid = false;
      errors["IsCheckboxTrue"] =
        "*Please indicate that you have read and agree to the Terms and Conditions.";
    }

    if (!selectedOption) {
      formIsValid = false;
      errors["SelectedOption"] = "*Please select one of these options.";
    }

    if (!number) {
      formIsValid = false;
      errors["PhoneNumber"] = "*Please provide valid phone number.";
    }

    setError(errors);
    return formIsValid;
  };

  const handleSubmit = async () => {
    if (validation()) {
      // console.log("error", selectedOption);
      const data = {
        fullName: fullName,
        email: email,
        country: country,
        company: company,
        individual_or_company: selectedOption,
        website: website,
        linkedin: linkedin,
        message: message,
        contact_no: number,
      };

      ApiService.post("api/affiliate-partnership-forms", { data })
        .then(() => {
          setFullName("");
          setEmail("");
          setCountry("");
          setSelectedOption("");
          setCompany("");
          setWebsite("");
          setLinkedin("");
          setNumber("");
          setmessage("");
          toast.success("Thanks for reaching out. We'll get back to you soon!");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something is wrong!");
        });
      await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }

    //   const response = await fetch("/api/sendMail", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //     }),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {

    //     alert('Email sent successfully');

    // } else {
    //     alert('Error sending email')
    // }
    //   console.log("data", response);
    //   setEmailStatus(data.message);
  };

  // const response = await fetch(`/api/contactwithmail`, {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  // });
  // console.log(response);
  // if (response.ok) {
  //   alert("Email sent successfully");
  // } else {
  //   alert("Error sending email");
  // }

  return (
    <div
      className="mt-11"
      style={{ border: "1.716px dashed rgba(47, 50, 65, 0.20)" }}
    >
      <div className=" container-padding-x flex flex-col justify-center items-center pt-[100px]">
        <h3 className="text-[#000] lg:text-[50px] md:text-[40px] text-[30px] text-center font-extrabold">
          Affiliate Partnership <span className="text-[#28118A]"> Program</span>
        </h3>
        <p className="text-[18px] text-[#000] text-center pt-[20px]">
          Thank you for your interest in becoming an Affiliate Partner for
          Coindelta. Your support and collaboration are greatly valued. Please
          provide us with some information to get started.
        </p>
      </div>
      <section className="rounded-xl mb-7 overflow-hidden">
        <div className="lg:py-16 py-8 lg:pr-[60px] px-[30px] xl:col-span-7 col-span-12">
          <div className="w-full cursor-pointer">
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="">
                <TextField
                  id="fullName"
                  label="Full Name"
                  variant="outlined"
                  name="fullName"
                  value={fullName}
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
                <div className="text-[12px] text-red-500">{error.fullName}</div>
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
                  id="country"
                  label="Country"
                  name="country"
                  value={country}
                  variant="outlined"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-3 grid-cols-1 gap-4 mb-6">
              <div className="">
                {/* <TextField
                  label="Are you an Individual or a Company"
                  variant="outlined"
                  name="company"
                  value={company}
                  id="company"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                /> */}
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    className="font-bold"
                  >
                    Are you an Individual or a Company?
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="individual"
                      control={<Radio />}
                      label="Individual"
                      checked={selectedOption === "individual"}
                      onChange={handleOptionChange}
                    />
                    <FormControlLabel
                      value="company"
                      control={<Radio />}
                      label="Company"
                      checked={selectedOption === "company"}
                      onChange={handleOptionChange}
                    />
                  </RadioGroup>
                </FormControl>
                <div className="text-[12px] text-red-500">
                  {error.SelectedOption}
                </div>
              </div>
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
                <TextField
                  label="Company Name"
                  variant="outlined"
                  name="company"
                  value={company}
                  id="company"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mb-6">
              <div className="">
                <TextField
                  label="Website Link"
                  variant="outlined"
                  name="website"
                  value={website}
                  id="website"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
              </div>
              <div className="">
                <TextField
                  label="Linkedin Link"
                  variant="outlined"
                  name="linkedin"
                  value={linkedin}
                  id="linkedin"
                  style={{
                    borderRadius: "8px",
                    background: "#ECE9F5",
                    boxShadow: "0px 30px 116px -16px rgba(211, 211, 211, 0.20)",
                  }}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <TextField
                id="message"
                label="Have you been an affiliate for similar events or products before? If yes, please provide details."
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
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-row justify-center items-start pt-[25px]">
                <Checkbox
                  {...label}
                  required
                  name="IsCheckboxTrue"
                  onChange={() => setIsCheckboxTrue(!IsCheckboxTrue)}
                />
                <p>
                  By submitting this form, you acknowledge that you are
                  interested in becoming an Affiliate Partner for Coindelta and
                  agree to adhere to the affiliate program terms and guidelines
                  provided by the Company.
                </p>
              </div>
              <div className="text-[12px] text-red-500">
                {error.IsCheckboxTrue}
              </div>
            </div>
            <button
              type="button"
              className={
                "z-[99] text-white bg-[#28118A] h-12 w-[200px] hover:bg-grey-100 font-medium rounded-2xl text-md mt-4 cursor-pointer"
              }
              // disabled={!isConditionMet}
              onClick={handleSubmit}
            >
              Submit Message
            </button>
            {/* <p>{emailStatus}</p> */}
          </div>
        </div>
      </section>
    </div>
  );
}
