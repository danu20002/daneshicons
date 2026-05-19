import React from 'react';

export const iconData = {
  "id": "VietatoMint",
  "name": "VietatoMint",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.25 7.48 C 4.32 10.87, 12.50 8.26, 21.83 18.96"
      }
    ],
    [
      "path",
      {
        "d": "M 8.16 4.14 C 11.49 6.71, 15.55 14.16, 14.22 21.42"
      }
    ],
    [
      "path",
      {
        "d": "M 2.93 2.57 C 9.80 18.90, 19.55 9.01, 21.37 18.45"
      }
    ],
    [
      "path",
      {
        "d": "M 9.37 6.70 C 14.35 4.38, 10.28 9.03, 19.74 17.70"
      }
    ],
    [
      "path",
      {
        "d": "M 7.91 9.50 C 7.40 9.63, 12.43 10.73, 21.41 21.06"
      }
    ]
  ]
};

export const VietatoMint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.25 7.48 C 4.32 10.87, 12.50 8.26, 21.83 18.96" />
      <path d="M 8.16 4.14 C 11.49 6.71, 15.55 14.16, 14.22 21.42" />
      <path d="M 2.93 2.57 C 9.80 18.90, 19.55 9.01, 21.37 18.45" />
      <path d="M 9.37 6.70 C 14.35 4.38, 10.28 9.03, 19.74 17.70" />
      <path d="M 7.91 9.50 C 7.40 9.63, 12.43 10.73, 21.41 21.06" />
      {children}
    </svg>
  );
});

export default VietatoMint;
