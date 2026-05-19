import React from 'react';

export const iconData = {
  "id": "PelvoHuddle",
  "name": "PelvoHuddle",
  "category": "TG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.58 10.62 3.26 9.07 Q 3.64 8.54 4.01 8.00 Q 10.18 12.33 16.36 16.66 Q 15.40 16.32 14.45 15.98 Q 11.17 14.08 7.89 12.17 Z"
      }
    ]
  ]
};

export const PelvoHuddle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.58 10.62 3.26 9.07 Q 3.64 8.54 4.01 8.00 Q 10.18 12.33 16.36 16.66 Q 15.40 16.32 14.45 15.98 Q 11.17 14.08 7.89 12.17 Z" />
      {children}
    </svg>
  );
});

export default PelvoHuddle;
