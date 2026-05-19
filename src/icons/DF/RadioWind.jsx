import React from 'react';

export const iconData = {
  "id": "RadioWind",
  "name": "RadioWind",
  "category": "DF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.41 13.96 L 11.32 15.85 L 21.15 16.80 L 8.45 8.78 L 19.32 14.09"
      }
    ],
    [
      "circle",
      {
        "cx": "5.41",
        "cy": "13.96",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "11.32",
        "cy": "15.85",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "21.15",
        "cy": "16.80",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "8.45",
        "cy": "8.78",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "19.32",
        "cy": "14.09",
        "r": "1.15"
      }
    ]
  ]
};

export const RadioWind = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.41 13.96 L 11.32 15.85 L 21.15 16.80 L 8.45 8.78 L 19.32 14.09" />
      <circle cx="5.41" cy="13.96" r="0.72" />
      <circle cx="11.32" cy="15.85" r="0.79" />
      <circle cx="21.15" cy="16.80" r="1.41" />
      <circle cx="8.45" cy="8.78" r="1.30" />
      <circle cx="19.32" cy="14.09" r="1.15" />
      {children}
    </svg>
  );
});

export default RadioWind;
