import React from 'react';

export const iconData = {
  "id": "MegaImagine",
  "name": "MegaImagine",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.66 21.56 L 3.08 18.02 L 15.94 7.97 L 15.58 7.74 L 5.46 12.99 L 11.12 4.36 L 3.27 19.30"
      }
    ],
    [
      "circle",
      {
        "cx": "9.66",
        "cy": "21.56",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "3.08",
        "cy": "18.02",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "15.94",
        "cy": "7.97",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "15.58",
        "cy": "7.74",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "5.46",
        "cy": "12.99",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "11.12",
        "cy": "4.36",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "3.27",
        "cy": "19.30",
        "r": "1.23"
      }
    ]
  ]
};

export const MegaImagine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.66 21.56 L 3.08 18.02 L 15.94 7.97 L 15.58 7.74 L 5.46 12.99 L 11.12 4.36 L 3.27 19.30" />
      <circle cx="9.66" cy="21.56" r="0.94" />
      <circle cx="3.08" cy="18.02" r="0.67" />
      <circle cx="15.94" cy="7.97" r="1.22" />
      <circle cx="15.58" cy="7.74" r="0.52" />
      <circle cx="5.46" cy="12.99" r="1.10" />
      <circle cx="11.12" cy="4.36" r="1.36" />
      <circle cx="3.27" cy="19.30" r="1.23" />
      {children}
    </svg>
  );
});

export default MegaImagine;
