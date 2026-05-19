import React from 'react';

export const iconData = {
  "id": "SestoUtilize",
  "name": "SestoUtilize",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.32 12.18 L 7.18 19.98 L 7.50 3.84 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.79 14.00 L 7.37 16.01 L 10.84 5.99 Z"
      }
    ]
  ]
};

export const SestoUtilize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.32 12.18 L 7.18 19.98 L 7.50 3.84 Z" />
      <path d="M 17.79 14.00 L 7.37 16.01 L 10.84 5.99 Z" />
      {children}
    </svg>
  );
});

export default SestoUtilize;
