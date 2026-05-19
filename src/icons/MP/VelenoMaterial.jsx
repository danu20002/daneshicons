import React from 'react';

export const iconData = {
  "id": "VelenoMaterial",
  "name": "VelenoMaterial",
  "category": "MP",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.85 10.85 L 13.85 10.85"
      }
    ],
    [
      "path",
      {
        "d": "M 13.15 9.85 L 13.15 13.85"
      }
    ],
    [
      "path",
      {
        "d": "M 14.15 13.15 L 10.15 13.15"
      }
    ],
    [
      "path",
      {
        "d": "M 10.85 14.15 L 10.85 10.15"
      }
    ]
  ]
};

export const VelenoMaterial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.85 10.85 L 13.85 10.85" />
      <path d="M 13.15 9.85 L 13.15 13.85" />
      <path d="M 14.15 13.15 L 10.15 13.15" />
      <path d="M 10.85 14.15 L 10.85 10.15" />
      {children}
    </svg>
  );
});

export default VelenoMaterial;
