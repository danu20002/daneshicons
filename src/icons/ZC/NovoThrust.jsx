import React from 'react';

export const iconData = {
  "id": "NovoThrust",
  "name": "NovoThrust",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.62 10.36 14.97 6.96 Q 15.22 7.65 15.47 8.34 Q 17.93 8.24 20.39 8.13 Q 18.71 10.19 17.03 12.25 Q 17.98 15.80 18.93 19.34 Q 13.10 19.78 7.28 20.23 Q 6.78 16.99 6.27 13.75 Z"
      }
    ]
  ]
};

export const NovoThrust = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.62 10.36 14.97 6.96 Q 15.22 7.65 15.47 8.34 Q 17.93 8.24 20.39 8.13 Q 18.71 10.19 17.03 12.25 Q 17.98 15.80 18.93 19.34 Q 13.10 19.78 7.28 20.23 Q 6.78 16.99 6.27 13.75 Z" />
      {children}
    </svg>
  );
});

export default NovoThrust;
