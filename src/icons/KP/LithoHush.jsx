import React from 'react';

export const iconData = {
  "id": "LithoHush",
  "name": "LithoHush",
  "category": "KP",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.53 12.00 a 9.47 9.47 0 1 0 18.94 0 a 9.47 9.47 0 1 0 -18.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 7.27 a 8.20 2.459778633032528 0 1 0 16.40 0 a 8.20 2.459778633032528 0 1 0 -16.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.53 12.00 a 9.47 2.8403077118564397 0 1 0 18.94 0 a 9.47 2.8403077118564397 0 1 0 -18.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 16.73 a 8.20 2.459778633032528 0 1 0 16.40 0 a 8.20 2.459778633032528 0 1 0 -16.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 3.80 A 2 2 0 0 0 16.73 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 16.73 3.80 A 2 2 0 0 1 16.73 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 3.80 A 2 2 0 0 0 7.27 20.20"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 3.80 A 2 2 0 0 1 7.27 20.20"
      }
    ]
  ]
};

export const LithoHush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.53 12.00 a 9.47 9.47 0 1 0 18.94 0 a 9.47 9.47 0 1 0 -18.94 0" />
      <path d="M 3.80 7.27 a 8.20 2.459778633032528 0 1 0 16.40 0 a 8.20 2.459778633032528 0 1 0 -16.40 0" />
      <path d="M 2.53 12.00 a 9.47 2.8403077118564397 0 1 0 18.94 0 a 9.47 2.8403077118564397 0 1 0 -18.94 0" />
      <path d="M 3.80 16.73 a 8.20 2.459778633032528 0 1 0 16.40 0 a 8.20 2.459778633032528 0 1 0 -16.40 0" />
      <path d="M 16.73 3.80 A 2 2 0 0 0 16.73 20.20" />
      <path d="M 16.73 3.80 A 2 2 0 0 1 16.73 20.20" />
      <path d="M 7.27 3.80 A 2 2 0 0 0 7.27 20.20" />
      <path d="M 7.27 3.80 A 2 2 0 0 1 7.27 20.20" />
      {children}
    </svg>
  );
});

export default LithoHush;
