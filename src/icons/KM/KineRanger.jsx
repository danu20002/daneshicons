import React from 'react';

export const iconData = {
  "id": "KineRanger",
  "name": "KineRanger",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.96 12.03 6.45 3.79 Q 6.95 3.85 7.45 3.90 Q 9.84 3.71 12.24 3.52 Q 16.29 4.82 20.34 6.13 Q 20.63 8.91 20.91 11.69 Q 18.28 12.99 15.65 14.28 Q 17.56 17.27 19.47 20.26 Z"
      }
    ]
  ]
};

export const KineRanger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.96 12.03 6.45 3.79 Q 6.95 3.85 7.45 3.90 Q 9.84 3.71 12.24 3.52 Q 16.29 4.82 20.34 6.13 Q 20.63 8.91 20.91 11.69 Q 18.28 12.99 15.65 14.28 Q 17.56 17.27 19.47 20.26 Z" />
      {children}
    </svg>
  );
});

export default KineRanger;
