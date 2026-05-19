import React from 'react';

export const iconData = {
  "id": "TectoShort",
  "name": "TectoShort",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.32 8.53 L 18.21 18.71 L 5.54 14.00 L 3.36 12.39 L 8.49 11.22 L 8.31 6.09 L 17.32 21.84 L 19.00 16.18"
      }
    ],
    [
      "circle",
      {
        "cx": "2.32",
        "cy": "8.53",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "18.21",
        "cy": "18.71",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "5.54",
        "cy": "14.00",
        "r": "0.84"
      }
    ],
    [
      "circle",
      {
        "cx": "3.36",
        "cy": "12.39",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "8.49",
        "cy": "11.22",
        "r": "1.26"
      }
    ],
    [
      "circle",
      {
        "cx": "8.31",
        "cy": "6.09",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "17.32",
        "cy": "21.84",
        "r": "0.92"
      }
    ],
    [
      "circle",
      {
        "cx": "19.00",
        "cy": "16.18",
        "r": "0.86"
      }
    ]
  ]
};

export const TectoShort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.32 8.53 L 18.21 18.71 L 5.54 14.00 L 3.36 12.39 L 8.49 11.22 L 8.31 6.09 L 17.32 21.84 L 19.00 16.18" />
      <circle cx="2.32" cy="8.53" r="1.32" />
      <circle cx="18.21" cy="18.71" r="0.96" />
      <circle cx="5.54" cy="14.00" r="0.84" />
      <circle cx="3.36" cy="12.39" r="0.67" />
      <circle cx="8.49" cy="11.22" r="1.26" />
      <circle cx="8.31" cy="6.09" r="1.19" />
      <circle cx="17.32" cy="21.84" r="0.92" />
      <circle cx="19.00" cy="16.18" r="0.86" />
      {children}
    </svg>
  );
});

export default TectoShort;
