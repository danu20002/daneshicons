import React from 'react';

export const iconData = {
  "id": "VogaSurge",
  "name": "VogaSurge",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.92 18.45 L 14.98 3.79 L 19.36 16.21 L 8.93 13.07 L 4.46 5.60"
      }
    ],
    [
      "circle",
      {
        "cx": "13.92",
        "cy": "18.45",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "14.98",
        "cy": "3.79",
        "r": "0.82"
      }
    ],
    [
      "circle",
      {
        "cx": "19.36",
        "cy": "16.21",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "8.93",
        "cy": "13.07",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "4.46",
        "cy": "5.60",
        "r": "1.20"
      }
    ]
  ]
};

export const VogaSurge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.92 18.45 L 14.98 3.79 L 19.36 16.21 L 8.93 13.07 L 4.46 5.60" />
      <circle cx="13.92" cy="18.45" r="1.30" />
      <circle cx="14.98" cy="3.79" r="0.82" />
      <circle cx="19.36" cy="16.21" r="0.69" />
      <circle cx="8.93" cy="13.07" r="1.23" />
      <circle cx="4.46" cy="5.60" r="1.20" />
      {children}
    </svg>
  );
});

export default VogaSurge;
