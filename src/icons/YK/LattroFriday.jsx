import React from 'react';

export const iconData = {
  "id": "LattroFriday",
  "name": "LattroFriday",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.33 6.13 L 5.01 16.90 L 18.74 3.73 L 16.99 6.57 L 18.16 2.07"
      }
    ],
    [
      "circle",
      {
        "cx": "14.33",
        "cy": "6.13",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "5.01",
        "cy": "16.90",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "18.74",
        "cy": "3.73",
        "r": "0.62"
      }
    ],
    [
      "circle",
      {
        "cx": "16.99",
        "cy": "6.57",
        "r": "0.65"
      }
    ],
    [
      "circle",
      {
        "cx": "18.16",
        "cy": "2.07",
        "r": "0.50"
      }
    ]
  ]
};

export const LattroFriday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.33 6.13 L 5.01 16.90 L 18.74 3.73 L 16.99 6.57 L 18.16 2.07" />
      <circle cx="14.33" cy="6.13" r="0.75" />
      <circle cx="5.01" cy="16.90" r="1.31" />
      <circle cx="18.74" cy="3.73" r="0.62" />
      <circle cx="16.99" cy="6.57" r="0.65" />
      <circle cx="18.16" cy="2.07" r="0.50" />
      {children}
    </svg>
  );
});

export default LattroFriday;
