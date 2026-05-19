import React from 'react';

export const iconData = {
  "id": "NomoOlive",
  "name": "NomoOlive",
  "category": "DE",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.24 15.47 8.54 11.17 Q 10.00 11.11 11.46 11.04 Q 15.66 7.16 19.86 3.28 Q 18.99 5.30 18.13 7.32 Q 15.03 13.54 11.94 19.77 Z"
      }
    ]
  ]
};

export const NomoOlive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.24 15.47 8.54 11.17 Q 10.00 11.11 11.46 11.04 Q 15.66 7.16 19.86 3.28 Q 18.99 5.30 18.13 7.32 Q 15.03 13.54 11.94 19.77 Z" />
      {children}
    </svg>
  );
});

export default NomoOlive;
