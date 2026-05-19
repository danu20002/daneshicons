import React from 'react';

export const iconData = {
  "id": "TheoKing",
  "name": "TheoKing",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.77 19.61 L 12.05 16.79 L 4.39 19.77 L 7.21 12.05 L 4.23 4.39 L 11.95 7.21 L 19.61 4.23 L 16.79 11.95 Z"
      }
    ]
  ]
};

export const TheoKing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.77 19.61 L 12.05 16.79 L 4.39 19.77 L 7.21 12.05 L 4.23 4.39 L 11.95 7.21 L 19.61 4.23 L 16.79 11.95 Z" />
      {children}
    </svg>
  );
});

export default TheoKing;
