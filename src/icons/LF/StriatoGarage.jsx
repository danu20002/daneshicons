import React from 'react';

export const iconData = {
  "id": "StriatoGarage",
  "name": "StriatoGarage",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.25 15.78 L 18.23 15.25"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 15.78 L 7.12 9.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.25 15.78 L 13.37 14.19"
      }
    ],
    [
      "path",
      {
        "d": "M 18.23 15.25 L 7.12 9.46"
      }
    ],
    [
      "path",
      {
        "d": "M 18.23 15.25 L 11.26 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 11.26 19.87 L 13.37 14.19"
      }
    ],
    [
      "circle",
      {
        "cx": "4.25",
        "cy": "15.78",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.23",
        "cy": "15.25",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "7.12",
        "cy": "9.46",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.26",
        "cy": "19.87",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.37",
        "cy": "14.19",
        "r": "1.5"
      }
    ]
  ]
};

export const StriatoGarage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.25 15.78 L 18.23 15.25" />
      <path d="M 4.25 15.78 L 7.12 9.46" />
      <path d="M 4.25 15.78 L 13.37 14.19" />
      <path d="M 18.23 15.25 L 7.12 9.46" />
      <path d="M 18.23 15.25 L 11.26 19.87" />
      <path d="M 11.26 19.87 L 13.37 14.19" />
      <circle cx="4.25" cy="15.78" r="1.5" />
      <circle cx="18.23" cy="15.25" r="1.5" />
      <circle cx="7.12" cy="9.46" r="1.5" />
      <circle cx="11.26" cy="19.87" r="1.5" />
      <circle cx="13.37" cy="14.19" r="1.5" />
      {children}
    </svg>
  );
});

export default StriatoGarage;
