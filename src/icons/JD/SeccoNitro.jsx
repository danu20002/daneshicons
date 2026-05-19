import React from 'react';

export const iconData = {
  "id": "SeccoNitro",
  "name": "SeccoNitro",
  "category": "JD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.86 12.00 a 9.14 9.14 0 1 0 18.28 0 a 9.14 9.14 0 1 0 -18.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 7.43 a 7.92 2.3750770434154425 0 1 0 15.83 0 a 7.92 2.3750770434154425 0 1 0 -15.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.86 12.00 a 9.14 2.7425027407240123 0 1 0 18.28 0 a 9.14 2.7425027407240123 0 1 0 -18.28 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.08 16.57 a 7.92 2.3750770434154425 0 1 0 15.83 0 a 7.92 2.3750770434154425 0 1 0 -15.83 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.86 A 2 2 0 0 0 12.00 21.14"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.86 A 2 2 0 0 1 12.00 21.14"
      }
    ]
  ]
};

export const SeccoNitro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.86 12.00 a 9.14 9.14 0 1 0 18.28 0 a 9.14 9.14 0 1 0 -18.28 0" />
      <path d="M 4.08 7.43 a 7.92 2.3750770434154425 0 1 0 15.83 0 a 7.92 2.3750770434154425 0 1 0 -15.83 0" />
      <path d="M 2.86 12.00 a 9.14 2.7425027407240123 0 1 0 18.28 0 a 9.14 2.7425027407240123 0 1 0 -18.28 0" />
      <path d="M 4.08 16.57 a 7.92 2.3750770434154425 0 1 0 15.83 0 a 7.92 2.3750770434154425 0 1 0 -15.83 0" />
      <path d="M 12.00 2.86 A 2 2 0 0 0 12.00 21.14" />
      <path d="M 12.00 2.86 A 2 2 0 0 1 12.00 21.14" />
      {children}
    </svg>
  );
});

export default SeccoNitro;
