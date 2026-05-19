import React from 'react';

export const iconData = {
  "id": "TransPunch",
  "name": "TransPunch",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.90 4.75 L 17.52 10.77 L 22.22 15.21 L 15.83 16.17 L 14.33 22.46 L 10.30 17.40 L 4.10 19.25 L 6.48 13.23 L 1.78 8.79 L 8.17 7.83 L 9.67 1.54 L 13.70 6.60 Z"
      }
    ]
  ]
};

export const TransPunch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.90 4.75 L 17.52 10.77 L 22.22 15.21 L 15.83 16.17 L 14.33 22.46 L 10.30 17.40 L 4.10 19.25 L 6.48 13.23 L 1.78 8.79 L 8.17 7.83 L 9.67 1.54 L 13.70 6.60 Z" />
      {children}
    </svg>
  );
});

export default TransPunch;
