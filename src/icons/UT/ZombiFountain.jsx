import React from 'react';

export const iconData = {
  "id": "ZombiFountain",
  "name": "ZombiFountain",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.59 13.22 L 18.50 15.11 L 9.38 21.30 L 21.10 10.70 L 19.39 8.85"
      }
    ],
    [
      "circle",
      {
        "cx": "19.59",
        "cy": "13.22",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "18.50",
        "cy": "15.11",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "9.38",
        "cy": "21.30",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "21.10",
        "cy": "10.70",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "19.39",
        "cy": "8.85",
        "r": "1.36"
      }
    ]
  ]
};

export const ZombiFountain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.59 13.22 L 18.50 15.11 L 9.38 21.30 L 21.10 10.70 L 19.39 8.85" />
      <circle cx="19.59" cy="13.22" r="1.48" />
      <circle cx="18.50" cy="15.11" r="1.35" />
      <circle cx="9.38" cy="21.30" r="0.59" />
      <circle cx="21.10" cy="10.70" r="1.31" />
      <circle cx="19.39" cy="8.85" r="1.36" />
      {children}
    </svg>
  );
});

export default ZombiFountain;
