import React from 'react';

export const iconData = {
  "id": "VidimoSilence",
  "name": "VidimoSilence",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.89 5.47 L 18.94 6.25 L 3.92 2.26 L 2.67 3.93 L 9.94 13.24 L 13.47 17.12 L 9.22 9.78 L 5.71 7.91"
      }
    ],
    [
      "circle",
      {
        "cx": "15.89",
        "cy": "5.47",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "18.94",
        "cy": "6.25",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "3.92",
        "cy": "2.26",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "2.67",
        "cy": "3.93",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "9.94",
        "cy": "13.24",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "13.47",
        "cy": "17.12",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "9.22",
        "cy": "9.78",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "5.71",
        "cy": "7.91",
        "r": "0.60"
      }
    ]
  ]
};

export const VidimoSilence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.89 5.47 L 18.94 6.25 L 3.92 2.26 L 2.67 3.93 L 9.94 13.24 L 13.47 17.12 L 9.22 9.78 L 5.71 7.91" />
      <circle cx="15.89" cy="5.47" r="0.58" />
      <circle cx="18.94" cy="6.25" r="0.56" />
      <circle cx="3.92" cy="2.26" r="0.88" />
      <circle cx="2.67" cy="3.93" r="0.82" />
      <circle cx="9.94" cy="13.24" r="0.95" />
      <circle cx="13.47" cy="17.12" r="0.96" />
      <circle cx="9.22" cy="9.78" r="0.97" />
      <circle cx="5.71" cy="7.91" r="0.60" />
      {children}
    </svg>
  );
});

export default VidimoSilence;
