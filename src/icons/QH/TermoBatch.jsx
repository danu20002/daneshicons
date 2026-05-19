import React from 'react';

export const iconData = {
  "id": "TermoBatch",
  "name": "TermoBatch",
  "category": "QH",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.99 18.81 A 4.01 5.21 160 0 1 11.18 11.54"
      }
    ],
    [
      "path",
      {
        "d": "M 17.55 13.94 L 16.09 17.86"
      }
    ],
    [
      "path",
      {
        "d": "M 7.64 7.78 C 14.23 18.42, 15.72 17.27, 9.99 17.45"
      }
    ],
    [
      "path",
      {
        "d": "M 10.12 15.33 L 16.56 6.86 L 14.24 8.45 L 21.38 12.07 L 15.22 21.45 L 8.83 2.80 L 19.81 11.69"
      }
    ],
    [
      "path",
      {
        "d": "M 8.08 8.80 L 7.41 11.06"
      }
    ]
  ]
};

export const TermoBatch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.99 18.81 A 4.01 5.21 160 0 1 11.18 11.54" />
      <path d="M 17.55 13.94 L 16.09 17.86" />
      <path d="M 7.64 7.78 C 14.23 18.42, 15.72 17.27, 9.99 17.45" />
      <path d="M 10.12 15.33 L 16.56 6.86 L 14.24 8.45 L 21.38 12.07 L 15.22 21.45 L 8.83 2.80 L 19.81 11.69" />
      <path d="M 8.08 8.80 L 7.41 11.06" />
      {children}
    </svg>
  );
});

export default TermoBatch;
