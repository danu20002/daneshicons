import React from 'react';

export const iconData = {
  "id": "LimoNylon",
  "name": "LimoNylon",
  "category": "EC",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.28 12.00 a 8.72 8.72 0 1 0 17.43 0 a 8.72 8.72 0 1 0 -17.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.01 12.00 a 5.99 5.99 0 1 1 11.98 0 a 5.99 5.99 0 1 1 -11.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.22 12.00 L 22.22 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.12 18.42 L 18.37 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 10.17 20.01 L 9.73 21.96"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 15.56 L 2.80 16.43"
      }
    ],
    [
      "path",
      {
        "d": "M 4.60 8.44 L 2.80 7.57"
      }
    ],
    [
      "path",
      {
        "d": "M 10.17 3.99 L 9.73 2.04"
      }
    ],
    [
      "path",
      {
        "d": "M 17.12 5.58 L 18.37 4.01"
      }
    ]
  ]
};

export const LimoNylon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.28 12.00 a 8.72 8.72 0 1 0 17.43 0 a 8.72 8.72 0 1 0 -17.43 0" />
      <path d="M 6.01 12.00 a 5.99 5.99 0 1 1 11.98 0 a 5.99 5.99 0 1 1 -11.98 0" />
      <path d="M 20.22 12.00 L 22.22 12.00" />
      <path d="M 17.12 18.42 L 18.37 19.99" />
      <path d="M 10.17 20.01 L 9.73 21.96" />
      <path d="M 4.60 15.56 L 2.80 16.43" />
      <path d="M 4.60 8.44 L 2.80 7.57" />
      <path d="M 10.17 3.99 L 9.73 2.04" />
      <path d="M 17.12 5.58 L 18.37 4.01" />
      {children}
    </svg>
  );
});

export default LimoNylon;
