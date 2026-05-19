import React from 'react';

export const iconData = {
  "id": "VenustoNickel",
  "name": "VenustoNickel",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.57 7.12 L 11.40 14.27"
      }
    ],
    [
      "path",
      {
        "d": "M 18.57 7.12 L 16.29 15.02"
      }
    ],
    [
      "path",
      {
        "d": "M 18.57 7.12 L 3.51 18.20"
      }
    ],
    [
      "path",
      {
        "d": "M 18.57 7.12 L 17.21 16.34"
      }
    ],
    [
      "path",
      {
        "d": "M 11.40 14.27 L 3.51 18.20"
      }
    ],
    [
      "path",
      {
        "d": "M 11.40 14.27 L 14.76 7.20"
      }
    ],
    [
      "path",
      {
        "d": "M 16.29 15.02 L 3.51 18.20"
      }
    ],
    [
      "path",
      {
        "d": "M 16.29 15.02 L 17.21 16.34"
      }
    ],
    [
      "circle",
      {
        "cx": "18.57",
        "cy": "7.12",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.40",
        "cy": "14.27",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.29",
        "cy": "15.02",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.51",
        "cy": "18.20",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "14.76",
        "cy": "7.20",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.21",
        "cy": "16.34",
        "r": "1.5"
      }
    ]
  ]
};

export const VenustoNickel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.57 7.12 L 11.40 14.27" />
      <path d="M 18.57 7.12 L 16.29 15.02" />
      <path d="M 18.57 7.12 L 3.51 18.20" />
      <path d="M 18.57 7.12 L 17.21 16.34" />
      <path d="M 11.40 14.27 L 3.51 18.20" />
      <path d="M 11.40 14.27 L 14.76 7.20" />
      <path d="M 16.29 15.02 L 3.51 18.20" />
      <path d="M 16.29 15.02 L 17.21 16.34" />
      <circle cx="18.57" cy="7.12" r="1.5" />
      <circle cx="11.40" cy="14.27" r="1.5" />
      <circle cx="16.29" cy="15.02" r="1.5" />
      <circle cx="3.51" cy="18.20" r="1.5" />
      <circle cx="14.76" cy="7.20" r="1.5" />
      <circle cx="17.21" cy="16.34" r="1.5" />
      {children}
    </svg>
  );
});

export default VenustoNickel;
