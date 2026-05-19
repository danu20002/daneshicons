import React from 'react';

export const iconData = {
  "id": "OdontoCoast",
  "name": "OdontoCoast",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.14 20.95 L 11.12 16.45 L 4.77 18.70 L 7.50 12.54 L 3.39 7.20 L 10.09 7.88 L 13.91 2.33 L 15.33 8.92 L 21.79 10.83 L 15.96 14.21 Z"
      }
    ]
  ]
};

export const OdontoCoast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.14 20.95 L 11.12 16.45 L 4.77 18.70 L 7.50 12.54 L 3.39 7.20 L 10.09 7.88 L 13.91 2.33 L 15.33 8.92 L 21.79 10.83 L 15.96 14.21 Z" />
      {children}
    </svg>
  );
});

export default OdontoCoast;
