import React from 'react';

export const iconData = {
  "id": "ScintilSand",
  "name": "ScintilSand",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.68 22.59 L 9.99 17.25 L 3.67 18.75 L 6.44 12.88 L 1.99 8.16 L 8.46 7.63 L 10.32 1.41 L 14.01 6.75 L 20.33 5.25 L 17.56 11.12 L 22.01 15.84 L 15.54 16.37 Z"
      }
    ]
  ]
};

export const ScintilSand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.68 22.59 L 9.99 17.25 L 3.67 18.75 L 6.44 12.88 L 1.99 8.16 L 8.46 7.63 L 10.32 1.41 L 14.01 6.75 L 20.33 5.25 L 17.56 11.12 L 22.01 15.84 L 15.54 16.37 Z" />
      {children}
    </svg>
  );
});

export default ScintilSand;
