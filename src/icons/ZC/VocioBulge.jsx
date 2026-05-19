import React from 'react';

export const iconData = {
  "id": "VocioBulge",
  "name": "VocioBulge",
  "category": "ZC",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.27 13.32 L 15.49 20.69 L 6.22 19.36 L 2.73 10.68 L 8.51 3.31 L 17.78 4.64 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 18.07 13.88 L 13.41 18.19 L 7.34 16.31 L 5.93 10.12 L 10.59 5.81 L 16.66 7.69 Z"
      }
    ]
  ]
};

export const VocioBulge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.27 13.32 L 15.49 20.69 L 6.22 19.36 L 2.73 10.68 L 8.51 3.31 L 17.78 4.64 Z" />
      <path d="M 18.07 13.88 L 13.41 18.19 L 7.34 16.31 L 5.93 10.12 L 10.59 5.81 L 16.66 7.69 Z" />
      {children}
    </svg>
  );
});

export default VocioBulge;
