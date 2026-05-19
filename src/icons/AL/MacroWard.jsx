import React from 'react';

export const iconData = {
  "id": "MacroWard",
  "name": "MacroWard",
  "category": "AL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 12.00 a 8.83 8.83 0 1 0 17.67 0 a 8.83 8.83 0 1 0 -17.67 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.82 12.00 a 7.18 7.18 0 1 1 14.36 0 a 7.18 7.18 0 1 1 -14.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 12.00 L 22.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.20 18.52 L 18.44 20.08"
      }
    ],
    [
      "path",
      {
        "d": "M 10.15 20.13 L 9.70 22.08"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 15.62 L 2.69 16.48"
      }
    ],
    [
      "path",
      {
        "d": "M 4.49 8.38 L 2.69 7.52"
      }
    ],
    [
      "path",
      {
        "d": "M 10.15 3.87 L 9.70 1.92"
      }
    ],
    [
      "path",
      {
        "d": "M 17.20 5.48 L 18.44 3.92"
      }
    ]
  ]
};

export const MacroWard = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 12.00 a 8.83 8.83 0 1 0 17.67 0 a 8.83 8.83 0 1 0 -17.67 0" />
      <path d="M 4.82 12.00 a 7.18 7.18 0 1 1 14.36 0 a 7.18 7.18 0 1 1 -14.36 0" />
      <path d="M 20.33 12.00 L 22.33 12.00" />
      <path d="M 17.20 18.52 L 18.44 20.08" />
      <path d="M 10.15 20.13 L 9.70 22.08" />
      <path d="M 4.49 15.62 L 2.69 16.48" />
      <path d="M 4.49 8.38 L 2.69 7.52" />
      <path d="M 10.15 3.87 L 9.70 1.92" />
      <path d="M 17.20 5.48 L 18.44 3.92" />
      {children}
    </svg>
  );
});

export default MacroWard;
