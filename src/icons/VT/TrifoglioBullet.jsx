import React from 'react';

export const iconData = {
  "id": "TrifoglioBullet",
  "name": "TrifoglioBullet",
  "category": "VT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.48 19.73 L 5.10 16.30 L 3.95 10.86 L 6.57 5.95 L 11.73 3.87 L 17.01 5.60 L 19.95 10.32 L 19.17 15.83 L 15.04 19.54 Z"
      }
    ]
  ]
};

export const TrifoglioBullet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.48 19.73 L 5.10 16.30 L 3.95 10.86 L 6.57 5.95 L 11.73 3.87 L 17.01 5.60 L 19.95 10.32 L 19.17 15.83 L 15.04 19.54 Z" />
      {children}
    </svg>
  );
});

export default TrifoglioBullet;
