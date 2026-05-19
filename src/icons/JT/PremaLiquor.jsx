import React from 'react';

export const iconData = {
  "id": "PremaLiquor",
  "name": "PremaLiquor",
  "category": "JT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.48 11.29 14.79 5.16 Q 16.33 5.52 17.87 5.88 Q 18.23 6.49 18.59 7.10 Q 15.92 9.47 13.26 11.85 Q 13.74 12.82 14.22 13.79 Q 16.42 16.29 18.62 18.79 Q 17.91 19.41 17.19 20.04 Q 10.68 18.73 4.17 17.42 Z"
      }
    ]
  ]
};

export const PremaLiquor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.48 11.29 14.79 5.16 Q 16.33 5.52 17.87 5.88 Q 18.23 6.49 18.59 7.10 Q 15.92 9.47 13.26 11.85 Q 13.74 12.82 14.22 13.79 Q 16.42 16.29 18.62 18.79 Q 17.91 19.41 17.19 20.04 Q 10.68 18.73 4.17 17.42 Z" />
      {children}
    </svg>
  );
});

export default PremaLiquor;
