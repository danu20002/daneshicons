import React from 'react';

export const iconData = {
  "id": "TromboRoast",
  "name": "TromboRoast",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 17.35 L 4.54 10.46"
      }
    ],
    [
      "path",
      {
        "d": "M 20.10 17.35 L 7.80 14.38"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 10.46 L 12.87 5.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 10.46 L 7.80 14.38"
      }
    ],
    [
      "path",
      {
        "d": "M 12.87 5.00 L 7.80 14.38"
      }
    ],
    [
      "circle",
      {
        "cx": "20.10",
        "cy": "17.35",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "4.54",
        "cy": "10.46",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "12.87",
        "cy": "5.00",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "7.80",
        "cy": "14.38",
        "r": "1.5"
      }
    ]
  ]
};

export const TromboRoast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 17.35 L 4.54 10.46" />
      <path d="M 20.10 17.35 L 7.80 14.38" />
      <path d="M 4.54 10.46 L 12.87 5.00" />
      <path d="M 4.54 10.46 L 7.80 14.38" />
      <path d="M 12.87 5.00 L 7.80 14.38" />
      <circle cx="20.10" cy="17.35" r="1.5" />
      <circle cx="4.54" cy="10.46" r="1.5" />
      <circle cx="12.87" cy="5.00" r="1.5" />
      <circle cx="7.80" cy="14.38" r="1.5" />
      {children}
    </svg>
  );
});

export default TromboRoast;
