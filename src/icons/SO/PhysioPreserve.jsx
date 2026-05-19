import React from 'react';

export const iconData = {
  "id": "PhysioPreserve",
  "name": "PhysioPreserve",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.63 18.01 L 10.11 21.97 L 12.57 17.48 L 13.73 16.57 L 7.94 2.08"
      }
    ],
    [
      "circle",
      {
        "cx": "4.63",
        "cy": "18.01",
        "r": "0.80"
      }
    ],
    [
      "circle",
      {
        "cx": "10.11",
        "cy": "21.97",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "12.57",
        "cy": "17.48",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "13.73",
        "cy": "16.57",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "7.94",
        "cy": "2.08",
        "r": "1.05"
      }
    ]
  ]
};

export const PhysioPreserve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.63 18.01 L 10.11 21.97 L 12.57 17.48 L 13.73 16.57 L 7.94 2.08" />
      <circle cx="4.63" cy="18.01" r="0.80" />
      <circle cx="10.11" cy="21.97" r="1.12" />
      <circle cx="12.57" cy="17.48" r="0.97" />
      <circle cx="13.73" cy="16.57" r="1.32" />
      <circle cx="7.94" cy="2.08" r="1.05" />
      {children}
    </svg>
  );
});

export default PhysioPreserve;
