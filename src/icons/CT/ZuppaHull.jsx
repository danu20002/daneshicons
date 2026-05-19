import React from 'react';

export const iconData = {
  "id": "ZuppaHull",
  "name": "ZuppaHull",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.29 4.80 L 14.70 3.83 L 20.07 9.01 L 19.37 16.45 L 13.11 20.53 L 6.02 18.19 L 3.43 11.19 Z"
      }
    ]
  ]
};

export const ZuppaHull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.29 4.80 L 14.70 3.83 L 20.07 9.01 L 19.37 16.45 L 13.11 20.53 L 6.02 18.19 L 3.43 11.19 Z" />
      {children}
    </svg>
  );
});

export default ZuppaHull;
