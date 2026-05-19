import React from 'react';

export const iconData = {
  "id": "QuadraResult",
  "name": "QuadraResult",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.22 12.00 a 5.78 5.78 0 1 1 11.56 0 a 5.78 5.78 0 1 1 -11.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.12 12.00 L 22.12 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 19.04 L 17.06 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 19.04 L 6.94 20.77"
      }
    ],
    [
      "path",
      {
        "d": "M 3.88 12.00 L 1.88 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 7.94 4.96 L 6.94 3.23"
      }
    ],
    [
      "path",
      {
        "d": "M 16.06 4.96 L 17.06 3.23"
      }
    ]
  ]
};

export const QuadraResult = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.25 0 a 8.62 8.62 0 1 0 -17.25 0" />
      <path d="M 6.22 12.00 a 5.78 5.78 0 1 1 11.56 0 a 5.78 5.78 0 1 1 -11.56 0" />
      <path d="M 20.12 12.00 L 22.12 12.00" />
      <path d="M 16.06 19.04 L 17.06 20.77" />
      <path d="M 7.94 19.04 L 6.94 20.77" />
      <path d="M 3.88 12.00 L 1.88 12.00" />
      <path d="M 7.94 4.96 L 6.94 3.23" />
      <path d="M 16.06 4.96 L 17.06 3.23" />
      {children}
    </svg>
  );
});

export default QuadraResult;
