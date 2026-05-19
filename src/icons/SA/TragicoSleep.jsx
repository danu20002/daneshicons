import React from 'react';

export const iconData = {
  "id": "TragicoSleep",
  "name": "TragicoSleep",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.77 16.57 L 3.66 10.13 L 7.43 4.77 L 13.87 3.66 L 19.23 7.43 L 20.34 13.87 L 16.57 19.23 L 10.13 20.34 Z"
      }
    ]
  ]
};

export const TragicoSleep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.77 16.57 L 3.66 10.13 L 7.43 4.77 L 13.87 3.66 L 19.23 7.43 L 20.34 13.87 L 16.57 19.23 L 10.13 20.34 Z" />
      {children}
    </svg>
  );
});

export default TragicoSleep;
