import React from 'react';

export const iconData = {
  "id": "UmidiSteer",
  "name": "UmidiSteer",
  "category": "GC",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.71 10.64 12.96 7.67 Q 14.44 8.24 15.92 8.80 Q 15.50 13.83 15.07 18.85 Q 12.69 18.20 10.31 17.54 Q 8.08 17.34 5.86 17.14 Q 5.15 15.38 4.45 13.61 Z"
      }
    ]
  ]
};

export const UmidiSteer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.71 10.64 12.96 7.67 Q 14.44 8.24 15.92 8.80 Q 15.50 13.83 15.07 18.85 Q 12.69 18.20 10.31 17.54 Q 8.08 17.34 5.86 17.14 Q 5.15 15.38 4.45 13.61 Z" />
      {children}
    </svg>
  );
});

export default UmidiSteer;
