import React from 'react';

export const iconData = {
  "id": "RedoxImprint",
  "name": "RedoxImprint",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.16 6.72 L 4.43 3.11 L 17.47 5.17 L 9.64 20.69 L 2.51 6.26"
      }
    ],
    [
      "circle",
      {
        "cx": "8.16",
        "cy": "6.72",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "4.43",
        "cy": "3.11",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "17.47",
        "cy": "5.17",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "9.64",
        "cy": "20.69",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "2.51",
        "cy": "6.26",
        "r": "1.41"
      }
    ]
  ]
};

export const RedoxImprint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.16 6.72 L 4.43 3.11 L 17.47 5.17 L 9.64 20.69 L 2.51 6.26" />
      <circle cx="8.16" cy="6.72" r="1.09" />
      <circle cx="4.43" cy="3.11" r="0.70" />
      <circle cx="17.47" cy="5.17" r="1.31" />
      <circle cx="9.64" cy="20.69" r="0.60" />
      <circle cx="2.51" cy="6.26" r="1.41" />
      {children}
    </svg>
  );
});

export default RedoxImprint;
