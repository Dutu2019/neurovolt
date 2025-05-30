import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--primary)] p-2 md:p-3">
      {/* Subscribe to newsletter */}
      <div className="relative w-full flex flex-col justify-center items-center">
        <p className="font-extrabold text-2xl md:text-3xl text-white">
          S'inscrire à l'infolettre de NeuroVolts
        </p>
        <p className="text-1xl md:text-2xl text-white font-semibold italic">
          Soyez toujours informés de nos activités et événements!
        </p>
        <div className="flex justify-center items-center gap-4 m-3">
          <input
            type="email"
            placeholder="Courriel"
            className="text-lg text-center bg-white w-80 h-12 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold h-12 px-5"
          >
            S'abonner
          </button>
        </div>
      </div>

      <div className="w-10/12 m-auto">
        <div className="relative w-full flex justify-end items-center mt-5 gap-10">
          <img
            src="/icons/mail_icon.svg"
            className="scale-130 p-1 rounded-full hover:bg-white transition"
          />
          <img
            src="/icons/link_icon.svg"
            className="scale-130 p-1 rounded-full hover:bg-white transition"
          />
        </div>

        {/* Addresses */}
        <div className="relative w-full flex justify-between items-center">
          <div className="flex flex-col justify-start">
            <h1 className="font-extrabold">Neurovolts</h1>
            Collège Jean-de-Brébeuf <br />
            3200, chemin de la Côte-Sainte-Catherine <br />
            Montréal (Québec) H3T 1C1 <br />
            Téléphone : 514 342-9342 <br />
            Courriel: Le Courriel de NeuroVolts <br />
          </div>
          <img src="/logo.png" />
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
