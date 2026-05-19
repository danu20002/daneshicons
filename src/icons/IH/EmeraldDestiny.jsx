import React from 'react';

export const iconData = {
  "id": "EmeraldDestiny",
  "name": "EmeraldDestiny",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.95 17.66 L 16.70 7.10"
      }
    ],
    [
      "path",
      {
        "d": "M 6.95 17.66 L 4.32 6.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.70 7.10 L 4.32 6.08"
      }
    ],
    [
      "path",
      {
        "d": "M 16.70 7.10 L 3.69 17.40"
      }
    ],
    [
      "path",
      {
        "d": "M 4.32 6.08 L 3.69 17.40"
      }
    ],
    [
      "circle",
      {
        "cx": "6.95",
        "cy": "17.66",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "16.70",
        "cy": "7.10",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.32",
        "cy": "6.08",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.69",
        "cy": "17.40",
        "r": "1.5"
      }
    ]
  ]
};

export const EmeraldDestiny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.95 17.66 L 16.70 7.10" />
      <path d="M 6.95 17.66 L 4.32 6.08" />
      <path d="M 16.70 7.10 L 4.32 6.08" />
      <path d="M 16.70 7.10 L 3.69 17.40" />
      <path d="M 4.32 6.08 L 3.69 17.40" />
      <circle cx="6.95" cy="17.66" r="1.5" />
      <circle cx="16.70" cy="7.10" r="1.5" />
      <circle cx="4.32" cy="6.08" r="1.5" />
      <circle cx="3.69" cy="17.40" r="1.5" />
      {children}
    </svg>
  );
});

export default EmeraldDestiny;
