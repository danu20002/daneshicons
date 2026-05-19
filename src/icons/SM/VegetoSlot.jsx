import React from 'react';

export const iconData = {
  "id": "VegetoSlot",
  "name": "VegetoSlot",
  "category": "SM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.38 20.72 L 19.23 14.84"
      }
    ],
    [
      "path",
      {
        "d": "M 8.82 6.23 L 13.62 21.14 L 18.14 20.12 L 7.59 5.04 L 2.53 12.95"
      }
    ],
    [
      "path",
      {
        "d": "M 8.01 9.80 Q 7.63 18.44 3.12 13.51"
      }
    ],
    [
      "path",
      {
        "d": "M 7.37 14.07 Q 4.63 9.03 13.89 7.04"
      }
    ],
    [
      "path",
      {
        "d": "M 13.25 2.36 A 4.62 4.60 3 0 0 19.39 12.92"
      }
    ],
    [
      "path",
      {
        "d": "M 7.08 9.73 L 8.80 8.30 L 18.06 5.99 L 8.43 9.63 L 13.66 10.64 L 15.44 15.24 L 5.29 8.37"
      }
    ]
  ]
};

export const VegetoSlot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.38 20.72 L 19.23 14.84" />
      <path d="M 8.82 6.23 L 13.62 21.14 L 18.14 20.12 L 7.59 5.04 L 2.53 12.95" />
      <path d="M 8.01 9.80 Q 7.63 18.44 3.12 13.51" />
      <path d="M 7.37 14.07 Q 4.63 9.03 13.89 7.04" />
      <path d="M 13.25 2.36 A 4.62 4.60 3 0 0 19.39 12.92" />
      <path d="M 7.08 9.73 L 8.80 8.30 L 18.06 5.99 L 8.43 9.63 L 13.66 10.64 L 15.44 15.24 L 5.29 8.37" />
      {children}
    </svg>
  );
});

export default VegetoSlot;
