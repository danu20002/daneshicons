import React from 'react';

export const iconData = {
  "id": "TetraTry",
  "name": "TetraTry",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.86 4.79 L 14.13 7.11 L 2.90 2.44 L 3.43 19.28 L 10.50 17.95 L 14.44 13.89 L 12.67 11.25 L 10.69 12.65"
      }
    ],
    [
      "circle",
      {
        "cx": "4.86",
        "cy": "4.79",
        "r": "0.81"
      }
    ],
    [
      "circle",
      {
        "cx": "14.13",
        "cy": "7.11",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "2.90",
        "cy": "2.44",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "3.43",
        "cy": "19.28",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "10.50",
        "cy": "17.95",
        "r": "1.13"
      }
    ],
    [
      "circle",
      {
        "cx": "14.44",
        "cy": "13.89",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "12.67",
        "cy": "11.25",
        "r": "1.44"
      }
    ],
    [
      "circle",
      {
        "cx": "10.69",
        "cy": "12.65",
        "r": "1.11"
      }
    ]
  ]
};

export const TetraTry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.86 4.79 L 14.13 7.11 L 2.90 2.44 L 3.43 19.28 L 10.50 17.95 L 14.44 13.89 L 12.67 11.25 L 10.69 12.65" />
      <circle cx="4.86" cy="4.79" r="0.81" />
      <circle cx="14.13" cy="7.11" r="1.46" />
      <circle cx="2.90" cy="2.44" r="1.49" />
      <circle cx="3.43" cy="19.28" r="0.73" />
      <circle cx="10.50" cy="17.95" r="1.13" />
      <circle cx="14.44" cy="13.89" r="1.46" />
      <circle cx="12.67" cy="11.25" r="1.44" />
      <circle cx="10.69" cy="12.65" r="1.11" />
      {children}
    </svg>
  );
});

export default TetraTry;
