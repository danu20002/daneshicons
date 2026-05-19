import React from 'react';

export const iconData = {
  "id": "CalliWrench",
  "name": "CalliWrench",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.19 20.48 L 18.92 17.10"
      }
    ],
    [
      "path",
      {
        "d": "M 16.19 20.48 L 10.70 10.63"
      }
    ],
    [
      "path",
      {
        "d": "M 16.19 20.48 L 19.36 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 17.10 L 10.70 10.63"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 17.10 L 18.10 11.39"
      }
    ],
    [
      "path",
      {
        "d": "M 18.92 17.10 L 19.36 18.90"
      }
    ],
    [
      "path",
      {
        "d": "M 10.70 10.63 L 18.10 11.39"
      }
    ],
    [
      "path",
      {
        "d": "M 18.10 11.39 L 19.36 18.90"
      }
    ],
    [
      "circle",
      {
        "cx": "16.19",
        "cy": "20.48",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.92",
        "cy": "17.10",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "10.70",
        "cy": "10.63",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.10",
        "cy": "11.39",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.36",
        "cy": "18.90",
        "r": "1.5"
      }
    ]
  ]
};

export const CalliWrench = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.19 20.48 L 18.92 17.10" />
      <path d="M 16.19 20.48 L 10.70 10.63" />
      <path d="M 16.19 20.48 L 19.36 18.90" />
      <path d="M 18.92 17.10 L 10.70 10.63" />
      <path d="M 18.92 17.10 L 18.10 11.39" />
      <path d="M 18.92 17.10 L 19.36 18.90" />
      <path d="M 10.70 10.63 L 18.10 11.39" />
      <path d="M 18.10 11.39 L 19.36 18.90" />
      <circle cx="16.19" cy="20.48" r="1.5" />
      <circle cx="18.92" cy="17.10" r="1.5" />
      <circle cx="10.70" cy="10.63" r="1.5" />
      <circle cx="18.10" cy="11.39" r="1.5" />
      <circle cx="19.36" cy="18.90" r="1.5" />
      {children}
    </svg>
  );
});

export default CalliWrench;
