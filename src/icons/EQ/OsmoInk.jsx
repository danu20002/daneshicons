import React from 'react';

export const iconData = {
  "id": "OsmoInk",
  "name": "OsmoInk",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.37 14.73 7.44 10.92 Q 7.43 10.09 7.43 9.26 Q 8.95 6.75 10.46 4.24 Q 12.30 8.69 14.14 13.14 Q 13.02 13.76 11.90 14.39 Q 10.61 16.47 9.31 18.54 Z"
      }
    ]
  ]
};

export const OsmoInk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.37 14.73 7.44 10.92 Q 7.43 10.09 7.43 9.26 Q 8.95 6.75 10.46 4.24 Q 12.30 8.69 14.14 13.14 Q 13.02 13.76 11.90 14.39 Q 10.61 16.47 9.31 18.54 Z" />
      {children}
    </svg>
  );
});

export default OsmoInk;
