import React from 'react';

export const iconData = {
  "id": "TruncoRabbit",
  "name": "TruncoRabbit",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.74 1.18 L 14.63 8.77 L 22.24 8.10 L 16.11 12.66 L 20.50 18.92 L 13.48 15.89 L 10.26 22.82 L 9.37 15.23 L 1.76 15.90 L 7.89 11.34 L 3.50 5.08 L 10.52 8.11 Z"
      }
    ]
  ]
};

export const TruncoRabbit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.74 1.18 L 14.63 8.77 L 22.24 8.10 L 16.11 12.66 L 20.50 18.92 L 13.48 15.89 L 10.26 22.82 L 9.37 15.23 L 1.76 15.90 L 7.89 11.34 L 3.50 5.08 L 10.52 8.11 Z" />
      {children}
    </svg>
  );
});

export default TruncoRabbit;
