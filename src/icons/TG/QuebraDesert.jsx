import React from 'react';

export const iconData = {
  "id": "QuebraDesert",
  "name": "QuebraDesert",
  "category": "TG",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.76 10.26 3.39 5.64 Q 7.43 4.85 11.46 4.07 Q 13.14 7.58 14.82 11.08 Q 15.96 10.86 17.11 10.64 Q 14.76 13.05 12.42 15.46 Q 9.28 15.17 6.14 14.88 Z"
      }
    ]
  ]
};

export const QuebraDesert = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.76 10.26 3.39 5.64 Q 7.43 4.85 11.46 4.07 Q 13.14 7.58 14.82 11.08 Q 15.96 10.86 17.11 10.64 Q 14.76 13.05 12.42 15.46 Q 9.28 15.17 6.14 14.88 Z" />
      {children}
    </svg>
  );
});

export default QuebraDesert;
