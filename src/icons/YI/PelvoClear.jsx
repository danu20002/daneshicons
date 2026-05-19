import React from 'react';

export const iconData = {
  "id": "PelvoClear",
  "name": "PelvoClear",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.39 19.68 A 6.03 2.19 26 0 0 15.72 11.96"
      }
    ],
    [
      "path",
      {
        "d": "M 17.19 7.73 L 16.52 14.65"
      }
    ],
    [
      "path",
      {
        "d": "M 21.51 20.39 A 5.53 2.08 80 0 0 9.83 12.16"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 15.67 C 4.87 19.03, 8.96 17.35, 10.38 9.21"
      }
    ],
    [
      "path",
      {
        "d": "M 8.89 13.55 Q 3.09 2.67 11.39 2.57"
      }
    ],
    [
      "path",
      {
        "d": "M 5.37 5.24 C 8.74 6.01, 10.19 4.93, 8.52 13.79"
      }
    ]
  ]
};

export const PelvoClear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.39 19.68 A 6.03 2.19 26 0 0 15.72 11.96" />
      <path d="M 17.19 7.73 L 16.52 14.65" />
      <path d="M 21.51 20.39 A 5.53 2.08 80 0 0 9.83 12.16" />
      <path d="M 3.86 15.67 C 4.87 19.03, 8.96 17.35, 10.38 9.21" />
      <path d="M 8.89 13.55 Q 3.09 2.67 11.39 2.57" />
      <path d="M 5.37 5.24 C 8.74 6.01, 10.19 4.93, 8.52 13.79" />
      {children}
    </svg>
  );
});

export default PelvoClear;
