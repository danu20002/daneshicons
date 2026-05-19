import React from 'react';

export const iconData = {
  "id": "SusurroStar",
  "name": "SusurroStar",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.27 14.74 L 16.73 9.05 L 7.25 10.53 L 13.66 15.28 L 19.26 2.20"
      }
    ],
    [
      "circle",
      {
        "cx": "2.27",
        "cy": "14.74",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "16.73",
        "cy": "9.05",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "7.25",
        "cy": "10.53",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "13.66",
        "cy": "15.28",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "19.26",
        "cy": "2.20",
        "r": "0.99"
      }
    ]
  ]
};

export const SusurroStar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.27 14.74 L 16.73 9.05 L 7.25 10.53 L 13.66 15.28 L 19.26 2.20" />
      <circle cx="2.27" cy="14.74" r="1.12" />
      <circle cx="16.73" cy="9.05" r="0.94" />
      <circle cx="7.25" cy="10.53" r="0.79" />
      <circle cx="13.66" cy="15.28" r="0.82" />
      <circle cx="19.26" cy="2.20" r="0.99" />
      {children}
    </svg>
  );
});

export default SusurroStar;
