import React from 'react';

export const iconData = {
  "id": "CaeloBelt",
  "name": "CaeloBelt",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.46 2.70 L 15.47 10.48 L 22.53 14.32 L 14.51 14.84 L 13.05 22.73 L 10.08 15.27 L 2.12 16.31 L 8.30 11.18 L 4.84 3.93 L 11.63 8.23 Z"
      }
    ]
  ]
};

export const CaeloBelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.46 2.70 L 15.47 10.48 L 22.53 14.32 L 14.51 14.84 L 13.05 22.73 L 10.08 15.27 L 2.12 16.31 L 8.30 11.18 L 4.84 3.93 L 11.63 8.23 Z" />
      {children}
    </svg>
  );
});

export default CaeloBelt;
