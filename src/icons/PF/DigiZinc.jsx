import React from 'react';

export const iconData = {
  "id": "DigiZinc",
  "name": "DigiZinc",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.14 8.42 L 15.79 12.99 L 18.23 19.58 L 12.23 15.91 L 6.71 20.27 L 8.36 13.43 L 2.50 9.53 L 9.52 8.98 L 11.42 2.20 L 14.11 8.70 Z"
      }
    ]
  ]
};

export const DigiZinc = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.14 8.42 L 15.79 12.99 L 18.23 19.58 L 12.23 15.91 L 6.71 20.27 L 8.36 13.43 L 2.50 9.53 L 9.52 8.98 L 11.42 2.20 L 14.11 8.70 Z" />
      {children}
    </svg>
  );
});

export default DigiZinc;
