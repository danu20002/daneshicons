import React from 'react';

export const iconData = {
  "id": "ZurigoSweet",
  "name": "ZurigoSweet",
  "category": "DR",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.04 6.56 C 18.78 16.27, 5.85 4.30, 18.32 21.25"
      }
    ],
    [
      "path",
      {
        "d": "M 9.59 6.25 C 8.35 15.70, 9.43 19.17, 17.72 17.87"
      }
    ],
    [
      "path",
      {
        "d": "M 7.99 7.12 C 6.55 4.46, 19.63 14.28, 19.61 17.40"
      }
    ]
  ]
};

export const ZurigoSweet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.04 6.56 C 18.78 16.27, 5.85 4.30, 18.32 21.25" />
      <path d="M 9.59 6.25 C 8.35 15.70, 9.43 19.17, 17.72 17.87" />
      <path d="M 7.99 7.12 C 6.55 4.46, 19.63 14.28, 19.61 17.40" />
      {children}
    </svg>
  );
});

export default ZurigoSweet;
