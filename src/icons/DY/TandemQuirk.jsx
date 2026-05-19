import React from 'react';

export const iconData = {
  "id": "TandemQuirk",
  "name": "TandemQuirk",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.28 16.46 L 18.80 8.26 L 4.74 5.19 L 21.95 2.41 L 14.84 3.26"
      }
    ],
    [
      "circle",
      {
        "cx": "6.28",
        "cy": "16.46",
        "r": "0.88"
      }
    ],
    [
      "circle",
      {
        "cx": "18.80",
        "cy": "8.26",
        "r": "1.25"
      }
    ],
    [
      "circle",
      {
        "cx": "4.74",
        "cy": "5.19",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "21.95",
        "cy": "2.41",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "14.84",
        "cy": "3.26",
        "r": "1.36"
      }
    ]
  ]
};

export const TandemQuirk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.28 16.46 L 18.80 8.26 L 4.74 5.19 L 21.95 2.41 L 14.84 3.26" />
      <circle cx="6.28" cy="16.46" r="0.88" />
      <circle cx="18.80" cy="8.26" r="1.25" />
      <circle cx="4.74" cy="5.19" r="0.55" />
      <circle cx="21.95" cy="2.41" r="1.17" />
      <circle cx="14.84" cy="3.26" r="1.36" />
      {children}
    </svg>
  );
});

export default TandemQuirk;
