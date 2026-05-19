import React from 'react';

export const iconData = {
  "id": "RigoStew",
  "name": "RigoStew",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.02 2.98 L 18.67 4.05 L 17.71 7.90 L 13.37 15.57 L 6.67 11.79 L 8.44 9.71 L 8.16 5.62"
      }
    ],
    [
      "path",
      {
        "d": "M 20.85 11.26 L 3.95 19.68 L 8.05 3.95 L 11.59 14.22 L 6.94 21.95 L 9.99 16.79 L 14.06 16.22 L 20.14 2.95"
      }
    ]
  ]
};

export const RigoStew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.02 2.98 L 18.67 4.05 L 17.71 7.90 L 13.37 15.57 L 6.67 11.79 L 8.44 9.71 L 8.16 5.62" />
      <path d="M 20.85 11.26 L 3.95 19.68 L 8.05 3.95 L 11.59 14.22 L 6.94 21.95 L 9.99 16.79 L 14.06 16.22 L 20.14 2.95" />
      {children}
    </svg>
  );
});

export default RigoStew;
