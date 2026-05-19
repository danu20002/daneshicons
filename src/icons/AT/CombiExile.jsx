import React from 'react';

export const iconData = {
  "id": "CombiExile",
  "name": "CombiExile",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 2.38 C 17.93 17.69, 13.33 17.64, 19.82 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.32 5.62 C 18.85 14.51, 14.14 8.92, 14.68 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 8.69 9.41 C 8.56 8.19, 15.16 9.92, 18.29 18.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.53 8.01 C 17.16 15.28, 17.15 6.50, 14.62 15.77"
      }
    ]
  ]
};

export const CombiExile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 2.38 C 17.93 17.69, 13.33 17.64, 19.82 19.87" />
      <path d="M 7.32 5.62 C 18.85 14.51, 14.14 8.92, 14.68 17.93" />
      <path d="M 8.69 9.41 C 8.56 8.19, 15.16 9.92, 18.29 18.87" />
      <path d="M 9.53 8.01 C 17.16 15.28, 17.15 6.50, 14.62 15.77" />
      {children}
    </svg>
  );
});

export default CombiExile;
