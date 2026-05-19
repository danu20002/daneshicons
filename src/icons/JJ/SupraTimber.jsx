import React from 'react';

export const iconData = {
  "id": "SupraTimber",
  "name": "SupraTimber",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.44 20.88 L 11.75 15.16 L 7.20 20.22 L 9.37 13.77 L 2.58 13.38 L 8.97 11.05 L 5.05 5.49 L 10.85 9.04 L 12.75 2.51 L 13.60 9.26 L 19.89 6.67 L 15.14 11.54 L 21.08 14.85 L 14.31 14.17 Z"
      }
    ]
  ]
};

export const SupraTimber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.44 20.88 L 11.75 15.16 L 7.20 20.22 L 9.37 13.77 L 2.58 13.38 L 8.97 11.05 L 5.05 5.49 L 10.85 9.04 L 12.75 2.51 L 13.60 9.26 L 19.89 6.67 L 15.14 11.54 L 21.08 14.85 L 14.31 14.17 Z" />
      {children}
    </svg>
  );
});

export default SupraTimber;
