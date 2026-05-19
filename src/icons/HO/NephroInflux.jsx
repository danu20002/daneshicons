import React from 'react';

export const iconData = {
  "id": "NephroInflux",
  "name": "NephroInflux",
  "category": "HO",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.85 4.58 L 5.15 19.65"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 4.58 L 10.26 18.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.85 4.58 L 15.24 8.08"
      }
    ],
    [
      "path",
      {
        "d": "M 17.76 6.83 L 15.24 8.08"
      }
    ],
    [
      "path",
      {
        "d": "M 5.15 19.65 L 10.26 18.08"
      }
    ],
    [
      "circle",
      {
        "cx": "5.85",
        "cy": "4.58",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.76",
        "cy": "6.83",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.15",
        "cy": "19.65",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.26",
        "cy": "18.08",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "15.24",
        "cy": "8.08",
        "r": "1.5"
      }
    ]
  ]
};

export const NephroInflux = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.85 4.58 L 5.15 19.65" />
      <path d="M 5.85 4.58 L 10.26 18.08" />
      <path d="M 5.85 4.58 L 15.24 8.08" />
      <path d="M 17.76 6.83 L 15.24 8.08" />
      <path d="M 5.15 19.65 L 10.26 18.08" />
      <circle cx="5.85" cy="4.58" r="1.5" />
      <circle cx="17.76" cy="6.83" r="1.5" />
      <circle cx="5.15" cy="19.65" r="1.5" />
      <circle cx="10.26" cy="18.08" r="1.5" />
      <circle cx="15.24" cy="8.08" r="1.5" />
      {children}
    </svg>
  );
});

export default NephroInflux;
