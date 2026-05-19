import React from 'react';

export const iconData = {
  "id": "ScaroRitual",
  "name": "ScaroRitual",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.32 5.87 L 18.03 11.34 L 11.56 9.40 L 6.85 6.49 L 3.28 11.20"
      }
    ],
    [
      "circle",
      {
        "cx": "13.32",
        "cy": "5.87",
        "r": "1.41"
      }
    ],
    [
      "circle",
      {
        "cx": "18.03",
        "cy": "11.34",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "11.56",
        "cy": "9.40",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "6.85",
        "cy": "6.49",
        "r": "0.86"
      }
    ],
    [
      "circle",
      {
        "cx": "3.28",
        "cy": "11.20",
        "r": "0.58"
      }
    ]
  ]
};

export const ScaroRitual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.32 5.87 L 18.03 11.34 L 11.56 9.40 L 6.85 6.49 L 3.28 11.20" />
      <circle cx="13.32" cy="5.87" r="1.41" />
      <circle cx="18.03" cy="11.34" r="1.12" />
      <circle cx="11.56" cy="9.40" r="1.14" />
      <circle cx="6.85" cy="6.49" r="0.86" />
      <circle cx="3.28" cy="11.20" r="0.58" />
      {children}
    </svg>
  );
});

export default ScaroRitual;
