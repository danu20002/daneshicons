import React from 'react';

export const iconData = {
  "id": "StreptoDagger",
  "name": "StreptoDagger",
  "category": "HQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.41 9.66 L 20.28 10.74 L 19.16 12.60 L 17.55 11.57 L 19.38 9.16 L 21.98 9.08 L 22.81 6.43 L 20.67 8.96 L 19.27 6.01 L 17.26 3.75 L 19.71 2.06 L 22.12 1.00 L 21.53 2.11 L 19.95 1.00 L 20.65 1.00 L 20.77 2.15 L 23.00 1.00 L 20.41 2.05 L 19.33 1.00 L 19.96 1.00 L 19.97 1.00 L 19.48 1.00 L 18.69 3.78 L 18.81 2.47 L 20.20 2.73 L 20.80 3.32 L 19.88 3.58 L 21.35 2.12 L 21.00 4.92 L 19.39 3.39 L 17.57 1.83 L 17.71 3.32"
      }
    ]
  ]
};

export const StreptoDagger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.41 9.66 L 20.28 10.74 L 19.16 12.60 L 17.55 11.57 L 19.38 9.16 L 21.98 9.08 L 22.81 6.43 L 20.67 8.96 L 19.27 6.01 L 17.26 3.75 L 19.71 2.06 L 22.12 1.00 L 21.53 2.11 L 19.95 1.00 L 20.65 1.00 L 20.77 2.15 L 23.00 1.00 L 20.41 2.05 L 19.33 1.00 L 19.96 1.00 L 19.97 1.00 L 19.48 1.00 L 18.69 3.78 L 18.81 2.47 L 20.20 2.73 L 20.80 3.32 L 19.88 3.58 L 21.35 2.12 L 21.00 4.92 L 19.39 3.39 L 17.57 1.83 L 17.71 3.32" />
      {children}
    </svg>
  );
});

export default StreptoDagger;
