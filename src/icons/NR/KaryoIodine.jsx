import React from 'react';

export const iconData = {
  "id": "KaryoIodine",
  "name": "KaryoIodine",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.81 21.21 L 2.93 14.71 L 5.12 5.50 L 14.19 2.79 L 21.07 9.29 L 18.88 18.50 Z"
      }
    ]
  ]
};

export const KaryoIodine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.81 21.21 L 2.93 14.71 L 5.12 5.50 L 14.19 2.79 L 21.07 9.29 L 18.88 18.50 Z" />
      {children}
    </svg>
  );
});

export default KaryoIodine;
