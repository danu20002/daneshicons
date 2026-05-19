import React from 'react';

export const iconData = {
  "id": "NephroHunt",
  "name": "NephroHunt",
  "category": "BT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.08 3.46 L 10.15 16.39 L 7.34 14.44 L 20.27 14.12 L 21.45 12.51 L 2.94 4.35 L 20.17 15.50"
      }
    ],
    [
      "circle",
      {
        "cx": "13.08",
        "cy": "3.46",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "10.15",
        "cy": "16.39",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "7.34",
        "cy": "14.44",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "20.27",
        "cy": "14.12",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "21.45",
        "cy": "12.51",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "2.94",
        "cy": "4.35",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "20.17",
        "cy": "15.50",
        "r": "1.44"
      }
    ]
  ]
};

export const NephroHunt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.08 3.46 L 10.15 16.39 L 7.34 14.44 L 20.27 14.12 L 21.45 12.51 L 2.94 4.35 L 20.17 15.50" />
      <circle cx="13.08" cy="3.46" r="1.48" />
      <circle cx="10.15" cy="16.39" r="1.15" />
      <circle cx="7.34" cy="14.44" r="1.37" />
      <circle cx="20.27" cy="14.12" r="0.87" />
      <circle cx="21.45" cy="12.51" r="1.06" />
      <circle cx="2.94" cy="4.35" r="1.20" />
      <circle cx="20.17" cy="15.50" r="1.44" />
      {children}
    </svg>
  );
});

export default NephroHunt;
