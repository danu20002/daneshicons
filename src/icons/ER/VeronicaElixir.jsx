import React from 'react';

export const iconData = {
  "id": "VeronicaElixir",
  "name": "VeronicaElixir",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.60 16.79 L 13.36 14.60 L 8.29 11.69 L 21.71 5.92 L 7.15 8.53"
      }
    ],
    [
      "circle",
      {
        "cx": "10.60",
        "cy": "16.79",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "13.36",
        "cy": "14.60",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "8.29",
        "cy": "11.69",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "21.71",
        "cy": "5.92",
        "r": "1.29"
      }
    ],
    [
      "circle",
      {
        "cx": "7.15",
        "cy": "8.53",
        "r": "0.92"
      }
    ]
  ]
};

export const VeronicaElixir = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.60 16.79 L 13.36 14.60 L 8.29 11.69 L 21.71 5.92 L 7.15 8.53" />
      <circle cx="10.60" cy="16.79" r="1.20" />
      <circle cx="13.36" cy="14.60" r="1.19" />
      <circle cx="8.29" cy="11.69" r="1.01" />
      <circle cx="21.71" cy="5.92" r="1.29" />
      <circle cx="7.15" cy="8.53" r="0.92" />
      {children}
    </svg>
  );
});

export default VeronicaElixir;
