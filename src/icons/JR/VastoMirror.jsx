import React from 'react';

export const iconData = {
  "id": "VastoMirror",
  "name": "VastoMirror",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.31 6.77 L 13.31 6.77"
      }
    ],
    [
      "path",
      {
        "d": "M 16.15 7.83 L 17.38 11.63"
      }
    ],
    [
      "path",
      {
        "d": "M 17.25 14.66 L 14.01 17.01"
      }
    ],
    [
      "path",
      {
        "d": "M 11.10 17.81 L 7.86 15.46"
      }
    ],
    [
      "path",
      {
        "d": "M 6.19 12.94 L 7.43 9.13"
      }
    ]
  ]
};

export const VastoMirror = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.31 6.77 L 13.31 6.77" />
      <path d="M 16.15 7.83 L 17.38 11.63" />
      <path d="M 17.25 14.66 L 14.01 17.01" />
      <path d="M 11.10 17.81 L 7.86 15.46" />
      <path d="M 6.19 12.94 L 7.43 9.13" />
      {children}
    </svg>
  );
});

export default VastoMirror;
