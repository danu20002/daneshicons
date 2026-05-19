import React from 'react';

export const iconData = {
  "id": "UmbroTimber",
  "name": "UmbroTimber",
  "category": "EP",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.59 4.04 L 6.87 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 4.76 13.08 L 4.12 15.84"
      }
    ],
    [
      "path",
      {
        "d": "M 9.68 15.88 C 3.82 15.47, 19.08 15.28, 18.68 10.86"
      }
    ],
    [
      "path",
      {
        "d": "M 10.62 2.29 L 13.61 9.21 L 5.74 11.84"
      }
    ]
  ]
};

export const UmbroTimber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.59 4.04 L 6.87 17.02" />
      <path d="M 4.76 13.08 L 4.12 15.84" />
      <path d="M 9.68 15.88 C 3.82 15.47, 19.08 15.28, 18.68 10.86" />
      <path d="M 10.62 2.29 L 13.61 9.21 L 5.74 11.84" />
      {children}
    </svg>
  );
});

export default UmbroTimber;
