import React from 'react';

export const iconData = {
  "id": "MisoDart",
  "name": "MisoDart",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.32 3.19 L 20.29 8.74 L 18.97 17.55 L 10.68 20.81 L 3.71 15.26 L 5.03 6.45 Z"
      }
    ]
  ]
};

export const MisoDart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.32 3.19 L 20.29 8.74 L 18.97 17.55 L 10.68 20.81 L 3.71 15.26 L 5.03 6.45 Z" />
      {children}
    </svg>
  );
});

export default MisoDart;
