import React from 'react';

export const iconData = {
  "id": "MacroMerit",
  "name": "MacroMerit",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.42 7.68 C 3.27 13.58, 16.86 20.16, 13.63 20.35"
      }
    ],
    [
      "path",
      {
        "d": "M 7.44 21.92 L 8.48 15.42"
      }
    ],
    [
      "path",
      {
        "d": "M 12.74 9.09 L 18.56 20.96 L 11.66 19.73 L 3.12 8.72 L 8.43 17.01 L 12.07 6.82 L 4.38 10.53 L 3.46 17.46"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 17.64 A 6.31 3.25 8 0 1 12.95 18.36"
      }
    ]
  ]
};

export const MacroMerit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.42 7.68 C 3.27 13.58, 16.86 20.16, 13.63 20.35" />
      <path d="M 7.44 21.92 L 8.48 15.42" />
      <path d="M 12.74 9.09 L 18.56 20.96 L 11.66 19.73 L 3.12 8.72 L 8.43 17.01 L 12.07 6.82 L 4.38 10.53 L 3.46 17.46" />
      <path d="M 3.37 17.64 A 6.31 3.25 8 0 1 12.95 18.36" />
      {children}
    </svg>
  );
});

export default MacroMerit;
