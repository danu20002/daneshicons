import React from 'react';

export const iconData = {
  "id": "BioProvision",
  "name": "BioProvision",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.20 9.95 L 14.40 17.98 L 7.31 7.34 L 4.23 4.07 L 11.20 18.39"
      }
    ],
    [
      "circle",
      {
        "cx": "10.20",
        "cy": "9.95",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "14.40",
        "cy": "17.98",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "7.31",
        "cy": "7.34",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "4.23",
        "cy": "4.07",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "11.20",
        "cy": "18.39",
        "r": "1.22"
      }
    ]
  ]
};

export const BioProvision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.20 9.95 L 14.40 17.98 L 7.31 7.34 L 4.23 4.07 L 11.20 18.39" />
      <circle cx="10.20" cy="9.95" r="1.16" />
      <circle cx="14.40" cy="17.98" r="0.74" />
      <circle cx="7.31" cy="7.34" r="0.74" />
      <circle cx="4.23" cy="4.07" r="0.52" />
      <circle cx="11.20" cy="18.39" r="1.22" />
      {children}
    </svg>
  );
});

export default BioProvision;
