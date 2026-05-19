import React from 'react';

export const iconData = {
  "id": "YeastHedge",
  "name": "YeastHedge",
  "category": "X",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.30 17.03 L 8.49 11.47 L 4.21 4.33 L 11.42 8.50 L 16.89 2.23 L 15.15 10.37 L 22.81 13.63 L 14.53 14.49 L 13.79 22.78 L 10.41 15.17 Z"
      }
    ]
  ]
};

export const YeastHedge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.30 17.03 L 8.49 11.47 L 4.21 4.33 L 11.42 8.50 L 16.89 2.23 L 15.15 10.37 L 22.81 13.63 L 14.53 14.49 L 13.79 22.78 L 10.41 15.17 Z" />
      {children}
    </svg>
  );
});

export default YeastHedge;
