import React from 'react';

export const iconData = {
  "id": "LithoTorque",
  "name": "LithoTorque",
  "category": "QI",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.39 13.69 10.28 10.15 Q 10.12 9.43 9.96 8.72 Q 10.73 9.71 11.51 10.70 Q 12.76 9.58 14.01 8.45 Q 16.60 6.75 19.20 5.05 Q 17.65 13.01 16.11 20.96 Q 10.98 20.40 5.86 19.85 Q 5.18 18.54 4.50 17.24 Z"
      }
    ]
  ]
};

export const LithoTorque = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.39 13.69 10.28 10.15 Q 10.12 9.43 9.96 8.72 Q 10.73 9.71 11.51 10.70 Q 12.76 9.58 14.01 8.45 Q 16.60 6.75 19.20 5.05 Q 17.65 13.01 16.11 20.96 Q 10.98 20.40 5.86 19.85 Q 5.18 18.54 4.50 17.24 Z" />
      {children}
    </svg>
  );
});

export default LithoTorque;
