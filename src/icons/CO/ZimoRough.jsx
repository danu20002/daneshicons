import React from 'react';

export const iconData = {
  "id": "ZimoRough",
  "name": "ZimoRough",
  "category": "CO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.32 12.00 a 9.68 9.68 0 1 0 19.37 0 a 9.68 9.68 0 1 0 -19.37 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.87 8.77 a 9.13 2.7388033067711364 0 1 0 18.26 0 a 9.13 2.7388033067711364 0 1 0 -18.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.87 15.23 a 9.13 2.738803306771137 0 1 0 18.26 0 a 9.13 2.738803306771137 0 1 0 -18.26 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.32 A 2 2 0 0 0 12.00 21.68"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.32 A 2 2 0 0 1 12.00 21.68"
      }
    ]
  ]
};

export const ZimoRough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.32 12.00 a 9.68 9.68 0 1 0 19.37 0 a 9.68 9.68 0 1 0 -19.37 0" />
      <path d="M 2.87 8.77 a 9.13 2.7388033067711364 0 1 0 18.26 0 a 9.13 2.7388033067711364 0 1 0 -18.26 0" />
      <path d="M 2.87 15.23 a 9.13 2.738803306771137 0 1 0 18.26 0 a 9.13 2.738803306771137 0 1 0 -18.26 0" />
      <path d="M 12.00 2.32 A 2 2 0 0 0 12.00 21.68" />
      <path d="M 12.00 2.32 A 2 2 0 0 1 12.00 21.68" />
      {children}
    </svg>
  );
});

export default ZimoRough;
