import React from 'react';

export const iconData = {
  "id": "PachyDungeon",
  "name": "PachyDungeon",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.06 5.80 L 4.17 21.61 L 8.27 14.41 L 5.68 16.98 L 12.59 10.96 L 2.95 18.38"
      }
    ],
    [
      "circle",
      {
        "cx": "6.06",
        "cy": "5.80",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "4.17",
        "cy": "21.61",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "8.27",
        "cy": "14.41",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "5.68",
        "cy": "16.98",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "12.59",
        "cy": "10.96",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "2.95",
        "cy": "18.38",
        "r": "1.14"
      }
    ]
  ]
};

export const PachyDungeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.06 5.80 L 4.17 21.61 L 8.27 14.41 L 5.68 16.98 L 12.59 10.96 L 2.95 18.38" />
      <circle cx="6.06" cy="5.80" r="0.97" />
      <circle cx="4.17" cy="21.61" r="1.20" />
      <circle cx="8.27" cy="14.41" r="1.23" />
      <circle cx="5.68" cy="16.98" r="0.51" />
      <circle cx="12.59" cy="10.96" r="1.33" />
      <circle cx="2.95" cy="18.38" r="1.14" />
      {children}
    </svg>
  );
});

export default PachyDungeon;
