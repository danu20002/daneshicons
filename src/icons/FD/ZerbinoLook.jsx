import React from 'react';

export const iconData = {
  "id": "ZerbinoLook",
  "name": "ZerbinoLook",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.06 3.54 C 16.77 5.67, 11.14 17.57, 18.44 21.83"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 8.79 C 8.03 18.58, 11.14 4.61, 17.44 15.83"
      }
    ],
    [
      "path",
      {
        "d": "M 8.77 6.22 C 8.79 10.55, 7.60 19.22, 14.28 17.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.47 4.99 C 7.98 4.90, 13.51 17.83, 21.47 20.55"
      }
    ],
    [
      "path",
      {
        "d": "M 6.45 4.78 C 8.87 7.98, 18.26 11.26, 17.01 19.24"
      }
    ]
  ]
};

export const ZerbinoLook = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 3.54 C 16.77 5.67, 11.14 17.57, 18.44 21.83" />
      <path d="M 3.03 8.79 C 8.03 18.58, 11.14 4.61, 17.44 15.83" />
      <path d="M 8.77 6.22 C 8.79 10.55, 7.60 19.22, 14.28 17.46" />
      <path d="M 4.47 4.99 C 7.98 4.90, 13.51 17.83, 21.47 20.55" />
      <path d="M 6.45 4.78 C 8.87 7.98, 18.26 11.26, 17.01 19.24" />
      {children}
    </svg>
  );
});

export default ZerbinoLook;
