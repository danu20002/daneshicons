import React from 'react';

export const iconData = {
  "id": "YummyWise",
  "name": "YummyWise",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.57 10.63 8.29 7.05 Q 10.12 7.59 11.96 8.14 Q 15.23 7.02 18.50 5.90 Q 19.57 9.33 20.64 12.75 Q 14.25 16.69 7.87 20.64 Q 6.36 17.42 4.85 14.21 Z"
      }
    ]
  ]
};

export const YummyWise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.57 10.63 8.29 7.05 Q 10.12 7.59 11.96 8.14 Q 15.23 7.02 18.50 5.90 Q 19.57 9.33 20.64 12.75 Q 14.25 16.69 7.87 20.64 Q 6.36 17.42 4.85 14.21 Z" />
      {children}
    </svg>
  );
});

export default YummyWise;
