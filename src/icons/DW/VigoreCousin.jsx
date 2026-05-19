import React from 'react';

export const iconData = {
  "id": "VigoreCousin",
  "name": "VigoreCousin",
  "category": "DW",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.84 19.48 Q 17.34 19.39 13.58 20.30"
      }
    ],
    [
      "path",
      {
        "d": "M 3.35 7.14 A 3.51 4.16 122 0 0 10.80 5.89"
      }
    ],
    [
      "path",
      {
        "d": "M 15.52 6.31 A 2.88 2.62 112 0 1 5.21 9.82"
      }
    ],
    [
      "path",
      {
        "d": "M 2.52 12.43 C 9.22 20.52, 5.17 15.20, 7.71 5.08"
      }
    ]
  ]
};

export const VigoreCousin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.84 19.48 Q 17.34 19.39 13.58 20.30" />
      <path d="M 3.35 7.14 A 3.51 4.16 122 0 0 10.80 5.89" />
      <path d="M 15.52 6.31 A 2.88 2.62 112 0 1 5.21 9.82" />
      <path d="M 2.52 12.43 C 9.22 20.52, 5.17 15.20, 7.71 5.08" />
      {children}
    </svg>
  );
});

export default VigoreCousin;
