import React from 'react';

export const iconData = {
  "id": "VellicoScissor",
  "name": "VellicoScissor",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.53 12.00 a 7.47 7.47 0 1 0 14.94 0 a 7.47 7.47 0 1 0 -14.94 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.21 12.00 a 4.79 4.79 0 1 1 9.58 0 a 4.79 4.79 0 1 1 -9.58 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.97 12.00 L 20.97 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.48 18.03 L 16.48 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 18.03 L 7.52 19.77"
      }
    ],
    [
      "path",
      {
        "d": "M 5.03 12.00 L 3.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.52 5.97 L 7.52 4.23"
      }
    ],
    [
      "path",
      {
        "d": "M 15.48 5.97 L 16.48 4.23"
      }
    ]
  ]
};

export const VellicoScissor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.53 12.00 a 7.47 7.47 0 1 0 14.94 0 a 7.47 7.47 0 1 0 -14.94 0" />
      <path d="M 7.21 12.00 a 4.79 4.79 0 1 1 9.58 0 a 4.79 4.79 0 1 1 -9.58 0" />
      <path d="M 18.97 12.00 L 20.97 12.00" />
      <path d="M 15.48 18.03 L 16.48 19.77" />
      <path d="M 8.52 18.03 L 7.52 19.77" />
      <path d="M 5.03 12.00 L 3.03 12.00" />
      <path d="M 8.52 5.97 L 7.52 4.23" />
      <path d="M 15.48 5.97 L 16.48 4.23" />
      {children}
    </svg>
  );
});

export default VellicoScissor;
