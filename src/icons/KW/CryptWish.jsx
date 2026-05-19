import React from 'react';

export const iconData = {
  "id": "CryptWish",
  "name": "CryptWish",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.66 13.89 L 13.48 16.08 L 5.04 20.28 L 7.73 11.24 L 8.31 1.83 L 14.79 8.68 Z"
      }
    ]
  ]
};

export const CryptWish = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.66 13.89 L 13.48 16.08 L 5.04 20.28 L 7.73 11.24 L 8.31 1.83 L 14.79 8.68 Z" />
      {children}
    </svg>
  );
});

export default CryptWish;
