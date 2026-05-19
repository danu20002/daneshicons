import React from 'react';

export const iconData = {
  "id": "SeveroPatch",
  "name": "SeveroPatch",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.34 12.54 L 16.97 9.35 L 13.32 10.59 L 5.43 20.00 L 7.19 8.41"
      }
    ],
    [
      "circle",
      {
        "cx": "11.34",
        "cy": "12.54",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "16.97",
        "cy": "9.35",
        "r": "1.42"
      }
    ],
    [
      "circle",
      {
        "cx": "13.32",
        "cy": "10.59",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "5.43",
        "cy": "20.00",
        "r": "0.70"
      }
    ],
    [
      "circle",
      {
        "cx": "7.19",
        "cy": "8.41",
        "r": "1.02"
      }
    ]
  ]
};

export const SeveroPatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.34 12.54 L 16.97 9.35 L 13.32 10.59 L 5.43 20.00 L 7.19 8.41" />
      <circle cx="11.34" cy="12.54" r="0.84" />
      <circle cx="16.97" cy="9.35" r="1.42" />
      <circle cx="13.32" cy="10.59" r="0.64" />
      <circle cx="5.43" cy="20.00" r="0.70" />
      <circle cx="7.19" cy="8.41" r="1.02" />
      {children}
    </svg>
  );
});

export default SeveroPatch;
