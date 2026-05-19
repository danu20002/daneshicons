import React from 'react';

export const iconData = {
  "id": "NumeroRash",
  "name": "NumeroRash",
  "category": "UI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.75 16.64 L 13.96 14.64 L 14.20 20.76 L 11.52 15.26 L 7.36 19.75 L 9.36 13.96 L 3.24 14.20 L 8.74 11.52 L 4.25 7.36 L 10.04 9.36 L 9.80 3.24 L 12.48 8.74 L 16.64 4.25 L 14.64 10.04 L 20.76 9.80 L 15.26 12.48 Z"
      }
    ]
  ]
};

export const NumeroRash = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.75 16.64 L 13.96 14.64 L 14.20 20.76 L 11.52 15.26 L 7.36 19.75 L 9.36 13.96 L 3.24 14.20 L 8.74 11.52 L 4.25 7.36 L 10.04 9.36 L 9.80 3.24 L 12.48 8.74 L 16.64 4.25 L 14.64 10.04 L 20.76 9.80 L 15.26 12.48 Z" />
      {children}
    </svg>
  );
});

export default NumeroRash;
