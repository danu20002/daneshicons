import React from 'react';

export const iconData = {
  "id": "ZappinoLiner",
  "name": "ZappinoLiner",
  "category": "TA",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.36 5.32 C 5.43 7.29, 10.78 12.38, 16.91 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 2.01 2.63 C 9.84 14.42, 14.94 17.05, 21.62 21.27"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 3.92 C 15.89 5.16, 14.70 19.47, 18.21 16.70"
      }
    ]
  ]
};

export const ZappinoLiner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.36 5.32 C 5.43 7.29, 10.78 12.38, 16.91 16.79" />
      <path d="M 2.01 2.63 C 9.84 14.42, 14.94 17.05, 21.62 21.27" />
      <path d="M 5.74 3.92 C 15.89 5.16, 14.70 19.47, 18.21 16.70" />
      {children}
    </svg>
  );
});

export default ZappinoLiner;
