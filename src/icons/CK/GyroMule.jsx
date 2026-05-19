import React from 'react';

export const iconData = {
  "id": "GyroMule",
  "name": "GyroMule",
  "category": "CK",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.55 9.65 Q 12.58 14.65 19.95 3.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.25 7.18 C 8.69 5.66, 12.38 2.43, 20.89 19.06"
      }
    ],
    [
      "path",
      {
        "d": "M 12.31 19.96 A 6.86 6.97 19 0 1 10.16 20.97"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 16.71 Q 14.37 2.34 16.16 4.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.75 21.68 C 14.76 21.83, 10.58 7.24, 18.88 18.11"
      }
    ]
  ]
};

export const GyroMule = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.55 9.65 Q 12.58 14.65 19.95 3.66" />
      <path d="M 8.25 7.18 C 8.69 5.66, 12.38 2.43, 20.89 19.06" />
      <path d="M 12.31 19.96 A 6.86 6.97 19 0 1 10.16 20.97" />
      <path d="M 6.77 16.71 Q 14.37 2.34 16.16 4.73" />
      <path d="M 12.75 21.68 C 14.76 21.83, 10.58 7.24, 18.88 18.11" />
      {children}
    </svg>
  );
});

export default GyroMule;
