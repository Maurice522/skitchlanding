import React from "react";
// import { FaMapPin, FaPhone } from "react-icons/fa"
import '../styles.css';
export default function Footer() {
  return (
    <>
      <div className="footer_container_phone bg-black  w-[100%] p-10 text-slate-50 grid items-center ">
        <div className="w-32 grid justify-center">
          <div className="footer_container_heading flex justify-center items-center pb-2"><img src="/Images/FooterLogo.png" alt="" /></div>
          <p className="text-lg font-bold w-fit font-family-Poppins">skitch.pvt ltd</p>
        </div>
        <div className="footer_list_phone flex justify-between w-9/12 items-center text-[#999999]">
          <div className=""></div>
          <div className=""></div>
            <div className="footer_lists_phone ml-4">
                <p className="footer_lists_heading text-[#FDB602] mb-4 text-lg">Company</p>
                <ul className="flex gap-2 flex-col">
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer_lists_phone ml-4">
                <p className="footer_lists_heading text-[#FDB602] mb-4 text-lg">For You</p>
                <ul className="flex gap-2 flex-col">
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Refund</li>
                </ul>
            </div>
            <div className="footer_lists_phone ml-4">
                <p className="footer_lists_heading text-[#FDB602] mb-4 text-lg">Contact Us</p>
                <ul className="flex gap-2 flex-col">
                    <li>Sector-13 Rohini Delhi-110085</li>
                    <li>+91 7042517208</li>
                    <li>connect@skitch.in</li>
                </ul>
            </div>
        </div>

      </div>
      <div className="footer_last_sec bg-black p-9">
        <p className="text-start py-3 font-family-Poppins text-[#c8c8c8] spacing-2">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners.
        </p>
      </div>
      <div className="copy bg-black text-center py-3 font-family-Poppins text-[#999999]">
        SKITCH. All rights reserved.
      </div>
    </>
  );
}
