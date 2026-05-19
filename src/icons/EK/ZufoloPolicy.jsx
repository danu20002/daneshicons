import React from 'react';

export const iconData = {
  "id": "ZufoloPolicy",
  "name": "ZufoloPolicy",
  "category": "EK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.08 2.70 C 14.53 10.17, 11.92 5.31, 17.13 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 2.94 7.33 C 12.69 11.02, 6.02 7.82, 15.39 14.52"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 9.07 C 16.13 8.78, 17.56 6.55, 17.26 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.71 2.83 C 12.41 19.83, 10.22 7.05, 18.07 16.21"
      }
    ],
    [
      "path",
      {
        "d": "M 9.88 8.60 C 7.74 19.38, 12.94 4.53, 14.58 19.00"
      }
    ]
  ]
};

export const ZufoloPolicy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.08 2.70 C 14.53 10.17, 11.92 5.31, 17.13 14.65" />
      <path d="M 2.94 7.33 C 12.69 11.02, 6.02 7.82, 15.39 14.52" />
      <path d="M 5.09 9.07 C 16.13 8.78, 17.56 6.55, 17.26 17.45" />
      <path d="M 6.71 2.83 C 12.41 19.83, 10.22 7.05, 18.07 16.21" />
      <path d="M 9.88 8.60 C 7.74 19.38, 12.94 4.53, 14.58 19.00" />
      {children}
    </svg>
  );
});

export default ZufoloPolicy;
