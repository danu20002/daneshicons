import React from 'react';

export const iconData = {
  "id": "YogaSeven",
  "name": "YogaSeven",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.28 11.26 6.96 9.13 Q 8.26 9.42 9.57 9.70 Q 13.05 7.39 16.53 5.08 Q 18.07 9.24 19.60 13.39 Z"
      }
    ]
  ]
};

export const YogaSeven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.28 11.26 6.96 9.13 Q 8.26 9.42 9.57 9.70 Q 13.05 7.39 16.53 5.08 Q 18.07 9.24 19.60 13.39 Z" />
      {children}
    </svg>
  );
});

export default YogaSeven;
