import React from 'react';

export const iconData = {
  "id": "TriboVital",
  "name": "TriboVital",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.36 14.58 L 19.99 14.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 14.58 L 20.78 7.78"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 14.58 L 11.39 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 14.58 L 4.71 10.83"
      }
    ],
    [
      "path",
      {
        "d": "M 19.99 14.07 L 11.39 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 19.99 14.07 L 4.71 10.83"
      }
    ],
    [
      "path",
      {
        "d": "M 20.78 7.78 L 11.39 3.57"
      }
    ],
    [
      "path",
      {
        "d": "M 20.78 7.78 L 4.71 10.83"
      }
    ],
    [
      "circle",
      {
        "cx": "6.36",
        "cy": "14.58",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "19.99",
        "cy": "14.07",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.78",
        "cy": "7.78",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "11.39",
        "cy": "3.57",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.71",
        "cy": "10.83",
        "r": "1.5"
      }
    ]
  ]
};

export const TriboVital = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.36 14.58 L 19.99 14.07" />
      <path d="M 6.36 14.58 L 20.78 7.78" />
      <path d="M 6.36 14.58 L 11.39 3.57" />
      <path d="M 6.36 14.58 L 4.71 10.83" />
      <path d="M 19.99 14.07 L 11.39 3.57" />
      <path d="M 19.99 14.07 L 4.71 10.83" />
      <path d="M 20.78 7.78 L 11.39 3.57" />
      <path d="M 20.78 7.78 L 4.71 10.83" />
      <circle cx="6.36" cy="14.58" r="1.5" />
      <circle cx="19.99" cy="14.07" r="1.5" />
      <circle cx="20.78" cy="7.78" r="1.5" />
      <circle cx="11.39" cy="3.57" r="1.5" />
      <circle cx="4.71" cy="10.83" r="1.5" />
      {children}
    </svg>
  );
});

export default TriboVital;
