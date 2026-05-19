import React from 'react';

export const iconData = {
  "id": "VolutoKazoo",
  "name": "VolutoKazoo",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.51 3.99 L 10.71 14.44 L 16.89 14.17 L 21.10 2.85 L 9.61 4.75"
      }
    ],
    [
      "circle",
      {
        "cx": "4.51",
        "cy": "3.99",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "10.71",
        "cy": "14.44",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "16.89",
        "cy": "14.17",
        "r": "1.28"
      }
    ],
    [
      "circle",
      {
        "cx": "21.10",
        "cy": "2.85",
        "r": "1.24"
      }
    ],
    [
      "circle",
      {
        "cx": "9.61",
        "cy": "4.75",
        "r": "1.22"
      }
    ]
  ]
};

export const VolutoKazoo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.51 3.99 L 10.71 14.44 L 16.89 14.17 L 21.10 2.85 L 9.61 4.75" />
      <circle cx="4.51" cy="3.99" r="0.83" />
      <circle cx="10.71" cy="14.44" r="0.97" />
      <circle cx="16.89" cy="14.17" r="1.28" />
      <circle cx="21.10" cy="2.85" r="1.24" />
      <circle cx="9.61" cy="4.75" r="1.22" />
      {children}
    </svg>
  );
});

export default VolutoKazoo;
