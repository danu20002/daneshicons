import React from 'react';

export const iconData = {
  "id": "StibioDecoy",
  "name": "StibioDecoy",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.28 17.50 L 20.39 19.31 L 3.15 17.59 L 10.69 19.14 L 2.73 21.69 L 17.11 4.00 L 15.55 16.85"
      }
    ],
    [
      "circle",
      {
        "cx": "5.28",
        "cy": "17.50",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "20.39",
        "cy": "19.31",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "3.15",
        "cy": "17.59",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "10.69",
        "cy": "19.14",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "2.73",
        "cy": "21.69",
        "r": "1.35"
      }
    ],
    [
      "circle",
      {
        "cx": "17.11",
        "cy": "4.00",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "15.55",
        "cy": "16.85",
        "r": "1.20"
      }
    ]
  ]
};

export const StibioDecoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.28 17.50 L 20.39 19.31 L 3.15 17.59 L 10.69 19.14 L 2.73 21.69 L 17.11 4.00 L 15.55 16.85" />
      <circle cx="5.28" cy="17.50" r="0.93" />
      <circle cx="20.39" cy="19.31" r="0.56" />
      <circle cx="3.15" cy="17.59" r="1.27" />
      <circle cx="10.69" cy="19.14" r="0.93" />
      <circle cx="2.73" cy="21.69" r="1.35" />
      <circle cx="17.11" cy="4.00" r="0.60" />
      <circle cx="15.55" cy="16.85" r="1.20" />
      {children}
    </svg>
  );
});

export default StibioDecoy;
