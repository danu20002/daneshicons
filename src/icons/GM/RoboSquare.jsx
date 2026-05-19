import React from 'react';

export const iconData = {
  "id": "RoboSquare",
  "name": "RoboSquare",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.44 10.38 L 9.08 9.01 L 10.59 2.41 L 13.94 8.29 L 20.69 7.70 L 16.12 12.70 L 18.78 18.93 L 12.61 16.14 L 7.50 20.59 L 8.25 13.86 Z"
      }
    ]
  ]
};

export const RoboSquare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.44 10.38 L 9.08 9.01 L 10.59 2.41 L 13.94 8.29 L 20.69 7.70 L 16.12 12.70 L 18.78 18.93 L 12.61 16.14 L 7.50 20.59 L 8.25 13.86 Z" />
      {children}
    </svg>
  );
});

export default RoboSquare;
