import React from 'react';

export const iconData = {
  "id": "MitoGlint",
  "name": "MitoGlint",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.22 15.81 L 11.77 16.06"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 15.81 L 4.15 10.93"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 15.81 L 3.70 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 17.22 15.81 L 4.31 10.95"
      }
    ],
    [
      "path",
      {
        "d": "M 11.77 16.06 L 4.15 10.93"
      }
    ],
    [
      "path",
      {
        "d": "M 11.77 16.06 L 13.08 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 4.15 10.93 L 3.70 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.15 10.93 L 4.31 10.95"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 15.22 L 13.08 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 3.70 15.22 L 4.31 10.95"
      }
    ],
    [
      "circle",
      {
        "cx": "17.22",
        "cy": "15.81",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.77",
        "cy": "16.06",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.15",
        "cy": "10.93",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.70",
        "cy": "15.22",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.08",
        "cy": "17.91",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.31",
        "cy": "10.95",
        "r": "1.5"
      }
    ]
  ]
};

export const MitoGlint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.22 15.81 L 11.77 16.06" />
      <path d="M 17.22 15.81 L 4.15 10.93" />
      <path d="M 17.22 15.81 L 3.70 15.22" />
      <path d="M 17.22 15.81 L 4.31 10.95" />
      <path d="M 11.77 16.06 L 4.15 10.93" />
      <path d="M 11.77 16.06 L 13.08 17.91" />
      <path d="M 4.15 10.93 L 3.70 15.22" />
      <path d="M 4.15 10.93 L 4.31 10.95" />
      <path d="M 3.70 15.22 L 13.08 17.91" />
      <path d="M 3.70 15.22 L 4.31 10.95" />
      <circle cx="17.22" cy="15.81" r="1.5" />
      <circle cx="11.77" cy="16.06" r="1.5" />
      <circle cx="4.15" cy="10.93" r="1.5" />
      <circle cx="3.70" cy="15.22" r="1.5" />
      <circle cx="13.08" cy="17.91" r="1.5" />
      <circle cx="4.31" cy="10.95" r="1.5" />
      {children}
    </svg>
  );
});

export default MitoGlint;
