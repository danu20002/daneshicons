import React from 'react';

export const iconData = {
  "id": "OlivoScarf",
  "name": "OlivoScarf",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.35 5.39 L 9.82 6.98 L 12.40 1.89 L 14.57 7.17 L 20.15 6.01 L 17.38 10.99 L 21.76 14.64 L 16.14 15.58 L 16.02 21.28 L 11.78 17.47 L 7.26 20.93 L 7.59 15.24 L 2.06 13.86 L 6.72 10.57 Z"
      }
    ]
  ]
};

export const OlivoScarf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.35 5.39 L 9.82 6.98 L 12.40 1.89 L 14.57 7.17 L 20.15 6.01 L 17.38 10.99 L 21.76 14.64 L 16.14 15.58 L 16.02 21.28 L 11.78 17.47 L 7.26 20.93 L 7.59 15.24 L 2.06 13.86 L 6.72 10.57 Z" />
      {children}
    </svg>
  );
});

export default OlivoScarf;
