import React from 'react';

export const iconData = {
  "id": "YachtMesh",
  "name": "YachtMesh",
  "category": "YJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.17 11.50 5.53 9.76 Q 4.96 8.84 4.40 7.92 Q 9.88 5.67 15.36 3.41 Q 16.54 9.41 17.73 15.41 Q 18.75 16.80 19.77 18.20 Q 14.29 15.72 8.81 13.24 Z"
      }
    ]
  ]
};

export const YachtMesh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.17 11.50 5.53 9.76 Q 4.96 8.84 4.40 7.92 Q 9.88 5.67 15.36 3.41 Q 16.54 9.41 17.73 15.41 Q 18.75 16.80 19.77 18.20 Q 14.29 15.72 8.81 13.24 Z" />
      {children}
    </svg>
  );
});

export default YachtMesh;
