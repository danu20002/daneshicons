import React from 'react';

export const iconData = {
  "id": "StagnoTuesday",
  "name": "StagnoTuesday",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.08 20.30 L 13.64 18.63"
      }
    ],
    [
      "path",
      {
        "d": "M 13.64 18.63 L 3.48 9.28"
      }
    ],
    [
      "circle",
      {
        "cx": "4.97",
        "cy": "11.95",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.08",
        "cy": "20.30",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "13.64",
        "cy": "18.63",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "3.48",
        "cy": "9.28",
        "r": "1.5"
      }
    ]
  ]
};

export const StagnoTuesday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.08 20.30 L 13.64 18.63" />
      <path d="M 13.64 18.63 L 3.48 9.28" />
      <circle cx="4.97" cy="11.95" r="1.5" />
      <circle cx="9.08" cy="20.30" r="1.5" />
      <circle cx="13.64" cy="18.63" r="1.5" />
      <circle cx="3.48" cy="9.28" r="1.5" />
      {children}
    </svg>
  );
});

export default StagnoTuesday;
