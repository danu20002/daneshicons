import React from 'react';

export const iconData = {
  "id": "VerlenGram",
  "name": "VerlenGram",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 20.66 Q 9.86 2.15 11.46 11.44"
      }
    ],
    [
      "path",
      {
        "d": "M 21.78 3.28 Q 11.11 19.44 20.33 19.83"
      }
    ],
    [
      "path",
      {
        "d": "M 18.15 10.45 L 2.72 7.49"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 16.49 Q 14.30 3.76 16.28 15.52"
      }
    ],
    [
      "path",
      {
        "d": "M 20.28 10.05 Q 2.51 15.00 17.35 13.98"
      }
    ],
    [
      "path",
      {
        "d": "M 12.25 5.35 A 2.39 4.80 73 0 1 6.40 18.52"
      }
    ]
  ]
};

export const VerlenGram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 20.66 Q 9.86 2.15 11.46 11.44" />
      <path d="M 21.78 3.28 Q 11.11 19.44 20.33 19.83" />
      <path d="M 18.15 10.45 L 2.72 7.49" />
      <path d="M 5.82 16.49 Q 14.30 3.76 16.28 15.52" />
      <path d="M 20.28 10.05 Q 2.51 15.00 17.35 13.98" />
      <path d="M 12.25 5.35 A 2.39 4.80 73 0 1 6.40 18.52" />
      {children}
    </svg>
  );
});

export default VerlenGram;
