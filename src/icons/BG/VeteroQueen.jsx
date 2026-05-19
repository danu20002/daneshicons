import React from 'react';

export const iconData = {
  "id": "VeteroQueen",
  "name": "VeteroQueen",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.52 9.22 L 10.15 20.77 L 5.33 6.01 Z"
      }
    ]
  ]
};

export const VeteroQueen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.52 9.22 L 10.15 20.77 L 5.33 6.01 Z" />
      {children}
    </svg>
  );
});

export default VeteroQueen;
