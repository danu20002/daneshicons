import React from 'react';

export const iconData = {
  "id": "ScriptoFleet",
  "name": "ScriptoFleet",
  "category": "N",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.65 6.65 L 6.16 10.67"
      }
    ],
    [
      "path",
      {
        "d": "M 19.65 6.65 L 17.29 14.85"
      }
    ],
    [
      "path",
      {
        "d": "M 19.65 6.65 L 9.32 17.19"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 3.71 L 6.16 10.67"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 3.71 L 17.29 14.85"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 3.71 L 18.70 17.80"
      }
    ],
    [
      "path",
      {
        "d": "M 17.54 3.71 L 9.32 17.19"
      }
    ],
    [
      "path",
      {
        "d": "M 17.29 14.85 L 18.70 17.80"
      }
    ],
    [
      "path",
      {
        "d": "M 18.70 17.80 L 9.32 17.19"
      }
    ],
    [
      "circle",
      {
        "cx": "19.65",
        "cy": "6.65",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.54",
        "cy": "3.71",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "6.16",
        "cy": "10.67",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.29",
        "cy": "14.85",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.70",
        "cy": "17.80",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.32",
        "cy": "17.19",
        "r": "1.5"
      }
    ]
  ]
};

export const ScriptoFleet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.65 6.65 L 6.16 10.67" />
      <path d="M 19.65 6.65 L 17.29 14.85" />
      <path d="M 19.65 6.65 L 9.32 17.19" />
      <path d="M 17.54 3.71 L 6.16 10.67" />
      <path d="M 17.54 3.71 L 17.29 14.85" />
      <path d="M 17.54 3.71 L 18.70 17.80" />
      <path d="M 17.54 3.71 L 9.32 17.19" />
      <path d="M 17.29 14.85 L 18.70 17.80" />
      <path d="M 18.70 17.80 L 9.32 17.19" />
      <circle cx="19.65" cy="6.65" r="1.5" />
      <circle cx="17.54" cy="3.71" r="1.5" />
      <circle cx="6.16" cy="10.67" r="1.5" />
      <circle cx="17.29" cy="14.85" r="1.5" />
      <circle cx="18.70" cy="17.80" r="1.5" />
      <circle cx="9.32" cy="17.19" r="1.5" />
      {children}
    </svg>
  );
});

export default ScriptoFleet;
