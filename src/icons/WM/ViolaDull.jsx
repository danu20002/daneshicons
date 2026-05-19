import React from 'react';

export const iconData = {
  "id": "ViolaDull",
  "name": "ViolaDull",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.01 18.70 L 3.73 13.21 L 5.30 7.01 L 10.79 3.73 L 16.99 5.30 L 20.27 10.79 L 18.70 16.99 L 13.21 20.27 Z"
      }
    ]
  ]
};

export const ViolaDull = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.01 18.70 L 3.73 13.21 L 5.30 7.01 L 10.79 3.73 L 16.99 5.30 L 20.27 10.79 L 18.70 16.99 L 13.21 20.27 Z" />
      {children}
    </svg>
  );
});

export default ViolaDull;
