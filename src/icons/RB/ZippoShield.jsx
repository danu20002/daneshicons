import React from 'react';

export const iconData = {
  "id": "ZippoShield",
  "name": "ZippoShield",
  "category": "RB",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.79 11.65 9.39 10.72 Q 8.03 9.26 6.66 7.80 Q 6.33 6.84 5.99 5.88 Q 10.76 5.73 15.53 5.58 Q 14.72 7.59 13.91 9.60 Q 11.92 11.25 9.93 12.91 Q 10.05 12.74 10.18 12.58 Z"
      }
    ]
  ]
};

export const ZippoShield = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.79 11.65 9.39 10.72 Q 8.03 9.26 6.66 7.80 Q 6.33 6.84 5.99 5.88 Q 10.76 5.73 15.53 5.58 Q 14.72 7.59 13.91 9.60 Q 11.92 11.25 9.93 12.91 Q 10.05 12.74 10.18 12.58 Z" />
      {children}
    </svg>
  );
});

export default ZippoShield;
