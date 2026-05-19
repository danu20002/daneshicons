import React from 'react';

export const iconData = {
  "id": "UrsinoSnob",
  "name": "UrsinoSnob",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.16 20.85 A 5.79 3.40 32 0 0 6.16 4.25"
      }
    ],
    [
      "path",
      {
        "d": "M 8.42 7.67 Q 18.97 20.51 5.92 18.50"
      }
    ],
    [
      "path",
      {
        "d": "M 13.01 5.32 A 5.53 5.43 93 0 0 14.53 6.92"
      }
    ],
    [
      "path",
      {
        "d": "M 8.27 18.01 A 5.78 2.13 70 0 1 9.78 2.86"
      }
    ]
  ]
};

export const UrsinoSnob = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.16 20.85 A 5.79 3.40 32 0 0 6.16 4.25" />
      <path d="M 8.42 7.67 Q 18.97 20.51 5.92 18.50" />
      <path d="M 13.01 5.32 A 5.53 5.43 93 0 0 14.53 6.92" />
      <path d="M 8.27 18.01 A 5.78 2.13 70 0 1 9.78 2.86" />
      {children}
    </svg>
  );
});

export default UrsinoSnob;
