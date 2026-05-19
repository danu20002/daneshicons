import React from 'react';

export const iconData = {
  "id": "VolanoBeam",
  "name": "VolanoBeam",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.33 17.86 L 2.73 3.21"
      }
    ],
    [
      "path",
      {
        "d": "M 16.40 18.86 Q 4.26 8.90 13.23 16.65"
      }
    ],
    [
      "path",
      {
        "d": "M 20.29 11.51 L 9.33 20.89"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 7.52 L 6.52 6.39 L 2.32 17.42 L 12.52 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 18.36 C 15.24 3.64, 13.86 4.09, 10.93 4.46"
      }
    ],
    [
      "path",
      {
        "d": "M 19.72 3.00 A 5.06 6.09 111 0 1 17.90 7.28"
      }
    ]
  ]
};

export const VolanoBeam = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.33 17.86 L 2.73 3.21" />
      <path d="M 16.40 18.86 Q 4.26 8.90 13.23 16.65" />
      <path d="M 20.29 11.51 L 9.33 20.89" />
      <path d="M 4.87 7.52 L 6.52 6.39 L 2.32 17.42 L 12.52 5.53" />
      <path d="M 17.73 18.36 C 15.24 3.64, 13.86 4.09, 10.93 4.46" />
      <path d="M 19.72 3.00 A 5.06 6.09 111 0 1 17.90 7.28" />
      {children}
    </svg>
  );
});

export default VolanoBeam;
