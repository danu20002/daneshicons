import React from 'react';

export const iconData = {
  "id": "TheoFence",
  "name": "TheoFence",
  "category": "ZD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.31 21.18 L 2.33 4.59 L 15.21 15.56 L 21.93 20.83 L 6.00 19.81 L 6.64 19.20"
      }
    ],
    [
      "circle",
      {
        "cx": "3.31",
        "cy": "21.18",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "2.33",
        "cy": "4.59",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "15.21",
        "cy": "15.56",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "21.93",
        "cy": "20.83",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "19.81",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "6.64",
        "cy": "19.20",
        "r": "1.08"
      }
    ]
  ]
};

export const TheoFence = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.31 21.18 L 2.33 4.59 L 15.21 15.56 L 21.93 20.83 L 6.00 19.81 L 6.64 19.20" />
      <circle cx="3.31" cy="21.18" r="1.06" />
      <circle cx="2.33" cy="4.59" r="1.02" />
      <circle cx="15.21" cy="15.56" r="0.89" />
      <circle cx="21.93" cy="20.83" r="1.01" />
      <circle cx="6.00" cy="19.81" r="0.89" />
      <circle cx="6.64" cy="19.20" r="1.08" />
      {children}
    </svg>
  );
});

export default TheoFence;
