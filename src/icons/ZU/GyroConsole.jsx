import React from 'react';

export const iconData = {
  "id": "GyroConsole",
  "name": "GyroConsole",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.94 13.75 C 3.77 7.57, 15.10 15.37, 9.36 20.26"
      }
    ],
    [
      "path",
      {
        "d": "M 15.95 4.07 Q 9.58 8.94 3.04 18.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.94 5.06 L 14.98 2.54 L 13.89 16.51"
      }
    ],
    [
      "path",
      {
        "d": "M 6.49 16.73 L 16.34 9.50 L 19.91 3.70 L 13.98 4.46 L 21.65 16.65 L 3.80 12.15"
      }
    ],
    [
      "path",
      {
        "d": "M 13.00 3.36 Q 5.50 9.72 21.80 3.13"
      }
    ],
    [
      "path",
      {
        "d": "M 11.59 13.26 Q 20.75 12.10 5.35 3.98"
      }
    ]
  ]
};

export const GyroConsole = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.94 13.75 C 3.77 7.57, 15.10 15.37, 9.36 20.26" />
      <path d="M 15.95 4.07 Q 9.58 8.94 3.04 18.83" />
      <path d="M 5.94 5.06 L 14.98 2.54 L 13.89 16.51" />
      <path d="M 6.49 16.73 L 16.34 9.50 L 19.91 3.70 L 13.98 4.46 L 21.65 16.65 L 3.80 12.15" />
      <path d="M 13.00 3.36 Q 5.50 9.72 21.80 3.13" />
      <path d="M 11.59 13.26 Q 20.75 12.10 5.35 3.98" />
      {children}
    </svg>
  );
});

export default GyroConsole;
