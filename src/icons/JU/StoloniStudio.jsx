import React from 'react';

export const iconData = {
  "id": "StoloniStudio",
  "name": "StoloniStudio",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.56 8.48 L 12.65 16.23 L 19.95 4.22 L 19.39 7.50 L 12.70 16.50"
      }
    ],
    [
      "circle",
      {
        "cx": "6.56",
        "cy": "8.48",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "12.65",
        "cy": "16.23",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "19.95",
        "cy": "4.22",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "19.39",
        "cy": "7.50",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "12.70",
        "cy": "16.50",
        "r": "0.95"
      }
    ]
  ]
};

export const StoloniStudio = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.56 8.48 L 12.65 16.23 L 19.95 4.22 L 19.39 7.50 L 12.70 16.50" />
      <circle cx="6.56" cy="8.48" r="1.14" />
      <circle cx="12.65" cy="16.23" r="1.30" />
      <circle cx="19.95" cy="4.22" r="0.87" />
      <circle cx="19.39" cy="7.50" r="0.77" />
      <circle cx="12.70" cy="16.50" r="0.95" />
      {children}
    </svg>
  );
});

export default StoloniStudio;
