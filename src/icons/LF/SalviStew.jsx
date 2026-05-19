import React from 'react';

export const iconData = {
  "id": "SalviStew",
  "name": "SalviStew",
  "category": "LF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.90 9.84 5.70 7.36 Q 10.05 8.56 14.39 9.75 Q 17.23 10.21 20.07 10.67 Q 20.43 11.78 20.80 12.89 Q 14.45 12.60 8.10 12.32 Z"
      }
    ]
  ]
};

export const SalviStew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.90 9.84 5.70 7.36 Q 10.05 8.56 14.39 9.75 Q 17.23 10.21 20.07 10.67 Q 20.43 11.78 20.80 12.89 Q 14.45 12.60 8.10 12.32 Z" />
      {children}
    </svg>
  );
});

export default SalviStew;
