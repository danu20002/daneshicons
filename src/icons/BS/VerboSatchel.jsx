import React from 'react';

export const iconData = {
  "id": "VerboSatchel",
  "name": "VerboSatchel",
  "category": "BS",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.80 14.35 12.65 8.22 Q 15.13 10.99 17.62 13.75 Q 16.37 17.21 15.13 20.67 Q 10.04 20.58 4.95 20.48 Z"
      }
    ]
  ]
};

export const VerboSatchel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.80 14.35 12.65 8.22 Q 15.13 10.99 17.62 13.75 Q 16.37 17.21 15.13 20.67 Q 10.04 20.58 4.95 20.48 Z" />
      {children}
    </svg>
  );
});

export default VerboSatchel;
