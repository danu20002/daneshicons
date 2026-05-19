import React from 'react';

export const iconData = {
  "id": "CryptTwice",
  "name": "CryptTwice",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.13 5.61 L 11.10 7.39 L 15.96 3.50 L 16.11 9.72 L 21.31 13.13 L 15.44 15.20 L 13.80 21.21 L 10.02 16.26 L 3.80 16.56 L 7.33 11.43 Z"
      }
    ]
  ]
};

export const CryptTwice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.13 5.61 L 11.10 7.39 L 15.96 3.50 L 16.11 9.72 L 21.31 13.13 L 15.44 15.20 L 13.80 21.21 L 10.02 16.26 L 3.80 16.56 L 7.33 11.43 Z" />
      {children}
    </svg>
  );
});

export default CryptTwice;
