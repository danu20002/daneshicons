import React from 'react';

export const iconData = {
  "id": "PicoDodo",
  "name": "PicoDodo",
  "category": "LS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 5.86 C 15.44 9.93, 14.22 6.49, 14.35 15.66"
      }
    ],
    [
      "path",
      {
        "d": "M 7.92 6.43 C 13.00 10.14, 13.06 12.95, 16.79 14.51"
      }
    ],
    [
      "path",
      {
        "d": "M 2.03 8.80 C 14.49 10.81, 9.55 9.83, 21.35 14.43"
      }
    ],
    [
      "path",
      {
        "d": "M 7.04 2.64 C 16.61 10.02, 16.37 13.61, 15.51 18.85"
      }
    ]
  ]
};

export const PicoDodo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 5.86 C 15.44 9.93, 14.22 6.49, 14.35 15.66" />
      <path d="M 7.92 6.43 C 13.00 10.14, 13.06 12.95, 16.79 14.51" />
      <path d="M 2.03 8.80 C 14.49 10.81, 9.55 9.83, 21.35 14.43" />
      <path d="M 7.04 2.64 C 16.61 10.02, 16.37 13.61, 15.51 18.85" />
      {children}
    </svg>
  );
});

export default PicoDodo;
