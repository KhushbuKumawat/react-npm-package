import React, { useEffect } from "react";
import "./animatedLoader.css";
import Modal from "@mui/material/Modal";
import ProcessLoading from "./ProcessLoading";
// import SquLoader from "./squerLoader";
export default function AnimatedLoading({ open, setOpen, check, ismessage }) {
  const handleClose = () => setOpen(false);
const Loader = "https://lottie.host/?file=6119b4d9-326d-4372-82ca-a840779ee4d9/s03lbJ5tZT.lottie"
  useEffect(() => {
    // This function will start the animation when the component mounts
    const startAnimation = () => {
      const structure = document.querySelector(".structure");
      if (structure) {
        structure.style.animation =
          "shake 0.42s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite";
      }
    };

    startAnimation();
  }, []);
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="loader-container">
        {
          !check ? (
            <ProcessLoading ismessage={ismessage} />
          ) : (
            <div className="h-full flex flex-col justify-center">
              {" "}
              <div className="flex w-full  items-center justify-center">
                {" "}
                <iframe
                  height={500}
                  width={500}
                  src={Loader}
                ></iframe>
              </div>{" "}
              <span className="text-4xl justify-center flex text-white mt-4">
                Processing...
              </span>
            </div>
          )
          // <SquLoader />
        }
      </div>
    </Modal>
  );
}
