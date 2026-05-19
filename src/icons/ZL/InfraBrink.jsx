import React from 'react';

export const iconData = {
  "id": "InfraBrink",
  "name": "InfraBrink",
  "category": "ZL",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.85 20.57 L 11.22 15.80 L 6.01 18.76 L 8.32 13.23 L 3.15 10.19 L 9.10 9.43 L 9.15 3.43 L 12.78 8.20 L 17.99 5.24 L 15.68 10.77 L 20.85 13.81 L 14.90 14.57 Z"
      }
    ]
  ]
};

export const InfraBrink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.85 20.57 L 11.22 15.80 L 6.01 18.76 L 8.32 13.23 L 3.15 10.19 L 9.10 9.43 L 9.15 3.43 L 12.78 8.20 L 17.99 5.24 L 15.68 10.77 L 20.85 13.81 L 14.90 14.57 Z" />
      {children}
    </svg>
  );
});

export default InfraBrink;
