import React from 'react';

export const iconData = {
  "id": "ZagroNotion",
  "name": "ZagroNotion",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.28 12.50 5.49 7.76 Q 7.16 7.25 8.83 6.75 Q 12.23 5.83 15.63 4.91 Q 16.73 4.52 17.83 4.13 Q 18.92 10.22 20.01 16.31 Q 18.76 16.83 17.51 17.36 Q 17.29 17.30 17.06 17.25 Z"
      }
    ]
  ]
};

export const ZagroNotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.28 12.50 5.49 7.76 Q 7.16 7.25 8.83 6.75 Q 12.23 5.83 15.63 4.91 Q 16.73 4.52 17.83 4.13 Q 18.92 10.22 20.01 16.31 Q 18.76 16.83 17.51 17.36 Q 17.29 17.30 17.06 17.25 Z" />
      {children}
    </svg>
  );
});

export default ZagroNotion;
