import React from 'react';

export const iconData = {
  "id": "VesteGlobe",
  "name": "VesteGlobe",
  "category": "UV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.35 0 a 8.68 8.68 0 1 0 -17.35 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 9.11 a 8.18 2.453896380214218 0 1 0 16.36 0 a 8.18 2.453896380214218 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.82 14.89 a 8.18 2.453896380214218 0 1 0 16.36 0 a 8.18 2.453896380214218 0 1 0 -16.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.32 A 2 2 0 0 0 12.00 20.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.32 A 2 2 0 0 1 12.00 20.68"
      }
    ]
  ]
};

export const VesteGlobe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.35 0 a 8.68 8.68 0 1 0 -17.35 0" />
      <path d="M 3.82 9.11 a 8.18 2.453896380214218 0 1 0 16.36 0 a 8.18 2.453896380214218 0 1 0 -16.36 0" />
      <path d="M 3.82 14.89 a 8.18 2.453896380214218 0 1 0 16.36 0 a 8.18 2.453896380214218 0 1 0 -16.36 0" />
      <path d="M 12.00 3.32 A 2 2 0 0 0 12.00 20.68" />
      <path d="M 12.00 3.32 A 2 2 0 0 1 12.00 20.68" />
      {children}
    </svg>
  );
});

export default VesteGlobe;
