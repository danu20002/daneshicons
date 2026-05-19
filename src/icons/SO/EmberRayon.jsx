import React from 'react';

export const iconData = {
  "id": "EmberRayon",
  "name": "EmberRayon",
  "category": "SO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.02 14.00 L 3.00 3.75 L 12.92 4.11 L 16.38 8.51 L 13.71 2.41"
      }
    ],
    [
      "circle",
      {
        "cx": "16.02",
        "cy": "14.00",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "3.00",
        "cy": "3.75",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "12.92",
        "cy": "4.11",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "16.38",
        "cy": "8.51",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "13.71",
        "cy": "2.41",
        "r": "0.54"
      }
    ]
  ]
};

export const EmberRayon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.02 14.00 L 3.00 3.75 L 12.92 4.11 L 16.38 8.51 L 13.71 2.41" />
      <circle cx="16.02" cy="14.00" r="0.51" />
      <circle cx="3.00" cy="3.75" r="1.15" />
      <circle cx="12.92" cy="4.11" r="0.75" />
      <circle cx="16.38" cy="8.51" r="0.59" />
      <circle cx="13.71" cy="2.41" r="0.54" />
      {children}
    </svg>
  );
});

export default EmberRayon;
