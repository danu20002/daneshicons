import React from 'react';

export const iconData = {
  "id": "UredoSober",
  "name": "UredoSober",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.82 15.35 L 10.55 10.59 L 4.00 14.70 L 14.92 4.14 L 4.72 7.39"
      }
    ],
    [
      "path",
      {
        "d": "M 14.95 18.88 L 9.70 21.66 L 7.49 4.94 L 16.88 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 5.22 6.62 C 7.20 14.18, 7.45 3.64, 21.01 8.46"
      }
    ]
  ]
};

export const UredoSober = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.82 15.35 L 10.55 10.59 L 4.00 14.70 L 14.92 4.14 L 4.72 7.39" />
      <path d="M 14.95 18.88 L 9.70 21.66 L 7.49 4.94 L 16.88 20.90" />
      <path d="M 5.22 6.62 C 7.20 14.18, 7.45 3.64, 21.01 8.46" />
      {children}
    </svg>
  );
});

export default UredoSober;
