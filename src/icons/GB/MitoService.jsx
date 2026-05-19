import React from 'react';

export const iconData = {
  "id": "MitoService",
  "name": "MitoService",
  "category": "GB",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.23 12.70 A 4.14 5.14 119 0 1 4.36 3.18"
      }
    ],
    [
      "path",
      {
        "d": "M 12.69 18.14 L 7.40 9.34 L 21.40 6.82"
      }
    ],
    [
      "path",
      {
        "d": "M 11.01 2.08 Q 20.18 7.53 5.40 4.93"
      }
    ],
    [
      "path",
      {
        "d": "M 5.12 16.26 A 3.23 6.51 34 0 0 21.20 18.52"
      }
    ]
  ]
};

export const MitoService = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.23 12.70 A 4.14 5.14 119 0 1 4.36 3.18" />
      <path d="M 12.69 18.14 L 7.40 9.34 L 21.40 6.82" />
      <path d="M 11.01 2.08 Q 20.18 7.53 5.40 4.93" />
      <path d="M 5.12 16.26 A 3.23 6.51 34 0 0 21.20 18.52" />
      {children}
    </svg>
  );
});

export default MitoService;
