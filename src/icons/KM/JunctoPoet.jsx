import React from 'react';

export const iconData = {
  "id": "JunctoPoet",
  "name": "JunctoPoet",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.97 13.74 L 13.12 21.07 L 3.72 15.87 L 5.76 5.32 L 16.42 4.00 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 14.30 L 11.58 18.16 L 6.01 13.51 L 8.72 6.77 L 15.96 7.26 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.43 13.81 L 11.03 14.87 L 8.97 11.97 L 11.09 9.11 L 14.47 10.25 Z"
      }
    ]
  ]
};

export const JunctoPoet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.97 13.74 L 13.12 21.07 L 3.72 15.87 L 5.76 5.32 L 16.42 4.00 Z" />
      <path d="M 17.73 14.30 L 11.58 18.16 L 6.01 13.51 L 8.72 6.77 L 15.96 7.26 Z" />
      <path d="M 14.43 13.81 L 11.03 14.87 L 8.97 11.97 L 11.09 9.11 L 14.47 10.25 Z" />
      {children}
    </svg>
  );
});

export default JunctoPoet;
