import React from 'react';

export const iconData = {
  "id": "ErgoCollar",
  "name": "ErgoCollar",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.22 5.00 L 16.14 11.68 L 21.20 17.66 L 13.58 15.83 L 9.46 22.50 L 8.84 14.69 L 1.23 12.83 L 8.47 9.83 L 7.89 2.02 L 12.98 7.97 Z"
      }
    ]
  ]
};

export const ErgoCollar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.22 5.00 L 16.14 11.68 L 21.20 17.66 L 13.58 15.83 L 9.46 22.50 L 8.84 14.69 L 1.23 12.83 L 8.47 9.83 L 7.89 2.02 L 12.98 7.97 Z" />
      {children}
    </svg>
  );
});

export default ErgoCollar;
