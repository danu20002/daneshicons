import React from 'react';

export const iconData = {
  "id": "FundoClass",
  "name": "FundoClass",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.57 2.00 L 15.98 8.71 L 22.30 11.36 L 16.36 14.77 L 15.80 21.60 L 10.71 17.01 L 4.05 18.58 L 6.84 12.32 L 3.29 6.47 L 10.10 7.19 Z"
      }
    ]
  ]
};

export const FundoClass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.57 2.00 L 15.98 8.71 L 22.30 11.36 L 16.36 14.77 L 15.80 21.60 L 10.71 17.01 L 4.05 18.58 L 6.84 12.32 L 3.29 6.47 L 10.10 7.19 Z" />
      {children}
    </svg>
  );
});

export default FundoClass;
