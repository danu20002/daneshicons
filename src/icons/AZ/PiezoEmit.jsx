import React from 'react';

export const iconData = {
  "id": "PiezoEmit",
  "name": "PiezoEmit",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.26 20.73 L 19.36 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.26 20.73 L 19.01 14.03"
      }
    ],
    [
      "path",
      {
        "d": "M 12.26 20.73 L 17.20 12.70"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 19.27 L 17.20 12.70"
      }
    ],
    [
      "path",
      {
        "d": "M 19.36 19.27 L 17.78 13.11"
      }
    ],
    [
      "path",
      {
        "d": "M 19.01 14.03 L 17.20 12.70"
      }
    ],
    [
      "circle",
      {
        "cx": "12.26",
        "cy": "20.73",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.36",
        "cy": "19.27",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.01",
        "cy": "14.03",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.20",
        "cy": "12.70",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "17.78",
        "cy": "13.11",
        "r": "1.5"
      }
    ]
  ]
};

export const PiezoEmit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.26 20.73 L 19.36 19.27" />
      <path d="M 12.26 20.73 L 19.01 14.03" />
      <path d="M 12.26 20.73 L 17.20 12.70" />
      <path d="M 19.36 19.27 L 17.20 12.70" />
      <path d="M 19.36 19.27 L 17.78 13.11" />
      <path d="M 19.01 14.03 L 17.20 12.70" />
      <circle cx="12.26" cy="20.73" r="1.5" />
      <circle cx="19.36" cy="19.27" r="1.5" />
      <circle cx="19.01" cy="14.03" r="1.5" />
      <circle cx="17.20" cy="12.70" r="1.5" />
      <circle cx="17.78" cy="13.11" r="1.5" />
      {children}
    </svg>
  );
});

export default PiezoEmit;
