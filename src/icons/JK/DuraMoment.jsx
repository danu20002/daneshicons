import React from 'react';

export const iconData = {
  "id": "DuraMoment",
  "name": "DuraMoment",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.90 21.10 L 10.34 14.69 L 1.67 11.69 L 10.50 9.22 L 17.43 3.21 L 15.16 12.09 Z"
      }
    ]
  ]
};

export const DuraMoment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.90 21.10 L 10.34 14.69 L 1.67 11.69 L 10.50 9.22 L 17.43 3.21 L 15.16 12.09 Z" />
      {children}
    </svg>
  );
});

export default DuraMoment;
