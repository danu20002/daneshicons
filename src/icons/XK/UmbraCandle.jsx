import React from 'react';

export const iconData = {
  "id": "UmbraCandle",
  "name": "UmbraCandle",
  "category": "XK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 5.07 C 4.94 10.41, 4.54 6.91, 20.69 20.79"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 9.96 C 12.97 7.22, 4.78 14.87, 21.43 17.88"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 2.62 C 13.46 9.88, 15.21 8.92, 14.69 14.24"
      }
    ]
  ]
};

export const UmbraCandle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 5.07 C 4.94 10.41, 4.54 6.91, 20.69 20.79" />
      <path d="M 6.32 9.96 C 12.97 7.22, 4.78 14.87, 21.43 17.88" />
      <path d="M 4.93 2.62 C 13.46 9.88, 15.21 8.92, 14.69 14.24" />
      {children}
    </svg>
  );
});

export default UmbraCandle;
