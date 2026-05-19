import React from 'react';

export const iconData = {
  "id": "TerbioBend",
  "name": "TerbioBend",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 14.15 L 7.42 10.52 L 5.14 4.42 L 10.99 7.30 L 15.14 2.27 L 15.57 8.77 L 22.00 9.85 L 16.58 13.48 L 18.86 19.58 L 13.01 16.70 L 8.86 21.73 L 8.43 15.23 Z"
      }
    ]
  ]
};

export const TerbioBend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 14.15 L 7.42 10.52 L 5.14 4.42 L 10.99 7.30 L 15.14 2.27 L 15.57 8.77 L 22.00 9.85 L 16.58 13.48 L 18.86 19.58 L 13.01 16.70 L 8.86 21.73 L 8.43 15.23 Z" />
      {children}
    </svg>
  );
});

export default TerbioBend;
