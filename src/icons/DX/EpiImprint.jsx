import React from 'react';

export const iconData = {
  "id": "EpiImprint",
  "name": "EpiImprint",
  "category": "DX",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.56 10.17 6.88 4.91 Q 8.00 5.90 9.11 6.89 Q 13.36 7.01 17.62 7.13 Q 18.93 11.28 20.25 15.44 Z"
      }
    ]
  ]
};

export const EpiImprint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.56 10.17 6.88 4.91 Q 8.00 5.90 9.11 6.89 Q 13.36 7.01 17.62 7.13 Q 18.93 11.28 20.25 15.44 Z" />
      {children}
    </svg>
  );
});

export default EpiImprint;
