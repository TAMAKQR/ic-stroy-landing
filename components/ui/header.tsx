import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState("+7 777 008 77 77");

  const phones = [
    { number: "+7 777 008 77 77", tel: "tel:+77770087777" },
    { number: "+7 707 895 88 27", tel: "tel:+77078958827" },
  ];

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-white/90 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn-sm bg-black/80 text-white shadow-sm hover:bg-gray-900 flex items-center gap-2"
              >
                {selectedPhone}
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 md:right-0 mt-2 w-full min-w-[200px] bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  {phones.map((phone, index) => (
                    <li key={index}>
                      <a
                        href={phone.tel}
                        onClick={() => {
                          setSelectedPhone(phone.number);
                          setDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {phone.number}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
