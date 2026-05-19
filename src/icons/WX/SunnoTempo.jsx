import React from 'react';

export const iconData = {
  "id": "SunnoTempo",
  "name": "SunnoTempo",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.60 13.64 L 9.20 6.54"
      }
    ],
    [
      "path",
      {
        "d": "M 10.60 13.64 L 18.69 14.76"
      }
    ],
    [
      "path",
      {
        "d": "M 9.20 6.54 L 15.93 8.74"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 14.76 L 15.93 8.74"
      }
    ],
    [
      "circle",
      {
        "cx": "10.60",
        "cy": "13.64",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.20",
        "cy": "6.54",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.69",
        "cy": "14.76",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.93",
        "cy": "8.74",
        "r": "1.5"
      }
    ]
  ]
};

export const SunnoTempo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.60 13.64 L 9.20 6.54" />
      <path d="M 10.60 13.64 L 18.69 14.76" />
      <path d="M 9.20 6.54 L 15.93 8.74" />
      <path d="M 18.69 14.76 L 15.93 8.74" />
      <circle cx="10.60" cy="13.64" r="1.5" />
      <circle cx="9.20" cy="6.54" r="1.5" />
      <circle cx="18.69" cy="14.76" r="1.5" />
      <circle cx="15.93" cy="8.74" r="1.5" />
      {children}
    </svg>
  );
});

export default SunnoTempo;
