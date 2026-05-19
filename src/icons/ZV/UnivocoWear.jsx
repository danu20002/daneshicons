import React from 'react';

export const iconData = {
  "id": "UnivocoWear",
  "name": "UnivocoWear",
  "category": "ZV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.37 11.43 8.39 4.26 Q 8.74 4.92 9.08 5.59 Q 10.79 4.86 12.50 4.13 Q 12.89 4.79 13.29 5.45 Q 15.24 12.34 17.19 19.24 Q 15.38 19.45 13.56 19.66 Q 11.95 19.13 10.35 18.60 Z"
      }
    ]
  ]
};

export const UnivocoWear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.37 11.43 8.39 4.26 Q 8.74 4.92 9.08 5.59 Q 10.79 4.86 12.50 4.13 Q 12.89 4.79 13.29 5.45 Q 15.24 12.34 17.19 19.24 Q 15.38 19.45 13.56 19.66 Q 11.95 19.13 10.35 18.60 Z" />
      {children}
    </svg>
  );
});

export default UnivocoWear;
