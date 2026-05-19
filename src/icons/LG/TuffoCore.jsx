import React from 'react';

export const iconData = {
  "id": "TuffoCore",
  "name": "TuffoCore",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.11 16.95 L 8.94 3.32 L 2.67 14.63 L 21.62 21.31 L 5.55 10.77 L 8.62 19.71 L 5.99 6.74"
      }
    ],
    [
      "circle",
      {
        "cx": "9.11",
        "cy": "16.95",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "8.94",
        "cy": "3.32",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "2.67",
        "cy": "14.63",
        "r": "1.15"
      }
    ],
    [
      "circle",
      {
        "cx": "21.62",
        "cy": "21.31",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "5.55",
        "cy": "10.77",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "8.62",
        "cy": "19.71",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "5.99",
        "cy": "6.74",
        "r": "0.50"
      }
    ]
  ]
};

export const TuffoCore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.11 16.95 L 8.94 3.32 L 2.67 14.63 L 21.62 21.31 L 5.55 10.77 L 8.62 19.71 L 5.99 6.74" />
      <circle cx="9.11" cy="16.95" r="1.33" />
      <circle cx="8.94" cy="3.32" r="1.16" />
      <circle cx="2.67" cy="14.63" r="1.15" />
      <circle cx="21.62" cy="21.31" r="1.02" />
      <circle cx="5.55" cy="10.77" r="0.61" />
      <circle cx="8.62" cy="19.71" r="0.86" />
      <circle cx="5.99" cy="6.74" r="0.50" />
      {children}
    </svg>
  );
});

export default TuffoCore;
