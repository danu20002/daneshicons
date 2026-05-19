import React from 'react';

export const iconData = {
  "id": "PneumoWedding",
  "name": "PneumoWedding",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.24 4.00 L 12.73 2.17 L 18.88 4.94 L 21.80 11.01 L 20.14 17.55 L 14.67 21.48 L 7.95 20.98 L 3.12 16.28 L 2.45 9.57 Z"
      }
    ]
  ]
};

export const PneumoWedding = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.24 4.00 L 12.73 2.17 L 18.88 4.94 L 21.80 11.01 L 20.14 17.55 L 14.67 21.48 L 7.95 20.98 L 3.12 16.28 L 2.45 9.57 Z" />
      {children}
    </svg>
  );
});

export default PneumoWedding;
