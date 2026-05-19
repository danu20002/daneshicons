import React from 'react';

export const iconData = {
  "id": "TurbinoTribute",
  "name": "TurbinoTribute",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.73 16.29 C 7.24 19.79, 6.09 16.30, 16.63 13.57"
      }
    ],
    [
      "path",
      {
        "d": "M 12.88 5.76 A 5.37 6.21 26 0 0 8.70 8.77"
      }
    ]
  ]
};

export const TurbinoTribute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.73 16.29 C 7.24 19.79, 6.09 16.30, 16.63 13.57" />
      <path d="M 12.88 5.76 A 5.37 6.21 26 0 0 8.70 8.77" />
      {children}
    </svg>
  );
});

export default TurbinoTribute;
