import React from 'react';

export const iconData = {
  "id": "SopranoVision",
  "name": "SopranoVision",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.65 3.50 L 8.43 19.60 L 17.63 7.94 L 2.38 2.35 L 12.11 20.02 L 16.01 2.12"
      }
    ],
    [
      "circle",
      {
        "cx": "21.65",
        "cy": "3.50",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "8.43",
        "cy": "19.60",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "17.63",
        "cy": "7.94",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "2.38",
        "cy": "2.35",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "12.11",
        "cy": "20.02",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "16.01",
        "cy": "2.12",
        "r": "0.81"
      }
    ]
  ]
};

export const SopranoVision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.65 3.50 L 8.43 19.60 L 17.63 7.94 L 2.38 2.35 L 12.11 20.02 L 16.01 2.12" />
      <circle cx="21.65" cy="3.50" r="1.05" />
      <circle cx="8.43" cy="19.60" r="1.49" />
      <circle cx="17.63" cy="7.94" r="0.95" />
      <circle cx="2.38" cy="2.35" r="1.01" />
      <circle cx="12.11" cy="20.02" r="0.86" />
      <circle cx="16.01" cy="2.12" r="0.81" />
      {children}
    </svg>
  );
});

export default SopranoVision;
