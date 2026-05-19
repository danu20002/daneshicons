import React from 'react';

export const iconData = {
  "id": "SoroNavel",
  "name": "SoroNavel",
  "category": "BS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.59 15.26 9.74 11.90 Q 9.58 10.96 9.42 10.01 Q 12.29 7.16 15.15 4.32 Q 14.52 6.99 13.89 9.67 Q 14.29 15.22 14.70 20.77 Q 13.08 19.70 11.45 18.63 Z"
      }
    ]
  ]
};

export const SoroNavel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.59 15.26 9.74 11.90 Q 9.58 10.96 9.42 10.01 Q 12.29 7.16 15.15 4.32 Q 14.52 6.99 13.89 9.67 Q 14.29 15.22 14.70 20.77 Q 13.08 19.70 11.45 18.63 Z" />
      {children}
    </svg>
  );
});

export default SoroNavel;
