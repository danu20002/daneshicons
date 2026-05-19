import React from 'react';

export const iconData = {
  "id": "PrimoSpecies",
  "name": "PrimoSpecies",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.46 10.35 L 5.93 11.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 10.35 L 15.83 14.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.46 10.35 L 17.74 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 20.78 18.77 L 17.74 19.56"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 11.49 L 3.28 13.41"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 11.49 L 15.83 14.96"
      }
    ],
    [
      "path",
      {
        "d": "M 15.83 14.96 L 17.74 19.56"
      }
    ],
    [
      "circle",
      {
        "cx": "7.46",
        "cy": "10.35",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.78",
        "cy": "18.77",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.93",
        "cy": "11.49",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.28",
        "cy": "13.41",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.83",
        "cy": "14.96",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.74",
        "cy": "19.56",
        "r": "1.5"
      }
    ]
  ]
};

export const PrimoSpecies = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 7.46 10.35 L 5.93 11.49" />
      <path d="M 7.46 10.35 L 15.83 14.96" />
      <path d="M 7.46 10.35 L 17.74 19.56" />
      <path d="M 20.78 18.77 L 17.74 19.56" />
      <path d="M 5.93 11.49 L 3.28 13.41" />
      <path d="M 5.93 11.49 L 15.83 14.96" />
      <path d="M 15.83 14.96 L 17.74 19.56" />
      <circle cx="7.46" cy="10.35" r="1.5" />
      <circle cx="20.78" cy="18.77" r="1.5" />
      <circle cx="5.93" cy="11.49" r="1.5" />
      <circle cx="3.28" cy="13.41" r="1.5" />
      <circle cx="15.83" cy="14.96" r="1.5" />
      <circle cx="17.74" cy="19.56" r="1.5" />
      {children}
    </svg>
  );
});

export default PrimoSpecies;
