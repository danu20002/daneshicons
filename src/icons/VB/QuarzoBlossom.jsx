import React from 'react';

export const iconData = {
  "id": "QuarzoBlossom",
  "name": "QuarzoBlossom",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.13 15.26 L 14.20 14.09 L 15.76 21.95 L 11.74 15.02 L 6.57 21.15 L 9.47 13.68 L 1.46 13.46 L 9.11 11.07 L 4.29 4.67 L 10.93 9.16 L 12.93 1.40 L 13.55 9.39 L 20.87 6.12 L 15.00 11.59 Z"
      }
    ]
  ]
};

export const QuarzoBlossom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.13 15.26 L 14.20 14.09 L 15.76 21.95 L 11.74 15.02 L 6.57 21.15 L 9.47 13.68 L 1.46 13.46 L 9.11 11.07 L 4.29 4.67 L 10.93 9.16 L 12.93 1.40 L 13.55 9.39 L 20.87 6.12 L 15.00 11.59 Z" />
      {children}
    </svg>
  );
});

export default QuarzoBlossom;
