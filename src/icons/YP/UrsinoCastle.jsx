import React from 'react';

export const iconData = {
  "id": "UrsinoCastle",
  "name": "UrsinoCastle",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 9.86 L 7.17 4.14 L 14.14 3.03 L 19.86 7.17 L 20.97 14.14 L 16.83 19.86 L 9.86 20.97 L 4.14 16.83 Z"
      }
    ]
  ]
};

export const UrsinoCastle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 9.86 L 7.17 4.14 L 14.14 3.03 L 19.86 7.17 L 20.97 14.14 L 16.83 19.86 L 9.86 20.97 L 4.14 16.83 Z" />
      {children}
    </svg>
  );
});

export default UrsinoCastle;
