import React from 'react';

export const iconData = {
  "id": "VelociSteam",
  "name": "VelociSteam",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.29 8.42 5.74 9.75 Q 6.31 8.17 6.88 6.60 Q 9.28 9.03 11.67 11.46 Q 11.44 9.25 11.22 7.04 Q 13.82 6.61 16.42 6.19 Q 16.30 6.42 16.19 6.64 Q 17.50 6.71 18.80 6.78 Q 18.82 6.93 18.84 7.08 Z"
      }
    ]
  ]
};

export const VelociSteam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.29 8.42 5.74 9.75 Q 6.31 8.17 6.88 6.60 Q 9.28 9.03 11.67 11.46 Q 11.44 9.25 11.22 7.04 Q 13.82 6.61 16.42 6.19 Q 16.30 6.42 16.19 6.64 Q 17.50 6.71 18.80 6.78 Q 18.82 6.93 18.84 7.08 Z" />
      {children}
    </svg>
  );
});

export default VelociSteam;
