import React from 'react';

export const iconData = {
  "id": "StipiteGlow",
  "name": "StipiteGlow",
  "category": "P",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.64 20.02 L 13.25 18.73 L 15.44 19.27 L 15.41 17.74 L 16.50 18.81 L 18.90 21.72 L 19.90 20.22 L 19.19 19.40 L 17.80 20.00 L 17.55 19.19 L 17.71 20.95 L 16.81 22.66 L 16.95 23.00 L 18.80 23.00 L 16.83 23.00 L 14.01 22.11 L 16.55 20.58 L 14.05 18.51 L 15.50 17.77 L 15.65 15.74 L 14.28 14.59"
      }
    ]
  ]
};

export const StipiteGlow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.64 20.02 L 13.25 18.73 L 15.44 19.27 L 15.41 17.74 L 16.50 18.81 L 18.90 21.72 L 19.90 20.22 L 19.19 19.40 L 17.80 20.00 L 17.55 19.19 L 17.71 20.95 L 16.81 22.66 L 16.95 23.00 L 18.80 23.00 L 16.83 23.00 L 14.01 22.11 L 16.55 20.58 L 14.05 18.51 L 15.50 17.77 L 15.65 15.74 L 14.28 14.59" />
      {children}
    </svg>
  );
});

export default StipiteGlow;
