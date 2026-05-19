import React from 'react';

export const iconData = {
  "id": "VerlenSoothe",
  "name": "VerlenSoothe",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.03 4.37 L 14.86 3.36 L 20.54 8.85 L 19.79 16.71 L 13.17 21.03 L 5.67 18.54 L 2.94 11.13 Z"
      }
    ]
  ]
};

export const VerlenSoothe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.03 4.37 L 14.86 3.36 L 20.54 8.85 L 19.79 16.71 L 13.17 21.03 L 5.67 18.54 L 2.94 11.13 Z" />
      {children}
    </svg>
  );
});

export default VerlenSoothe;
