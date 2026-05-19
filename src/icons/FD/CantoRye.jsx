import React from 'react';

export const iconData = {
  "id": "CantoRye",
  "name": "CantoRye",
  "category": "FD",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.20 9.24 C 19.43 13.88, 6.75 16.55, 16.37 20.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.49 6.44 C 17.01 9.55, 17.06 7.67, 15.32 14.93"
      }
    ],
    [
      "path",
      {
        "d": "M 3.73 5.51 C 6.89 13.94, 9.34 7.48, 19.63 21.83"
      }
    ]
  ]
};

export const CantoRye = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.20 9.24 C 19.43 13.88, 6.75 16.55, 16.37 20.85" />
      <path d="M 7.49 6.44 C 17.01 9.55, 17.06 7.67, 15.32 14.93" />
      <path d="M 3.73 5.51 C 6.89 13.94, 9.34 7.48, 19.63 21.83" />
      {children}
    </svg>
  );
});

export default CantoRye;
