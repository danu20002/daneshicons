import React from 'react';

export const iconData = {
  "id": "VallatoRaft",
  "name": "VallatoRaft",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.40 12.89 A 4.81 3.43 8 0 1 4.26 4.04"
      }
    ],
    [
      "path",
      {
        "d": "M 20.76 12.75 L 20.19 10.14"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 10.59 A 4.45 4.61 23 0 1 5.35 18.86"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 5.62 L 6.46 2.69 L 9.68 14.26 L 14.86 15.54"
      }
    ],
    [
      "path",
      {
        "d": "M 10.44 10.91 C 7.16 2.61, 6.31 7.27, 9.66 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 9.88 5.86 Q 21.35 2.78 17.20 17.26"
      }
    ]
  ]
};

export const VallatoRaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.40 12.89 A 4.81 3.43 8 0 1 4.26 4.04" />
      <path d="M 20.76 12.75 L 20.19 10.14" />
      <path d="M 19.95 10.59 A 4.45 4.61 23 0 1 5.35 18.86" />
      <path d="M 19.15 5.62 L 6.46 2.69 L 9.68 14.26 L 14.86 15.54" />
      <path d="M 10.44 10.91 C 7.16 2.61, 6.31 7.27, 9.66 15.22" />
      <path d="M 9.88 5.86 Q 21.35 2.78 17.20 17.26" />
      {children}
    </svg>
  );
});

export default VallatoRaft;
