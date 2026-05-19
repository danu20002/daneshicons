import React from 'react';

export const iconData = {
  "id": "TenuBuzz",
  "name": "TenuBuzz",
  "category": "OJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.22 11.20 L 17.75 17.93 L 10.95 20.19 L 4.94 16.28 L 4.25 9.15 L 9.39 4.16 L 16.50 5.08 Z"
      }
    ]
  ]
};

export const TenuBuzz = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.22 11.20 L 17.75 17.93 L 10.95 20.19 L 4.94 16.28 L 4.25 9.15 L 9.39 4.16 L 16.50 5.08 Z" />
      {children}
    </svg>
  );
});

export default TenuBuzz;
