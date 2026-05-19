import React from 'react';

export const iconData = {
  "id": "SestoFirst",
  "name": "SestoFirst",
  "category": "UM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.79 7.04 C 13.99 11.36, 17.89 10.13, 14.53 19.42"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 4.11 C 17.46 6.50, 7.14 4.11, 20.26 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 4.89 3.73 C 9.98 12.86, 11.90 7.92, 15.82 15.64"
      }
    ]
  ]
};

export const SestoFirst = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.79 7.04 C 13.99 11.36, 17.89 10.13, 14.53 19.42" />
      <path d="M 7.07 4.11 C 17.46 6.50, 7.14 4.11, 20.26 20.45" />
      <path d="M 4.89 3.73 C 9.98 12.86, 11.90 7.92, 15.82 15.64" />
      {children}
    </svg>
  );
});

export default SestoFirst;
