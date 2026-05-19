import React from 'react';

export const iconData = {
  "id": "VerboOmelet",
  "name": "VerboOmelet",
  "category": "LY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.32 9.08 3.73 3.05 Q 10.61 7.59 17.49 12.13 Q 19.15 12.58 20.81 13.03 Q 17.02 13.04 13.23 13.04 Q 16.72 16.27 20.21 19.50 Q 18.19 18.66 16.17 17.81 Q 12.59 15.99 9.01 14.16 Q 7.96 14.64 6.91 15.12 Z"
      }
    ]
  ]
};

export const VerboOmelet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.32 9.08 3.73 3.05 Q 10.61 7.59 17.49 12.13 Q 19.15 12.58 20.81 13.03 Q 17.02 13.04 13.23 13.04 Q 16.72 16.27 20.21 19.50 Q 18.19 18.66 16.17 17.81 Q 12.59 15.99 9.01 14.16 Q 7.96 14.64 6.91 15.12 Z" />
      {children}
    </svg>
  );
});

export default VerboOmelet;
