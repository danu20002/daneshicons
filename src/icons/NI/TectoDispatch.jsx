import React from 'react';

export const iconData = {
  "id": "TectoDispatch",
  "name": "TectoDispatch",
  "category": "NI",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.02 7.07 L 14.02 7.07"
      }
    ],
    [
      "path",
      {
        "d": "M 17.26 12.75 L 15.26 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.72 16.18 L 6.72 12.72"
      }
    ]
  ]
};

export const TectoDispatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.02 7.07 L 14.02 7.07" />
      <path d="M 17.26 12.75 L 15.26 16.21" />
      <path d="M 8.72 16.18 L 6.72 12.72" />
      {children}
    </svg>
  );
});

export default TectoDispatch;
