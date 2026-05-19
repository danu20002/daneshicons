import React from 'react';

export const iconData = {
  "id": "StiloSyndrome",
  "name": "StiloSyndrome",
  "category": "IK",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 9.18 a 7.97 2.390385555767031 0 1 0 15.94 0 a 7.97 2.390385555767031 0 1 0 -15.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.03 14.82 a 7.97 2.390385555767031 0 1 0 15.94 0 a 7.97 2.390385555767031 0 1 0 -15.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 4.68 A 2 2 0 0 0 16.23 19.32"
      }
    ],
    [
      "path",
      {
        "d": "M 16.23 4.68 A 2 2 0 0 1 16.23 19.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 4.68 A 2 2 0 0 0 7.77 19.32"
      }
    ],
    [
      "path",
      {
        "d": "M 7.77 4.68 A 2 2 0 0 1 7.77 19.32"
      }
    ]
  ]
};

export const StiloSyndrome = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 12.00 a 8.45 8.45 0 1 0 16.90 0 a 8.45 8.45 0 1 0 -16.90 0" />
      <path d="M 4.03 9.18 a 7.97 2.390385555767031 0 1 0 15.94 0 a 7.97 2.390385555767031 0 1 0 -15.94 0" />
      <path d="M 4.03 14.82 a 7.97 2.390385555767031 0 1 0 15.94 0 a 7.97 2.390385555767031 0 1 0 -15.94 0" />
      <path d="M 16.23 4.68 A 2 2 0 0 0 16.23 19.32" />
      <path d="M 16.23 4.68 A 2 2 0 0 1 16.23 19.32" />
      <path d="M 7.77 4.68 A 2 2 0 0 0 7.77 19.32" />
      <path d="M 7.77 4.68 A 2 2 0 0 1 7.77 19.32" />
      {children}
    </svg>
  );
});

export default StiloSyndrome;
