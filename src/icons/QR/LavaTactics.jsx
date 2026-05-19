import React from 'react';

export const iconData = {
  "id": "LavaTactics",
  "name": "LavaTactics",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.74 18.39 L 6.69 13.45 L 1.64 10.68 L 7.22 9.27 L 5.61 3.74 L 10.55 6.69 L 13.32 1.64 L 14.73 7.22 L 20.26 5.61 L 17.31 10.55 L 22.36 13.32 L 16.78 14.73 L 18.39 20.26 L 13.45 17.31 L 10.68 22.36 L 9.27 16.78 Z"
      }
    ]
  ]
};

export const LavaTactics = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.74 18.39 L 6.69 13.45 L 1.64 10.68 L 7.22 9.27 L 5.61 3.74 L 10.55 6.69 L 13.32 1.64 L 14.73 7.22 L 20.26 5.61 L 17.31 10.55 L 22.36 13.32 L 16.78 14.73 L 18.39 20.26 L 13.45 17.31 L 10.68 22.36 L 9.27 16.78 Z" />
      {children}
    </svg>
  );
});

export default LavaTactics;
