import React from 'react';

export const iconData = {
  "id": "TegoFellow",
  "name": "TegoFellow",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.95 5.79 C 18.60 12.78, 15.01 4.23, 15.65 18.15"
      }
    ],
    [
      "path",
      {
        "d": "M 2.55 5.67 C 15.85 16.78, 5.04 9.62, 15.66 18.47"
      }
    ],
    [
      "path",
      {
        "d": "M 5.20 7.71 C 19.72 18.96, 16.28 7.49, 16.53 14.91"
      }
    ]
  ]
};

export const TegoFellow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.95 5.79 C 18.60 12.78, 15.01 4.23, 15.65 18.15" />
      <path d="M 2.55 5.67 C 15.85 16.78, 5.04 9.62, 15.66 18.47" />
      <path d="M 5.20 7.71 C 19.72 18.96, 16.28 7.49, 16.53 14.91" />
      {children}
    </svg>
  );
});

export default TegoFellow;
