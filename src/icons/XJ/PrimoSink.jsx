import React from 'react';

export const iconData = {
  "id": "PrimoSink",
  "name": "PrimoSink",
  "category": "XJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.57 12.00 a 2.43 2.43 0 1 0 4.86 0 a 2.43 2.43 0 1 0 -4.86 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.56 12.00 a 4.44 4.44 0 1 0 8.88 0 a 4.44 4.44 0 1 0 -8.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 12.00 a 6.09 6.09 0 1 0 12.19 0 a 6.09 6.09 0 1 0 -12.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 12.00 a 8.14 8.14 0 1 0 16.28 0 a 8.14 8.14 0 1 0 -16.28 0",
        "stroke-dasharray": "6 3"
      }
    ]
  ]
};

export const PrimoSink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.57 12.00 a 2.43 2.43 0 1 0 4.86 0 a 2.43 2.43 0 1 0 -4.86 0" />
      <path d="M 7.56 12.00 a 4.44 4.44 0 1 0 8.88 0 a 4.44 4.44 0 1 0 -8.88 0" />
      <path d="M 5.91 12.00 a 6.09 6.09 0 1 0 12.19 0 a 6.09 6.09 0 1 0 -12.19 0" />
      <path d="M 3.86 12.00 a 8.14 8.14 0 1 0 16.28 0 a 8.14 8.14 0 1 0 -16.28 0" stroke-dasharray="6 3" />
      {children}
    </svg>
  );
});

export default PrimoSink;
