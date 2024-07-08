import React, { useState } from 'react';

const DropDowns = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="relative block ">
    <div className=''>
      <button
        type="button"
        className={`inline-flex mt-2 w-full text-body-large   bg-white focus:outline-none ${
            isOpen ? "text-imperial-red" : "text-black"
          }`}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={toggleDropdown}
      >
        {label}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div className="py-1" role="none">
    {options.map((option, index) => (
            <a
              href={option.href}
              key={index}
              className={`ml-5 text-body-large  ${
                isOpen ? "block" : "hidden"
              }`}
              role="menuitem"
              tabIndex="-1"
              id={`menu-item-${index}`}
            >
              {option.label}
            </a>
          ))}
        </div>
  </div>
  )
}

export default DropDowns
