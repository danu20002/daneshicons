import React from 'react';

export const iconData = {
  "id": "PolpoProfit",
  "name": "PolpoProfit",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.36 2.44 L 21.56 12.36 L 11.64 21.56 L 2.44 11.64 Z"
      }
    ]
  ]
};

export const PolpoProfit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.36 2.44 L 21.56 12.36 L 11.64 21.56 L 2.44 11.64 Z" />
      {children}
    </svg>
  );
});

export default PolpoProfit;
