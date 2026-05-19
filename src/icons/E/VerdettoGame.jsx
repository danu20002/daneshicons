import React from 'react';

export const iconData = {
  "id": "VerdettoGame",
  "name": "VerdettoGame",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.83 16.22 L 6.08 11.72 L 4.26 7.03 L 9.28 6.74 L 12.43 2.81 L 15.20 7.02 L 20.17 7.78 L 17.92 12.28 L 19.74 16.97 L 14.72 17.26 L 11.57 21.19 L 8.80 16.98 Z"
      }
    ]
  ]
};

export const VerdettoGame = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.83 16.22 L 6.08 11.72 L 4.26 7.03 L 9.28 6.74 L 12.43 2.81 L 15.20 7.02 L 20.17 7.78 L 17.92 12.28 L 19.74 16.97 L 14.72 17.26 L 11.57 21.19 L 8.80 16.98 Z" />
      {children}
    </svg>
  );
});

export default VerdettoGame;
