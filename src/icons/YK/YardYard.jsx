import React from 'react';

export const iconData = {
  "id": "YardYard",
  "name": "YardYard",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.34 8.64 L 4.97 20.28 L 14.58 4.06 L 10.25 3.40 L 7.58 18.37 L 11.85 3.97 L 10.06 2.01 L 15.34 4.74"
      }
    ],
    [
      "circle",
      {
        "cx": "2.34",
        "cy": "8.64",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "4.97",
        "cy": "20.28",
        "r": "0.63"
      }
    ],
    [
      "circle",
      {
        "cx": "14.58",
        "cy": "4.06",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "10.25",
        "cy": "3.40",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "7.58",
        "cy": "18.37",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "11.85",
        "cy": "3.97",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "10.06",
        "cy": "2.01",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "15.34",
        "cy": "4.74",
        "r": "1.45"
      }
    ]
  ]
};

export const YardYard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.34 8.64 L 4.97 20.28 L 14.58 4.06 L 10.25 3.40 L 7.58 18.37 L 11.85 3.97 L 10.06 2.01 L 15.34 4.74" />
      <circle cx="2.34" cy="8.64" r="1.28" />
      <circle cx="4.97" cy="20.28" r="0.63" />
      <circle cx="14.58" cy="4.06" r="0.56" />
      <circle cx="10.25" cy="3.40" r="0.92" />
      <circle cx="7.58" cy="18.37" r="1.22" />
      <circle cx="11.85" cy="3.97" r="1.16" />
      <circle cx="10.06" cy="2.01" r="0.89" />
      <circle cx="15.34" cy="4.74" r="1.45" />
      {children}
    </svg>
  );
});

export default YardYard;
