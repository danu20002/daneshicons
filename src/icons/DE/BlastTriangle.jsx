import React from 'react';

export const iconData = {
  "id": "BlastTriangle",
  "name": "BlastTriangle",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.64 11.28 12.83 4.82 Q 13.34 6.98 13.84 9.14 Q 14.72 7.89 15.60 6.63 Q 17.93 7.29 20.26 7.94 Q 18.27 10.58 16.27 13.22 Q 18.42 15.77 20.56 18.32 Q 16.68 19.34 12.79 20.37 Q 12.62 19.05 12.46 17.73 Z"
      }
    ]
  ]
};

export const BlastTriangle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.64 11.28 12.83 4.82 Q 13.34 6.98 13.84 9.14 Q 14.72 7.89 15.60 6.63 Q 17.93 7.29 20.26 7.94 Q 18.27 10.58 16.27 13.22 Q 18.42 15.77 20.56 18.32 Q 16.68 19.34 12.79 20.37 Q 12.62 19.05 12.46 17.73 Z" />
      {children}
    </svg>
  );
});

export default BlastTriangle;
