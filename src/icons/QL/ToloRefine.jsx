import React from 'react';

export const iconData = {
  "id": "ToloRefine",
  "name": "ToloRefine",
  "category": "QL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 8.05 0 1 0 16.10 0 a 8.05 8.05 0 1 0 -16.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 7.97 a 6.97 2.0915492469530066 0 1 0 13.94 0 a 6.97 2.0915492469530066 0 1 0 -13.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.95 12.00 a 8.05 2.415113041503355 0 1 0 16.10 0 a 8.05 2.415113041503355 0 1 0 -16.10 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 16.03 a 6.97 2.0915492469530066 0 1 0 13.94 0 a 6.97 2.0915492469530066 0 1 0 -13.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.95 A 2 2 0 0 0 12.00 20.05"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.95 A 2 2 0 0 1 12.00 20.05"
      }
    ]
  ]
};

export const ToloRefine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.00 a 8.05 8.05 0 1 0 16.10 0 a 8.05 8.05 0 1 0 -16.10 0" />
      <path d="M 5.03 7.97 a 6.97 2.0915492469530066 0 1 0 13.94 0 a 6.97 2.0915492469530066 0 1 0 -13.94 0" />
      <path d="M 3.95 12.00 a 8.05 2.415113041503355 0 1 0 16.10 0 a 8.05 2.415113041503355 0 1 0 -16.10 0" />
      <path d="M 5.03 16.03 a 6.97 2.0915492469530066 0 1 0 13.94 0 a 6.97 2.0915492469530066 0 1 0 -13.94 0" />
      <path d="M 12.00 3.95 A 2 2 0 0 0 12.00 20.05" />
      <path d="M 12.00 3.95 A 2 2 0 0 1 12.00 20.05" />
      {children}
    </svg>
  );
});

export default ToloRefine;
