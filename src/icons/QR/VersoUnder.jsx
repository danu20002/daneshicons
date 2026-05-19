import React from 'react';

export const iconData = {
  "id": "VersoUnder",
  "name": "VersoUnder",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.26 21.53 L 9.04 14.31 L 2.09 12.34 L 8.89 9.90 L 8.62 2.67 L 13.04 8.39 L 19.82 5.90 L 15.76 11.87 L 20.22 17.56 L 13.28 15.53 Z"
      }
    ]
  ]
};

export const VersoUnder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.26 21.53 L 9.04 14.31 L 2.09 12.34 L 8.89 9.90 L 8.62 2.67 L 13.04 8.39 L 19.82 5.90 L 15.76 11.87 L 20.22 17.56 L 13.28 15.53 Z" />
      {children}
    </svg>
  );
});

export default VersoUnder;
