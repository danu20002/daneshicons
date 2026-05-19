import React from 'react';

export const iconData = {
  "id": "OrniOlympic",
  "name": "OrniOlympic",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.79 16.78 L 5.23 6.62 L 15.03 3.90 L 20.64 12.37 L 14.32 20.34 Z"
      }
    ]
  ]
};

export const OrniOlympic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.79 16.78 L 5.23 6.62 L 15.03 3.90 L 20.64 12.37 L 14.32 20.34 Z" />
      {children}
    </svg>
  );
});

export default OrniOlympic;
