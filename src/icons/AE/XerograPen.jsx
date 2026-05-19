import React from 'react';

export const iconData = {
  "id": "XerograPen",
  "name": "XerograPen",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.77 12.00 Q 14.37 13.37 16.88 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 16.88 20.46 Q 12.00 14.73 7.12 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 20.46 Q 9.63 13.37 2.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.23 12.00 Q 9.63 10.63 7.12 3.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.12 3.54 Q 12.00 9.27 16.88 3.54"
      }
    ],
    [
      "path",
      {
        "d": "M 16.88 3.54 Q 14.37 10.63 21.77 12.00"
      }
    ]
  ]
};

export const XerograPen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.77 12.00 Q 14.37 13.37 16.88 20.46" />
      <path d="M 16.88 20.46 Q 12.00 14.73 7.12 20.46" />
      <path d="M 7.12 20.46 Q 9.63 13.37 2.23 12.00" />
      <path d="M 2.23 12.00 Q 9.63 10.63 7.12 3.54" />
      <path d="M 7.12 3.54 Q 12.00 9.27 16.88 3.54" />
      <path d="M 16.88 3.54 Q 14.37 10.63 21.77 12.00" />
      {children}
    </svg>
  );
});

export default XerograPen;
