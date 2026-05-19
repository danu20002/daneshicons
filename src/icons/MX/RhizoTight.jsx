import React from 'react';

export const iconData = {
  "id": "RhizoTight",
  "name": "RhizoTight",
  "category": "MX",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.83 17.71 L 10.47 20.77 L 3.64 15.06 L 5.17 6.29 L 13.53 3.23 L 20.36 8.94 Z"
      }
    ]
  ]
};

export const RhizoTight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.83 17.71 L 10.47 20.77 L 3.64 15.06 L 5.17 6.29 L 13.53 3.23 L 20.36 8.94 Z" />
      {children}
    </svg>
  );
});

export default RhizoTight;
