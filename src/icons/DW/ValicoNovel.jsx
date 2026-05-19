import React from 'react';

export const iconData = {
  "id": "ValicoNovel",
  "name": "ValicoNovel",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.61 7.51 A 5.08 6.35 68 0 1 15.24 15.97"
      }
    ],
    [
      "path",
      {
        "d": "M 3.53 17.66 C 20.66 15.40, 16.27 20.10, 13.99 2.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.09 7.54 C 6.32 15.82, 10.42 19.27, 21.48 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 9.71 11.36 A 6.10 4.31 57 0 1 16.93 8.74"
      }
    ],
    [
      "path",
      {
        "d": "M 13.87 7.30 A 5.58 6.93 75 0 0 9.56 2.26"
      }
    ],
    [
      "path",
      {
        "d": "M 2.51 13.88 C 20.93 6.78, 16.44 9.84, 19.07 2.55"
      }
    ]
  ]
};

export const ValicoNovel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.61 7.51 A 5.08 6.35 68 0 1 15.24 15.97" />
      <path d="M 3.53 17.66 C 20.66 15.40, 16.27 20.10, 13.99 2.27" />
      <path d="M 14.09 7.54 C 6.32 15.82, 10.42 19.27, 21.48 2.65" />
      <path d="M 9.71 11.36 A 6.10 4.31 57 0 1 16.93 8.74" />
      <path d="M 13.87 7.30 A 5.58 6.93 75 0 0 9.56 2.26" />
      <path d="M 2.51 13.88 C 20.93 6.78, 16.44 9.84, 19.07 2.55" />
      {children}
    </svg>
  );
});

export default ValicoNovel;
