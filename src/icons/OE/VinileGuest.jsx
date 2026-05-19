import React from 'react';

export const iconData = {
  "id": "VinileGuest",
  "name": "VinileGuest",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.62 8.03 L 12.87 14.53 L 15.68 9.81 L 9.64 10.58 L 16.67 21.80"
      }
    ],
    [
      "circle",
      {
        "cx": "18.62",
        "cy": "8.03",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "12.87",
        "cy": "14.53",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "15.68",
        "cy": "9.81",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "9.64",
        "cy": "10.58",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "16.67",
        "cy": "21.80",
        "r": "1.00"
      }
    ]
  ]
};

export const VinileGuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.62 8.03 L 12.87 14.53 L 15.68 9.81 L 9.64 10.58 L 16.67 21.80" />
      <circle cx="18.62" cy="8.03" r="0.79" />
      <circle cx="12.87" cy="14.53" r="1.23" />
      <circle cx="15.68" cy="9.81" r="0.51" />
      <circle cx="9.64" cy="10.58" r="0.87" />
      <circle cx="16.67" cy="21.80" r="1.00" />
      {children}
    </svg>
  );
});

export default VinileGuest;
