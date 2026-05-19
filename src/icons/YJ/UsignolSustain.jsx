import React from 'react';

export const iconData = {
  "id": "UsignolSustain",
  "name": "UsignolSustain",
  "category": "YJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.06 9.04 L 5.96 6.14"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 9.04 L 20.46 7.94"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 9.04 L 8.92 18.95"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 6.14 L 20.46 7.94"
      }
    ],
    [
      "path",
      {
        "d": "M 5.96 6.14 L 8.92 18.95"
      }
    ],
    [
      "circle",
      {
        "cx": "11.06",
        "cy": "9.04",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "5.96",
        "cy": "6.14",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.46",
        "cy": "7.94",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "8.92",
        "cy": "18.95",
        "r": "1.5"
      }
    ]
  ]
};

export const UsignolSustain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.06 9.04 L 5.96 6.14" />
      <path d="M 11.06 9.04 L 20.46 7.94" />
      <path d="M 11.06 9.04 L 8.92 18.95" />
      <path d="M 5.96 6.14 L 20.46 7.94" />
      <path d="M 5.96 6.14 L 8.92 18.95" />
      <circle cx="11.06" cy="9.04" r="1.5" />
      <circle cx="5.96" cy="6.14" r="1.5" />
      <circle cx="20.46" cy="7.94" r="1.5" />
      <circle cx="8.92" cy="18.95" r="1.5" />
      {children}
    </svg>
  );
});

export default UsignolSustain;
