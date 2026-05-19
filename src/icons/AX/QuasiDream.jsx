import React from 'react';

export const iconData = {
  "id": "QuasiDream",
  "name": "QuasiDream",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.85 12.00 Q 15.71 14.14 16.93 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 16.93 20.53 Q 12.00 16.28 7.07 20.53"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 20.53 Q 8.29 14.14 2.15 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.15 12.00 Q 8.29 9.86 7.07 3.47"
      }
    ],
    [
      "path",
      {
        "d": "M 7.07 3.47 Q 12.00 7.72 16.93 3.47"
      }
    ],
    [
      "path",
      {
        "d": "M 16.93 3.47 Q 15.71 9.86 21.85 12.00"
      }
    ]
  ]
};

export const QuasiDream = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.85 12.00 Q 15.71 14.14 16.93 20.53" />
      <path d="M 16.93 20.53 Q 12.00 16.28 7.07 20.53" />
      <path d="M 7.07 20.53 Q 8.29 14.14 2.15 12.00" />
      <path d="M 2.15 12.00 Q 8.29 9.86 7.07 3.47" />
      <path d="M 7.07 3.47 Q 12.00 7.72 16.93 3.47" />
      <path d="M 16.93 3.47 Q 15.71 9.86 21.85 12.00" />
      {children}
    </svg>
  );
});

export default QuasiDream;
