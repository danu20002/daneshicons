import React from 'react';

export const iconData = {
  "id": "ZuppaGuitar",
  "name": "ZuppaGuitar",
  "category": "PI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 12.00 a 2.12 2.12 0 1 0 4.25 0 a 2.12 2.12 0 1 0 -4.25 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.23 12.00 a 3.77 3.77 0 1 0 7.55 0 a 3.77 3.77 0 1 0 -7.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.41 12.00 a 5.59 5.59 0 1 0 11.19 0 a 5.59 5.59 0 1 0 -11.19 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.06 12.00 a 6.94 6.94 0 1 0 13.87 0 a 6.94 6.94 0 1 0 -13.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.18 12.00 a 8.82 8.82 0 1 0 17.63 0 a 8.82 8.82 0 1 0 -17.63 0"
      }
    ]
  ]
};

export const ZuppaGuitar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 12.00 a 2.12 2.12 0 1 0 4.25 0 a 2.12 2.12 0 1 0 -4.25 0" />
      <path d="M 8.23 12.00 a 3.77 3.77 0 1 0 7.55 0 a 3.77 3.77 0 1 0 -7.55 0" />
      <path d="M 6.41 12.00 a 5.59 5.59 0 1 0 11.19 0 a 5.59 5.59 0 1 0 -11.19 0" />
      <path d="M 5.06 12.00 a 6.94 6.94 0 1 0 13.87 0 a 6.94 6.94 0 1 0 -13.87 0" />
      <path d="M 3.18 12.00 a 8.82 8.82 0 1 0 17.63 0 a 8.82 8.82 0 1 0 -17.63 0" />
      {children}
    </svg>
  );
});

export default ZuppaGuitar;
