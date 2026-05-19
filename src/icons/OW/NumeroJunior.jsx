import React from 'react';

export const iconData = {
  "id": "NumeroJunior",
  "name": "NumeroJunior",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.64 11.53 12.59 6.48 Q 12.99 6.50 13.40 6.52 Q 14.63 4.87 15.86 3.22 Q 18.07 3.48 20.28 3.74 Q 19.94 7.73 19.59 11.71 Q 18.64 12.94 17.69 14.17 Q 14.12 16.76 10.55 19.35 Q 9.62 17.97 8.69 16.59 Z"
      }
    ]
  ]
};

export const NumeroJunior = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.64 11.53 12.59 6.48 Q 12.99 6.50 13.40 6.52 Q 14.63 4.87 15.86 3.22 Q 18.07 3.48 20.28 3.74 Q 19.94 7.73 19.59 11.71 Q 18.64 12.94 17.69 14.17 Q 14.12 16.76 10.55 19.35 Q 9.62 17.97 8.69 16.59 Z" />
      {children}
    </svg>
  );
});

export default NumeroJunior;
