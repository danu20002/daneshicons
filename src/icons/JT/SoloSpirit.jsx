import React from 'react';

export const iconData = {
  "id": "SoloSpirit",
  "name": "SoloSpirit",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.32 9.91 L 9.30 4.74"
      }
    ],
    [
      "circle",
      {
        "cx": "13.32",
        "cy": "9.91",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "9.30",
        "cy": "4.74",
        "r": "1.5"
      }
    ],
    [
      "circle",
      {
        "cx": "20.02",
        "cy": "9.94",
        "r": "1.5"
      }
    ]
  ]
};

export const SoloSpirit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.32 9.91 L 9.30 4.74" />
      <circle cx="13.32" cy="9.91" r="1.5" />
      <circle cx="9.30" cy="4.74" r="1.5" />
      <circle cx="20.02" cy="9.94" r="1.5" />
      {children}
    </svg>
  );
});

export default SoloSpirit;
