import React from 'react';

export const iconData = {
  "id": "TerbioGeyser",
  "name": "TerbioGeyser",
  "category": "FI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.47 19.46 C 14.95 10.63, 14.25 11.04, 18.34 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 17.33 21.08 L 12.03 7.60"
      }
    ],
    [
      "path",
      {
        "d": "M 12.71 16.40 C 4.16 19.72, 17.78 11.60, 2.50 9.86"
      }
    ],
    [
      "path",
      {
        "d": "M 8.58 15.49 A 3.21 3.32 69 0 1 4.90 15.33"
      }
    ]
  ]
};

export const TerbioGeyser = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.47 19.46 C 14.95 10.63, 14.25 11.04, 18.34 21.96" />
      <path d="M 17.33 21.08 L 12.03 7.60" />
      <path d="M 12.71 16.40 C 4.16 19.72, 17.78 11.60, 2.50 9.86" />
      <path d="M 8.58 15.49 A 3.21 3.32 69 0 1 4.90 15.33" />
      {children}
    </svg>
  );
});

export default TerbioGeyser;
