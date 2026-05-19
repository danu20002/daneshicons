import React from 'react';

export const iconData = {
  "id": "ThalamoCushion",
  "name": "ThalamoCushion",
  "category": "XQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.88 15.58 8.69 11.75 Q 9.19 9.29 9.70 6.83 Q 13.18 6.40 16.67 5.98 Q 15.81 8.00 14.96 10.03 Q 14.26 12.81 13.56 15.60 Q 11.60 18.20 9.64 20.81 Q 9.67 18.43 9.71 16.05 Q 8.40 17.72 7.08 19.40 Z"
      }
    ]
  ]
};

export const ThalamoCushion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.88 15.58 8.69 11.75 Q 9.19 9.29 9.70 6.83 Q 13.18 6.40 16.67 5.98 Q 15.81 8.00 14.96 10.03 Q 14.26 12.81 13.56 15.60 Q 11.60 18.20 9.64 20.81 Q 9.67 18.43 9.71 16.05 Q 8.40 17.72 7.08 19.40 Z" />
      {children}
    </svg>
  );
});

export default ThalamoCushion;
