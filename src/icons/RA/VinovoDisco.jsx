import React from 'react';

export const iconData = {
  "id": "VinovoDisco",
  "name": "VinovoDisco",
  "category": "RA",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.32 16.17 A 3.71 4.03 71 0 0 12.72 17.94"
      }
    ],
    [
      "path",
      {
        "d": "M 18.41 10.13 A 2.56 5.28 107 0 1 21.48 15.40"
      }
    ],
    [
      "path",
      {
        "d": "M 5.61 4.85 L 17.52 15.65 L 7.41 16.73 L 13.87 5.35 L 6.93 21.54 L 7.45 16.52 L 7.81 6.50 L 16.13 6.55"
      }
    ],
    [
      "path",
      {
        "d": "M 5.80 18.88 L 7.45 8.19"
      }
    ]
  ]
};

export const VinovoDisco = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.32 16.17 A 3.71 4.03 71 0 0 12.72 17.94" />
      <path d="M 18.41 10.13 A 2.56 5.28 107 0 1 21.48 15.40" />
      <path d="M 5.61 4.85 L 17.52 15.65 L 7.41 16.73 L 13.87 5.35 L 6.93 21.54 L 7.45 16.52 L 7.81 6.50 L 16.13 6.55" />
      <path d="M 5.80 18.88 L 7.45 8.19" />
      {children}
    </svg>
  );
});

export default VinovoDisco;
