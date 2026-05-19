import React from 'react';

export const iconData = {
  "id": "MidnightSpoke",
  "name": "MidnightSpoke",
  "category": "YW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.85 9.04 C 16.41 13.17, 16.59 19.48, 14.09 16.41"
      }
    ],
    [
      "path",
      {
        "d": "M 2.93 5.73 C 7.63 17.92, 13.83 7.43, 19.40 17.79"
      }
    ],
    [
      "path",
      {
        "d": "M 6.37 2.51 C 17.49 12.00, 7.25 7.46, 21.80 14.62"
      }
    ]
  ]
};

export const MidnightSpoke = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.85 9.04 C 16.41 13.17, 16.59 19.48, 14.09 16.41" />
      <path d="M 2.93 5.73 C 7.63 17.92, 13.83 7.43, 19.40 17.79" />
      <path d="M 6.37 2.51 C 17.49 12.00, 7.25 7.46, 21.80 14.62" />
      {children}
    </svg>
  );
});

export default MidnightSpoke;
