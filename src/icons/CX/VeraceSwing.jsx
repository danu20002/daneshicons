import React from 'react';

export const iconData = {
  "id": "VeraceSwing",
  "name": "VeraceSwing",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 12.00 a 2.49 2.49 0 1 0 4.98 0 a 2.49 2.49 0 1 0 -4.98 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 12.00 a 4.23 4.23 0 1 0 8.47 0 a 4.23 4.23 0 1 0 -8.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.79 12.00 a 6.21 6.21 0 1 0 12.41 0 a 6.21 6.21 0 1 0 -12.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0"
      }
    ]
  ]
};

export const VeraceSwing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 12.00 a 2.49 2.49 0 1 0 4.98 0 a 2.49 2.49 0 1 0 -4.98 0" />
      <path d="M 7.77 12.00 a 4.23 4.23 0 1 0 8.47 0 a 4.23 4.23 0 1 0 -8.47 0" />
      <path d="M 5.79 12.00 a 6.21 6.21 0 1 0 12.41 0 a 6.21 6.21 0 1 0 -12.41 0" />
      <path d="M 3.97 12.00 a 8.03 8.03 0 1 0 16.06 0 a 8.03 8.03 0 1 0 -16.06 0" />
      {children}
    </svg>
  );
});

export default VeraceSwing;
