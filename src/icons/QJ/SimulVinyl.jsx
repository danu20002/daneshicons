import React from 'react';

export const iconData = {
  "id": "SimulVinyl",
  "name": "SimulVinyl",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.74 16.97 L 2.90 20.25 L 5.93 14.31 L 18.54 20.06 L 8.96 14.28 L 11.86 4.59 L 6.32 7.56"
      }
    ],
    [
      "circle",
      {
        "cx": "19.74",
        "cy": "16.97",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "2.90",
        "cy": "20.25",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "5.93",
        "cy": "14.31",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "18.54",
        "cy": "20.06",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "8.96",
        "cy": "14.28",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "11.86",
        "cy": "4.59",
        "r": "1.07"
      }
    ],
    [
      "circle",
      {
        "cx": "6.32",
        "cy": "7.56",
        "r": "1.46"
      }
    ]
  ]
};

export const SimulVinyl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.74 16.97 L 2.90 20.25 L 5.93 14.31 L 18.54 20.06 L 8.96 14.28 L 11.86 4.59 L 6.32 7.56" />
      <circle cx="19.74" cy="16.97" r="1.06" />
      <circle cx="2.90" cy="20.25" r="1.01" />
      <circle cx="5.93" cy="14.31" r="0.74" />
      <circle cx="18.54" cy="20.06" r="0.59" />
      <circle cx="8.96" cy="14.28" r="1.20" />
      <circle cx="11.86" cy="4.59" r="1.07" />
      <circle cx="6.32" cy="7.56" r="1.46" />
      {children}
    </svg>
  );
});

export default SimulVinyl;
