import React from 'react';

export const iconData = {
  "id": "VirileRetire",
  "name": "VirileRetire",
  "category": "PS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.72 12.00 a 9.28 9.28 0 1 0 18.56 0 a 9.28 9.28 0 1 0 -18.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.72 12.00 a 9.28 2.784257267927751 0 1 0 18.56 0 a 9.28 2.784257267927751 0 1 0 -18.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 3.96 A 2 2 0 0 0 16.64 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 16.64 3.96 A 2 2 0 0 1 16.64 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 3.96 A 2 2 0 0 0 7.36 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 7.36 3.96 A 2 2 0 0 1 7.36 20.04"
      }
    ]
  ]
};

export const VirileRetire = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.72 12.00 a 9.28 9.28 0 1 0 18.56 0 a 9.28 9.28 0 1 0 -18.56 0" />
      <path d="M 2.72 12.00 a 9.28 2.784257267927751 0 1 0 18.56 0 a 9.28 2.784257267927751 0 1 0 -18.56 0" />
      <path d="M 16.64 3.96 A 2 2 0 0 0 16.64 20.04" />
      <path d="M 16.64 3.96 A 2 2 0 0 1 16.64 20.04" />
      <path d="M 7.36 3.96 A 2 2 0 0 0 7.36 20.04" />
      <path d="M 7.36 3.96 A 2 2 0 0 1 7.36 20.04" />
      {children}
    </svg>
  );
});

export default VirileRetire;
