import React from 'react';

export const iconData = {
  "id": "TopoVein",
  "name": "TopoVein",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.22 12.56 L 16.12 20.27 L 6.90 19.71 L 2.78 11.44 L 7.88 3.73 L 17.10 4.29 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.74 14.97 L 12.30 18.46 L 6.56 15.49 L 6.26 9.03 L 11.70 5.54 L 17.44 8.51 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.71 14.13 L 11.51 15.42 L 8.79 13.28 L 9.29 9.87 L 12.49 8.58 L 15.21 10.72 Z"
      }
    ]
  ]
};

export const TopoVein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.22 12.56 L 16.12 20.27 L 6.90 19.71 L 2.78 11.44 L 7.88 3.73 L 17.10 4.29 Z" />
      <path d="M 17.74 14.97 L 12.30 18.46 L 6.56 15.49 L 6.26 9.03 L 11.70 5.54 L 17.44 8.51 Z" />
      <path d="M 14.71 14.13 L 11.51 15.42 L 8.79 13.28 L 9.29 9.87 L 12.49 8.58 L 15.21 10.72 Z" />
      {children}
    </svg>
  );
});

export default TopoVein;
