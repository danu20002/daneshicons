import React from 'react';

export const iconData = {
  "id": "UncinoLoft",
  "name": "UncinoLoft",
  "category": "JK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.62 20.80 L 6.49 12.87 L 6.07 4.67 L 14.00 6.80 L 21.31 10.53 L 15.51 16.33 Z"
      }
    ]
  ]
};

export const UncinoLoft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.62 20.80 L 6.49 12.87 L 6.07 4.67 L 14.00 6.80 L 21.31 10.53 L 15.51 16.33 Z" />
      {children}
    </svg>
  );
});

export default UncinoLoft;
