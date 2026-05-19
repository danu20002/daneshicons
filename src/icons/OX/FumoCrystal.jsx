import React from 'react';

export const iconData = {
  "id": "FumoCrystal",
  "name": "FumoCrystal",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.20 12.84 L 12.71 11.55 L 3.83 12.22 L 21.55 11.45"
      }
    ],
    [
      "circle",
      {
        "cx": "5.20",
        "cy": "12.84",
        "r": "0.67"
      }
    ],
    [
      "circle",
      {
        "cx": "12.71",
        "cy": "11.55",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "3.83",
        "cy": "12.22",
        "r": "0.60"
      }
    ],
    [
      "circle",
      {
        "cx": "21.55",
        "cy": "11.45",
        "r": "0.51"
      }
    ]
  ]
};

export const FumoCrystal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.20 12.84 L 12.71 11.55 L 3.83 12.22 L 21.55 11.45" />
      <circle cx="5.20" cy="12.84" r="0.67" />
      <circle cx="12.71" cy="11.55" r="1.41" />
      <circle cx="3.83" cy="12.22" r="0.60" />
      <circle cx="21.55" cy="11.45" r="0.51" />
      {children}
    </svg>
  );
});

export default FumoCrystal;
