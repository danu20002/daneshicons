import React from 'react';

export const iconData = {
  "id": "ZeroPear",
  "name": "ZeroPear",
  "category": "WN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.66 10.90 L 9.72 9.11 L 13.10 2.66 L 14.89 9.72 L 21.34 13.10 L 14.28 14.89 L 10.90 21.34 L 9.11 14.28 Z"
      }
    ]
  ]
};

export const ZeroPear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.66 10.90 L 9.72 9.11 L 13.10 2.66 L 14.89 9.72 L 21.34 13.10 L 14.28 14.89 L 10.90 21.34 L 9.11 14.28 Z" />
      {children}
    </svg>
  );
});

export default ZeroPear;
