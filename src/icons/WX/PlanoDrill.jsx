import React from 'react';

export const iconData = {
  "id": "PlanoDrill",
  "name": "PlanoDrill",
  "category": "WX",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.27 10.35 9.71 6.34 Q 9.89 5.18 10.08 4.01 Q 10.58 5.94 11.08 7.87 Q 13.03 6.03 14.99 4.20 Q 16.57 11.54 18.15 18.89 Q 17.87 19.02 17.59 19.16 Q 15.03 18.32 12.48 17.48 Q 9.66 15.92 6.83 14.35 Z"
      }
    ]
  ]
};

export const PlanoDrill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.27 10.35 9.71 6.34 Q 9.89 5.18 10.08 4.01 Q 10.58 5.94 11.08 7.87 Q 13.03 6.03 14.99 4.20 Q 16.57 11.54 18.15 18.89 Q 17.87 19.02 17.59 19.16 Q 15.03 18.32 12.48 17.48 Q 9.66 15.92 6.83 14.35 Z" />
      {children}
    </svg>
  );
});

export default PlanoDrill;
