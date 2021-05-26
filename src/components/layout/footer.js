import React from "react";
import logo from "../../assets/images/logofooter.png";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className=" bg-gray  bg-footer-texture">
      <div className=" justify-between flex text-white pl-100px pt-68px pr-114px pb-82px max-w-1366px m-auto">
        <div className="flex  w-4/12 flex-col  justify-between">
          <img src={logo} className="w-162px" alt="" />
          <div className="flex items-center ">
            <div className="mr-25px">
              {" "}
              <FaLinkedin />
            </div>
            <div className="mr-25px">
              {" "}
              <FaTwitter />
            </div>
            <div className="mr-25px">
              {" "}
              <FaFacebook />
            </div>
          </div>
        </div>
        <div className=" w-8/12">
          <div className="flex justify-between ">
            <div className="">
              <h3 className="text-14px font-bold leading-24 text-white pb-40px ">
                Platform
              </h3>
              <ul>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  Cloud Security
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Knowledge Graph
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Interactive Policy Builder
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Bird’s-eyeView Asset Context
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="text-14px font-bold leading-24  text-white pb-40px ">
                Pricing
              </h3>
              <ul>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Free Trial{" "}
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Custom Offer{" "}
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Customers{" "}
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Interviews Testimonials
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-14px font-bold leading-24  text-white pb-40px ">
                Resources
              </h3>
              <ul>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  Blog
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Documentation
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Live
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Support
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-14px font-bold leading-24  text-white pb-40px ">
                Company
              </h3>
              <ul>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  About
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Contact
                </li>
                <li className="text-12px font-light leading-24 text-white pb-7px">
                  {" "}
                  Careers
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-102px">
            <ul className="flex m-0">
              <li className="mr-50px text-12px font-light leading-24 text-white ">
                Cyscale © 2018 - 2021. All rights reserved.
              </li>
              <li className="mr-30px  text-12px font-light leading-24 text-white ">
                {" "}
                Terms of use
              </li>
              <li className="mr-30px text-12px font-light leading-24 text-white ">
                {" "}
                Security policy
              </li>
              <li className="text-12px font-light leading-24 text-white ">
                {" "}
                Privacy policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
