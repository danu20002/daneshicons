import React from 'react';

export const iconData = {
  "id": "MaltoYellow",
  "name": "MaltoYellow",
  "category": "YD",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.78 4.33 C 14.19 6.47, 4.96 4.56, 17.10 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 8.43 6.38 C 5.57 11.82, 10.86 9.81, 19.67 16.92"
      }
    ],
    [
      "path",
      {
        "d": "M 9.95 6.55 C 5.45 5.53, 4.57 11.98, 19.72 19.27"
      }
    ],
    [
      "path",
      {
        "d": "M 4.55 7.71 C 7.01 6.48, 15.76 7.66, 19.85 14.08"
      }
    ]
  ]
};

export const MaltoYellow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.78 4.33 C 14.19 6.47, 4.96 4.56, 17.10 20.45" />
      <path d="M 8.43 6.38 C 5.57 11.82, 10.86 9.81, 19.67 16.92" />
      <path d="M 9.95 6.55 C 5.45 5.53, 4.57 11.98, 19.72 19.27" />
      <path d="M 4.55 7.71 C 7.01 6.48, 15.76 7.66, 19.85 14.08" />
      {children}
    </svg>
  );
});

export default MaltoYellow;
