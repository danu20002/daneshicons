import React from 'react';

export const iconData = {
  "id": "ExtraMeet",
  "name": "ExtraMeet",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.31 9.49 4.81 4.31 Q 11.47 5.33 18.13 6.34 Q 18.91 8.53 19.69 10.72 Q 20.02 13.05 20.35 15.38 Q 20.04 16.01 19.73 16.64 Q 14.77 15.66 9.81 14.68 Z"
      }
    ]
  ]
};

export const ExtraMeet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.31 9.49 4.81 4.31 Q 11.47 5.33 18.13 6.34 Q 18.91 8.53 19.69 10.72 Q 20.02 13.05 20.35 15.38 Q 20.04 16.01 19.73 16.64 Q 14.77 15.66 9.81 14.68 Z" />
      {children}
    </svg>
  );
});

export default ExtraMeet;
