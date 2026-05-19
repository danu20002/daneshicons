import React from 'react';

export const iconData = {
  "id": "DensoRetail",
  "name": "DensoRetail",
  "category": "AF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.61 13.92 L 14.92 18.79 L 18.65 8.37 L 5.68 20.65 L 8.27 17.30 L 16.82 16.29 L 11.08 10.20"
      }
    ],
    [
      "path",
      {
        "d": "M 19.94 15.99 L 3.01 9.44 L 7.86 13.25 L 9.92 2.27 L 11.42 14.87 L 15.59 4.79 L 4.96 16.79"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 13.25 Q 7.37 7.40 13.13 21.62"
      }
    ],
    [
      "path",
      {
        "d": "M 3.96 9.73 A 4.81 4.96 95 0 1 5.93 17.14"
      }
    ],
    [
      "path",
      {
        "d": "M 13.37 9.81 A 6.46 6.19 40 0 0 21.08 8.77"
      }
    ]
  ]
};

export const DensoRetail = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.61 13.92 L 14.92 18.79 L 18.65 8.37 L 5.68 20.65 L 8.27 17.30 L 16.82 16.29 L 11.08 10.20" />
      <path d="M 19.94 15.99 L 3.01 9.44 L 7.86 13.25 L 9.92 2.27 L 11.42 14.87 L 15.59 4.79 L 4.96 16.79" />
      <path d="M 3.27 13.25 Q 7.37 7.40 13.13 21.62" />
      <path d="M 3.96 9.73 A 4.81 4.96 95 0 1 5.93 17.14" />
      <path d="M 13.37 9.81 A 6.46 6.19 40 0 0 21.08 8.77" />
      {children}
    </svg>
  );
});

export default DensoRetail;
