import React from 'react';

export const iconData = {
  "id": "TaeniaSpy",
  "name": "TaeniaSpy",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.24 4.80 L 16.32 3.37 L 15.33 4.86 L 10.41 12.06 L 21.79 19.30"
      }
    ],
    [
      "circle",
      {
        "cx": "4.24",
        "cy": "4.80",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "16.32",
        "cy": "3.37",
        "r": "0.85"
      }
    ],
    [
      "circle",
      {
        "cx": "15.33",
        "cy": "4.86",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "10.41",
        "cy": "12.06",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "21.79",
        "cy": "19.30",
        "r": "0.99"
      }
    ]
  ]
};

export const TaeniaSpy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.24 4.80 L 16.32 3.37 L 15.33 4.86 L 10.41 12.06 L 21.79 19.30" />
      <circle cx="4.24" cy="4.80" r="0.96" />
      <circle cx="16.32" cy="3.37" r="0.85" />
      <circle cx="15.33" cy="4.86" r="1.23" />
      <circle cx="10.41" cy="12.06" r="1.10" />
      <circle cx="21.79" cy="19.30" r="0.99" />
      {children}
    </svg>
  );
});

export default TaeniaSpy;
