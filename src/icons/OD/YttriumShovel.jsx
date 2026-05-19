import React from 'react';

export const iconData = {
  "id": "YttriumShovel",
  "name": "YttriumShovel",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.62 14.08 15.31 13.43 Q 17.20 16.68 19.09 19.92 Q 11.88 19.10 4.67 18.28 Q 5.60 17.25 6.54 16.23 Q 5.23 15.48 3.93 14.73 Z"
      }
    ]
  ]
};

export const YttriumShovel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.62 14.08 15.31 13.43 Q 17.20 16.68 19.09 19.92 Q 11.88 19.10 4.67 18.28 Q 5.60 17.25 6.54 16.23 Q 5.23 15.48 3.93 14.73 Z" />
      {children}
    </svg>
  );
});

export default YttriumShovel;
