import React from 'react';

export const iconData = {
  "id": "ThymoParliament",
  "name": "ThymoParliament",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.29 4.47 L 15.96 10.28 L 22.48 11.83 L 16.02 13.59 L 19.53 19.29 L 13.72 15.96 L 12.17 22.48 L 10.41 16.02 L 4.71 19.53 L 8.04 13.72 L 1.52 12.17 L 7.98 10.41 L 4.47 4.71 L 10.28 8.04 L 11.83 1.52 L 13.59 7.98 Z"
      }
    ]
  ]
};

export const ThymoParliament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.29 4.47 L 15.96 10.28 L 22.48 11.83 L 16.02 13.59 L 19.53 19.29 L 13.72 15.96 L 12.17 22.48 L 10.41 16.02 L 4.71 19.53 L 8.04 13.72 L 1.52 12.17 L 7.98 10.41 L 4.47 4.71 L 10.28 8.04 L 11.83 1.52 L 13.59 7.98 Z" />
      {children}
    </svg>
  );
});

export default ThymoParliament;
