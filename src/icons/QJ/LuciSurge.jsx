import React from 'react';

export const iconData = {
  "id": "LuciSurge",
  "name": "LuciSurge",
  "category": "QJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.50 17.39 L 18.43 11.90 L 8.96 19.43 L 14.98 9.03"
      }
    ],
    [
      "circle",
      {
        "cx": "2.50",
        "cy": "17.39",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "18.43",
        "cy": "11.90",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "8.96",
        "cy": "19.43",
        "r": "0.95"
      }
    ],
    [
      "circle",
      {
        "cx": "14.98",
        "cy": "9.03",
        "r": "0.75"
      }
    ]
  ]
};

export const LuciSurge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.50 17.39 L 18.43 11.90 L 8.96 19.43 L 14.98 9.03" />
      <circle cx="2.50" cy="17.39" r="1.21" />
      <circle cx="18.43" cy="11.90" r="0.78" />
      <circle cx="8.96" cy="19.43" r="0.95" />
      <circle cx="14.98" cy="9.03" r="0.75" />
      {children}
    </svg>
  );
});

export default LuciSurge;
