import React from 'react';

export const iconData = {
  "id": "TernoDynamo",
  "name": "TernoDynamo",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.36 21.11 L 9.47 15.50 L 3.85 16.40 L 7.69 12.20 L 3.48 8.37 L 9.16 8.75 L 9.53 3.08 L 12.77 7.75 L 17.43 4.50 L 15.80 9.95 L 21.25 11.57 L 15.97 13.69 L 18.10 18.97 L 13.15 16.16 Z"
      }
    ]
  ]
};

export const TernoDynamo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.36 21.11 L 9.47 15.50 L 3.85 16.40 L 7.69 12.20 L 3.48 8.37 L 9.16 8.75 L 9.53 3.08 L 12.77 7.75 L 17.43 4.50 L 15.80 9.95 L 21.25 11.57 L 15.97 13.69 L 18.10 18.97 L 13.15 16.16 Z" />
      {children}
    </svg>
  );
});

export default TernoDynamo;
