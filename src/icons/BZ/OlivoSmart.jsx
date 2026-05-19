import React from 'react';

export const iconData = {
  "id": "OlivoSmart",
  "name": "OlivoSmart",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.51 15.50 L 14.84 19.78 L 8.50 19.51 L 4.22 14.84 L 4.49 8.50 L 9.16 4.22 L 15.50 4.49 L 19.78 9.16 Z"
      }
    ]
  ]
};

export const OlivoSmart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.51 15.50 L 14.84 19.78 L 8.50 19.51 L 4.22 14.84 L 4.49 8.50 L 9.16 4.22 L 15.50 4.49 L 19.78 9.16 Z" />
      {children}
    </svg>
  );
});

export default OlivoSmart;
