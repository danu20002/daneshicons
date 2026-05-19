import React from 'react';

export const iconData = {
  "id": "SequenGarment",
  "name": "SequenGarment",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.67 12.00 Q 13.84 13.06 16.34 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 19.51 Q 12.00 14.12 7.66 19.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 19.51 Q 10.16 13.06 3.33 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 12.00 Q 10.16 10.94 7.66 4.49"
      }
    ],
    [
      "path",
      {
        "d": "M 7.66 4.49 Q 12.00 9.88 16.34 4.49"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 4.49 Q 13.84 10.94 20.67 12.00"
      }
    ]
  ]
};

export const SequenGarment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.67 12.00 Q 13.84 13.06 16.34 19.51" />
      <path d="M 16.34 19.51 Q 12.00 14.12 7.66 19.51" />
      <path d="M 7.66 19.51 Q 10.16 13.06 3.33 12.00" />
      <path d="M 3.33 12.00 Q 10.16 10.94 7.66 4.49" />
      <path d="M 7.66 4.49 Q 12.00 9.88 16.34 4.49" />
      <path d="M 16.34 4.49 Q 13.84 10.94 20.67 12.00" />
      {children}
    </svg>
  );
});

export default SequenGarment;
