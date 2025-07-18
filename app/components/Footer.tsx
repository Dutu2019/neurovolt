"use client";

import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { postEmail } from "@/lib/infolettre";
import { Toast, ToastProps } from "@/app/components/Toast";

export default function Footer() {
  const [submitActive, setSubmitActive] = useState(false);
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState<ToastProps>({ show: false, message: "" });

  const toastify = (message: string, type: ToastProps["type"]) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "" });
    }, 5000);
  };

  const handleEmailSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) {
      console.log(email);
      setSubmitActive(true);
      const result = await postEmail(email);
      if (result instanceof Error) {
        console.log(result.message);
        toastify(result.message, "error");
      } else {
        toastify("Merci de vous incrire à notre infolettre!", "success");
      }
      setSubmitActive(false);
      setEmail("");
    }
  };
  return (
    <footer className="w-full bg-primary text-primary-content p-2 md:p-3">
      {/* Subscribe to newsletter */}
      <div className="relative w-full flex flex-col justify-center items-center">
        <p className="font-extrabold text-2xl md:text-3xl">
          S'inscrire à l'infolettre de NeuroVolts
        </p>
        <p className="text-1xl md:text-2xl text-base font-semibold italic">
          Soyez toujours informés de nos activités et événements!
        </p>
        <div className="flex justify-center items-center gap-4 m-3">
          <input
            type="email"
            placeholder="Courriel"
            value={email}
            className="text-lg text-center text-black placeholder-gray bg-white w-80 h-12 focus:outline-none"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            type="submit"
            onClick={handleEmailSubmit}
            disabled={submitActive}
            className={`${
              submitActive
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-black hover:underline"
            } text-white font-semibold h-12 px-5 transition-colors`}
          >
            {submitActive ? "Envoi en cours..." : "S'abonner"}
          </button>
          <Toast
            show={toast.show}
            message={toast.message}
            type={toast.type}
          ></Toast>
        </div>
      </div>

      <div className="w-10/12 m-auto">
        <div className="relative w-full flex justify-end items-center mt-5 gap-10">
          <img
            src="/icons/mail_icon.svg"
            className="scale-130 p-1 rounded-full hover:bg-primary-content transition"
          />
          <img
            src="/icons/link_icon.svg"
            className="scale-130 p-1 rounded-full hover:bg-white transition"
          />
        </div>

        {/* Addresses */}
        <div className="relative w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col justify-start gap-1">
            <h1 className="font-extrabold text-xl mb-1">Neurovolts</h1>
            <div className="flex items-center gap-4">
              <Link
                href={"https://maps.app.goo.gl/hdZ6qkLekfrSvhU17"}
                className="hover:underline"
                target="_blank"
              >
                Collège Jean-de-Brébeuf <br />
                3200, chemin de la Côte-Sainte-Catherine <br />
                Montréal (Québec) H3T 1C1
              </Link>
              <FaExternalLinkAlt />
            </div>
            <div>(514) 342-9342</div>
            <div>erictanase2007@gmail.com</div>
          </div>
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={400}
            className="select-none"
          />
          <div className="flex justify-between gap-50">
            <div className="flex flex-col items-start gap-5">
              <Link
                href="/about"
                className="font-[400] text-1xl md:text-2xl hover:underline underline-offset-4"
              >
                About Us
              </Link>
              <Link
                href="/about"
                className="font-[400] text-1xl md:text-2xl hover:underline underline-offset-4"
              >
                Our Team
              </Link>
              <Link
                href="/about"
                className="font-[400] text-1xl md:text-2xl hover:underline underline-offset-4"
              >
                Join Us
              </Link>
            </div>
            <div className="flex flex-col items-end gap-5">
              <Link
                href="/about"
                className="font-[400] text-1xl md:text-2xl hover:underline underline-offset-4"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="font-[400] text-1xl md:text-2xl hover:underline underline-offset-4"
              >
                Publications
              </Link>
              <Link
                href="/about"
                className="font-[400] text-1xl md:text-2xl hover:underline underline-offset-4"
              >
                Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
