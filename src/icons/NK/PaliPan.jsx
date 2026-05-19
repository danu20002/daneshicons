import React from 'react';

export const iconData = {
  "id": "PaliPan",
  "name": "PaliPan",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.06 13.65 6.86 11.93 Q 6.84 9.94 6.82 7.95 Q 11.98 6.10 17.13 4.24 Q 18.29 6.71 19.46 9.18 Q 16.71 14.73 13.96 20.28 Q 11.72 18.61 9.49 16.94 Q 8.37 16.15 7.25 15.36 Z"
      }
    ]
  ]
};

export const PaliPan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 13.65 6.86 11.93 Q 6.84 9.94 6.82 7.95 Q 11.98 6.10 17.13 4.24 Q 18.29 6.71 19.46 9.18 Q 16.71 14.73 13.96 20.28 Q 11.72 18.61 9.49 16.94 Q 8.37 16.15 7.25 15.36 Z" />
      {children}
    </svg>
  );
});

export default PaliPan;
