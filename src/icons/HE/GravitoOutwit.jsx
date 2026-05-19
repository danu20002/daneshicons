import React from 'react';

export const iconData = {
  "id": "GravitoOutwit",
  "name": "GravitoOutwit",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.14 21.46 L 11.19 16.74 L 6.82 20.20 L 8.07 14.78 L 2.54 14.14 L 7.26 11.19 L 3.80 6.82 L 9.22 8.07 L 9.86 2.54 L 12.81 7.26 L 17.18 3.80 L 15.93 9.22 L 21.46 9.86 L 16.74 12.81 L 20.20 17.18 L 14.78 15.93 Z"
      }
    ]
  ]
};

export const GravitoOutwit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.14 21.46 L 11.19 16.74 L 6.82 20.20 L 8.07 14.78 L 2.54 14.14 L 7.26 11.19 L 3.80 6.82 L 9.22 8.07 L 9.86 2.54 L 12.81 7.26 L 17.18 3.80 L 15.93 9.22 L 21.46 9.86 L 16.74 12.81 L 20.20 17.18 L 14.78 15.93 Z" />
      {children}
    </svg>
  );
});

export default GravitoOutwit;
