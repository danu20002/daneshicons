import React from 'react';

export const iconData = {
  "id": "YummyPool",
  "name": "YummyPool",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.98 4.85 C 12.77 7.33, 7.76 15.45, 19.37 19.91"
      }
    ],
    [
      "path",
      {
        "d": "M 2.82 7.15 C 19.27 16.17, 5.90 6.84, 15.10 14.15"
      }
    ],
    [
      "path",
      {
        "d": "M 2.09 9.97 C 10.73 14.63, 6.56 4.77, 21.97 16.09"
      }
    ],
    [
      "path",
      {
        "d": "M 7.63 8.41 C 14.56 7.89, 11.96 18.32, 20.24 18.14"
      }
    ]
  ]
};

export const YummyPool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.98 4.85 C 12.77 7.33, 7.76 15.45, 19.37 19.91" />
      <path d="M 2.82 7.15 C 19.27 16.17, 5.90 6.84, 15.10 14.15" />
      <path d="M 2.09 9.97 C 10.73 14.63, 6.56 4.77, 21.97 16.09" />
      <path d="M 7.63 8.41 C 14.56 7.89, 11.96 18.32, 20.24 18.14" />
      {children}
    </svg>
  );
});

export default YummyPool;
