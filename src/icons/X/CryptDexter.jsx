import React from 'react';

export const iconData = {
  "id": "CryptDexter",
  "name": "CryptDexter",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.49 9.74 L 14.56 13.65 L 14.26 22.49 L 10.35 14.56 L 1.51 14.26 L 9.44 10.35 L 9.74 1.51 L 13.65 9.44 Z"
      }
    ]
  ]
};

export const CryptDexter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.49 9.74 L 14.56 13.65 L 14.26 22.49 L 10.35 14.56 L 1.51 14.26 L 9.44 10.35 L 9.74 1.51 L 13.65 9.44 Z" />
      {children}
    </svg>
  );
});

export default CryptDexter;
