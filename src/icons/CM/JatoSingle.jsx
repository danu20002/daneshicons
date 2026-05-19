import React from 'react';

export const iconData = {
  "id": "JatoSingle",
  "name": "JatoSingle",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.88 10.54 L 2.29 21.74 L 21.16 13.61 L 6.98 5.75 L 7.91 12.64 L 21.24 5.94 L 19.04 2.35 L 13.92 18.44"
      }
    ],
    [
      "circle",
      {
        "cx": "10.88",
        "cy": "10.54",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "2.29",
        "cy": "21.74",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "21.16",
        "cy": "13.61",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "6.98",
        "cy": "5.75",
        "r": "1.38"
      }
    ],
    [
      "circle",
      {
        "cx": "7.91",
        "cy": "12.64",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "21.24",
        "cy": "5.94",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "19.04",
        "cy": "2.35",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "13.92",
        "cy": "18.44",
        "r": "0.56"
      }
    ]
  ]
};

export const JatoSingle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.88 10.54 L 2.29 21.74 L 21.16 13.61 L 6.98 5.75 L 7.91 12.64 L 21.24 5.94 L 19.04 2.35 L 13.92 18.44" />
      <circle cx="10.88" cy="10.54" r="1.41" />
      <circle cx="2.29" cy="21.74" r="0.77" />
      <circle cx="21.16" cy="13.61" r="1.46" />
      <circle cx="6.98" cy="5.75" r="1.38" />
      <circle cx="7.91" cy="12.64" r="1.32" />
      <circle cx="21.24" cy="5.94" r="0.75" />
      <circle cx="19.04" cy="2.35" r="1.22" />
      <circle cx="13.92" cy="18.44" r="0.56" />
      {children}
    </svg>
  );
});

export default JatoSingle;
