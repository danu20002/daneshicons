import React from 'react';

export const iconData = {
  "id": "OpticSwarm",
  "name": "OpticSwarm",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.63 15.09 L 17.27 18.84 L 7.97 16.75 L 4.60 21.11 L 15.28 6.71 L 19.78 15.88 L 18.47 15.24 L 11.26 14.71"
      }
    ],
    [
      "circle",
      {
        "cx": "14.63",
        "cy": "15.09",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "17.27",
        "cy": "18.84",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "7.97",
        "cy": "16.75",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "4.60",
        "cy": "21.11",
        "r": "1.09"
      }
    ],
    [
      "circle",
      {
        "cx": "15.28",
        "cy": "6.71",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "19.78",
        "cy": "15.88",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "18.47",
        "cy": "15.24",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "11.26",
        "cy": "14.71",
        "r": "1.32"
      }
    ]
  ]
};

export const OpticSwarm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.63 15.09 L 17.27 18.84 L 7.97 16.75 L 4.60 21.11 L 15.28 6.71 L 19.78 15.88 L 18.47 15.24 L 11.26 14.71" />
      <circle cx="14.63" cy="15.09" r="1.35" />
      <circle cx="17.27" cy="18.84" r="0.97" />
      <circle cx="7.97" cy="16.75" r="1.22" />
      <circle cx="4.60" cy="21.11" r="1.09" />
      <circle cx="15.28" cy="6.71" r="0.86" />
      <circle cx="19.78" cy="15.88" r="1.40" />
      <circle cx="18.47" cy="15.24" r="1.34" />
      <circle cx="11.26" cy="14.71" r="1.32" />
      {children}
    </svg>
  );
});

export default OpticSwarm;
