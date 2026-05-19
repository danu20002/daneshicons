import React from 'react';

export const iconData = {
  "id": "PrimoLeech",
  "name": "PrimoLeech",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.21 8.08 L 16.03 14.11 L 19.94 14.83 L 19.22 19.68 L 19.42 3.08 L 21.16 3.03 L 7.43 10.12"
      }
    ],
    [
      "circle",
      {
        "cx": "15.21",
        "cy": "8.08",
        "r": "1.10"
      }
    ],
    [
      "circle",
      {
        "cx": "16.03",
        "cy": "14.11",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "19.94",
        "cy": "14.83",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "19.22",
        "cy": "19.68",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "19.42",
        "cy": "3.08",
        "r": "0.66"
      }
    ],
    [
      "circle",
      {
        "cx": "21.16",
        "cy": "3.03",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "7.43",
        "cy": "10.12",
        "r": "1.16"
      }
    ]
  ]
};

export const PrimoLeech = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.21 8.08 L 16.03 14.11 L 19.94 14.83 L 19.22 19.68 L 19.42 3.08 L 21.16 3.03 L 7.43 10.12" />
      <circle cx="15.21" cy="8.08" r="1.10" />
      <circle cx="16.03" cy="14.11" r="0.97" />
      <circle cx="19.94" cy="14.83" r="1.46" />
      <circle cx="19.22" cy="19.68" r="1.30" />
      <circle cx="19.42" cy="3.08" r="0.66" />
      <circle cx="21.16" cy="3.03" r="1.37" />
      <circle cx="7.43" cy="10.12" r="1.16" />
      {children}
    </svg>
  );
});

export default PrimoLeech;
