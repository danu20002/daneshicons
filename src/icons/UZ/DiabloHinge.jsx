import React from 'react';

export const iconData = {
  "id": "DiabloHinge",
  "name": "DiabloHinge",
  "category": "UZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.78 7.55 L 10.98 3.58 L 17.95 5.96 L 20.43 12.88 L 16.57 19.14 L 9.27 20.02 L 4.02 14.87 Z"
      }
    ]
  ]
};

export const DiabloHinge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.78 7.55 L 10.98 3.58 L 17.95 5.96 L 20.43 12.88 L 16.57 19.14 L 9.27 20.02 L 4.02 14.87 Z" />
      {children}
    </svg>
  );
});

export default DiabloHinge;
