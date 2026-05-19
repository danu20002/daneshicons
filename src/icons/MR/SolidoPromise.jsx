import React from 'react';

export const iconData = {
  "id": "SolidoPromise",
  "name": "SolidoPromise",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.59 14.62 4.47 11.59 Q 10.65 10.00 16.83 8.42 Q 15.44 13.33 14.05 18.24 Q 13.29 18.17 12.53 18.09 Q 11.62 17.88 10.71 17.66 Z"
      }
    ]
  ]
};

export const SolidoPromise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.59 14.62 4.47 11.59 Q 10.65 10.00 16.83 8.42 Q 15.44 13.33 14.05 18.24 Q 13.29 18.17 12.53 18.09 Q 11.62 17.88 10.71 17.66 Z" />
      {children}
    </svg>
  );
});

export default SolidoPromise;
