import React from 'react';

export const iconData = {
  "id": "UmbelStool",
  "name": "UmbelStool",
  "category": "MS",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 17.24 L 11.97 12.05 L 15.64 5.69 L 5.60 3.65 L 6.69 20.75 L 20.11 10.81 L 9.29 6.25 L 2.88 18.67"
      }
    ],
    [
      "circle",
      {
        "cx": "3.67",
        "cy": "17.24",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "11.97",
        "cy": "12.05",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "15.64",
        "cy": "5.69",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "5.60",
        "cy": "3.65",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "6.69",
        "cy": "20.75",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "20.11",
        "cy": "10.81",
        "r": "0.54"
      }
    ],
    [
      "circle",
      {
        "cx": "9.29",
        "cy": "6.25",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "2.88",
        "cy": "18.67",
        "r": "0.95"
      }
    ]
  ]
};

export const UmbelStool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 17.24 L 11.97 12.05 L 15.64 5.69 L 5.60 3.65 L 6.69 20.75 L 20.11 10.81 L 9.29 6.25 L 2.88 18.67" />
      <circle cx="3.67" cy="17.24" r="1.06" />
      <circle cx="11.97" cy="12.05" r="1.22" />
      <circle cx="15.64" cy="5.69" r="1.35" />
      <circle cx="5.60" cy="3.65" r="0.64" />
      <circle cx="6.69" cy="20.75" r="0.93" />
      <circle cx="20.11" cy="10.81" r="0.54" />
      <circle cx="9.29" cy="6.25" r="1.28" />
      <circle cx="2.88" cy="18.67" r="0.95" />
      {children}
    </svg>
  );
});

export default UmbelStool;
