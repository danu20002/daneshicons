import React from 'react';

export const iconData = {
  "id": "ViticcioError",
  "name": "ViticcioError",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.85 12.44 10.25 11.95 Q 7.29 10.11 4.33 8.27 Q 7.79 7.71 11.25 7.15 Q 12.85 11.73 14.44 16.32 Q 14.73 17.83 15.02 19.35 Q 13.66 19.13 12.30 18.92 Q 9.88 15.93 7.46 12.94 Z"
      }
    ]
  ]
};

export const ViticcioError = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.85 12.44 10.25 11.95 Q 7.29 10.11 4.33 8.27 Q 7.79 7.71 11.25 7.15 Q 12.85 11.73 14.44 16.32 Q 14.73 17.83 15.02 19.35 Q 13.66 19.13 12.30 18.92 Q 9.88 15.93 7.46 12.94 Z" />
      {children}
    </svg>
  );
});

export default ViticcioError;
