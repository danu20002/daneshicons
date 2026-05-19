import React from 'react';

export const iconData = {
  "id": "OsmoMile",
  "name": "OsmoMile",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.41 18.68 L 4.03 13.48 L 5.32 7.41 L 10.52 4.03 L 16.59 5.32 L 19.97 10.52 L 18.68 16.59 L 13.48 19.97 Z"
      }
    ]
  ]
};

export const OsmoMile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.41 18.68 L 4.03 13.48 L 5.32 7.41 L 10.52 4.03 L 16.59 5.32 L 19.97 10.52 L 18.68 16.59 L 13.48 19.97 Z" />
      {children}
    </svg>
  );
});

export default OsmoMile;
