import React from 'react';

export const iconData = {
  "id": "ZeroGrowth",
  "name": "ZeroGrowth",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.54 2.12 L 15.62 7.50 L 21.32 8.39 L 17.70 12.89 L 19.79 18.27 L 14.08 17.38 L 10.46 21.88 L 8.38 16.50 L 2.68 15.61 L 6.30 11.11 L 4.21 5.73 L 9.92 6.62 Z"
      }
    ]
  ]
};

export const ZeroGrowth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.54 2.12 L 15.62 7.50 L 21.32 8.39 L 17.70 12.89 L 19.79 18.27 L 14.08 17.38 L 10.46 21.88 L 8.38 16.50 L 2.68 15.61 L 6.30 11.11 L 4.21 5.73 L 9.92 6.62 Z" />
      {children}
    </svg>
  );
});

export default ZeroGrowth;
