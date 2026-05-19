import React from 'react';

export const iconData = {
  "id": "LithoHover",
  "name": "LithoHover",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.97 12.00 a 2.03 2.03 0 1 0 4.07 0 a 2.03 2.03 0 1 0 -4.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 12.00 a 3.88 3.88 0 1 0 7.76 0 a 3.88 3.88 0 1 0 -7.76 0",
        "stroke-dasharray": "5 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.40 12.00 a 5.60 5.60 0 1 0 11.19 0 a 5.60 5.60 0 1 0 -11.19 0",
        "stroke-dasharray": "6 1"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 a 6.94 6.94 0 1 0 13.88 0 a 6.94 6.94 0 1 0 -13.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.37 12.00 a 8.63 8.63 0 1 0 17.26 0 a 8.63 8.63 0 1 0 -17.26 0"
      }
    ]
  ]
};

export const LithoHover = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.97 12.00 a 2.03 2.03 0 1 0 4.07 0 a 2.03 2.03 0 1 0 -4.07 0" />
      <path d="M 8.12 12.00 a 3.88 3.88 0 1 0 7.76 0 a 3.88 3.88 0 1 0 -7.76 0" stroke-dasharray="5 3" />
      <path d="M 6.40 12.00 a 5.60 5.60 0 1 0 11.19 0 a 5.60 5.60 0 1 0 -11.19 0" stroke-dasharray="6 1" />
      <path d="M 5.06 12.00 a 6.94 6.94 0 1 0 13.88 0 a 6.94 6.94 0 1 0 -13.88 0" />
      <path d="M 3.37 12.00 a 8.63 8.63 0 1 0 17.26 0 a 8.63 8.63 0 1 0 -17.26 0" />
      {children}
    </svg>
  );
});

export default LithoHover;
