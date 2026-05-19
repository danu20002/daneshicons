import React from 'react';

export const iconData = {
  "id": "FundoToast",
  "name": "FundoToast",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.04 17.80 L 10.50 20.99 L 3.46 15.20 L 4.96 6.20 L 13.50 3.01 L 20.54 8.80 Z"
      }
    ]
  ]
};

export const FundoToast = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.04 17.80 L 10.50 20.99 L 3.46 15.20 L 4.96 6.20 L 13.50 3.01 L 20.54 8.80 Z" />
      {children}
    </svg>
  );
});

export default FundoToast;
