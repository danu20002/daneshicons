import React from 'react';

export const iconData = {
  "id": "SurdoDoom",
  "name": "SurdoDoom",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.71 19.22 L 4.59 19.78 L 8.55 8.67 L 15.05 6.18 L 10.92 4.55"
      }
    ],
    [
      "circle",
      {
        "cx": "10.71",
        "cy": "19.22",
        "r": "0.99"
      }
    ],
    [
      "circle",
      {
        "cx": "4.59",
        "cy": "19.78",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "8.55",
        "cy": "8.67",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "15.05",
        "cy": "6.18",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "10.92",
        "cy": "4.55",
        "r": "0.93"
      }
    ]
  ]
};

export const SurdoDoom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.71 19.22 L 4.59 19.78 L 8.55 8.67 L 15.05 6.18 L 10.92 4.55" />
      <circle cx="10.71" cy="19.22" r="0.99" />
      <circle cx="4.59" cy="19.78" r="0.64" />
      <circle cx="8.55" cy="8.67" r="0.60" />
      <circle cx="15.05" cy="6.18" r="1.50" />
      <circle cx="10.92" cy="4.55" r="0.93" />
      {children}
    </svg>
  );
});

export default SurdoDoom;
