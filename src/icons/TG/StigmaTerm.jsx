import React from 'react';

export const iconData = {
  "id": "StigmaTerm",
  "name": "StigmaTerm",
  "category": "TG",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 18.54 L 4.74 5.96"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 18.54 L 19.26 5.10"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 18.54 L 11.23 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 7.85 18.54 L 9.43 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.96 L 19.26 5.10"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.96 L 11.23 16.05"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.96 L 9.43 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 5.96 L 18.53 9.26"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 5.10 L 9.43 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 11.23 16.05 L 9.43 17.61"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 17.61 L 18.53 9.26"
      }
    ],
    [
      "circle",
      {
        "cx": "7.85",
        "cy": "18.54",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.74",
        "cy": "5.96",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.26",
        "cy": "5.10",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.23",
        "cy": "16.05",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.43",
        "cy": "17.61",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "18.53",
        "cy": "9.26",
        "r": "1.5"
      }
    ]
  ]
};

export const StigmaTerm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 18.54 L 4.74 5.96" />
      <path d="M 7.85 18.54 L 19.26 5.10" />
      <path d="M 7.85 18.54 L 11.23 16.05" />
      <path d="M 7.85 18.54 L 9.43 17.61" />
      <path d="M 4.74 5.96 L 19.26 5.10" />
      <path d="M 4.74 5.96 L 11.23 16.05" />
      <path d="M 4.74 5.96 L 9.43 17.61" />
      <path d="M 4.74 5.96 L 18.53 9.26" />
      <path d="M 19.26 5.10 L 9.43 17.61" />
      <path d="M 11.23 16.05 L 9.43 17.61" />
      <path d="M 9.43 17.61 L 18.53 9.26" />
      <circle cx="7.85" cy="18.54" r="1.5" />
      <circle cx="4.74" cy="5.96" r="1.5" />
      <circle cx="19.26" cy="5.10" r="1.5" />
      <circle cx="11.23" cy="16.05" r="1.5" />
      <circle cx="9.43" cy="17.61" r="1.5" />
      <circle cx="18.53" cy="9.26" r="1.5" />
      {children}
    </svg>
  );
});

export default StigmaTerm;
