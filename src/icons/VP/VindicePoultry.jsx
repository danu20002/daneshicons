import React from 'react';

export const iconData = {
  "id": "VindicePoultry",
  "name": "VindicePoultry",
  "category": "VP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 6.54 L 20.54 6.54 L 20.54 17.46 L 3.46 17.46 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 6.54 L 8.17 1.83 L 25.25 1.83 L 20.54 6.54"
      }
    ],
    [
      "path",
      {
        "d": "M 20.54 6.54 L 25.25 1.83 L 25.25 12.76 L 20.54 17.46"
      }
    ]
  ]
};

export const VindicePoultry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 6.54 L 20.54 6.54 L 20.54 17.46 L 3.46 17.46 Z" />
      <path d="M 3.46 6.54 L 8.17 1.83 L 25.25 1.83 L 20.54 6.54" />
      <path d="M 20.54 6.54 L 25.25 1.83 L 25.25 12.76 L 20.54 17.46" />
      {children}
    </svg>
  );
});

export default VindicePoultry;
