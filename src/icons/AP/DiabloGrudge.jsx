import React from 'react';

export const iconData = {
  "id": "DiabloGrudge",
  "name": "DiabloGrudge",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.79 8.17 L 16.12 12.62 L 20.22 18.56 L 13.52 15.88 L 10.42 22.40 L 9.40 15.25 L 2.21 15.83 L 7.88 11.38 L 3.78 5.44 L 10.48 8.12 L 13.58 1.60 L 14.60 8.75 Z"
      }
    ]
  ]
};

export const DiabloGrudge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.79 8.17 L 16.12 12.62 L 20.22 18.56 L 13.52 15.88 L 10.42 22.40 L 9.40 15.25 L 2.21 15.83 L 7.88 11.38 L 3.78 5.44 L 10.48 8.12 L 13.58 1.60 L 14.60 8.75 Z" />
      {children}
    </svg>
  );
});

export default DiabloGrudge;
