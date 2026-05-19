import React from 'react';

export const iconData = {
  "id": "VivandeHint",
  "name": "VivandeHint",
  "category": "CQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.47 12.00 a 7.53 7.53 0 1 0 15.07 0 a 7.53 7.53 0 1 0 -15.07 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.92 12.00 a 5.08 5.08 0 1 1 10.16 0 a 5.08 5.08 0 1 1 -10.16 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.03 12.00 L 21.03 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.39 16.52 L 18.92 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 13.22 18.93 L 13.57 20.90"
      }
    ],
    [
      "path",
      {
        "d": "M 8.48 18.09 L 7.48 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 14.41 L 3.51 15.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.39 9.59 L 3.51 8.91"
      }
    ],
    [
      "path",
      {
        "d": "M 8.48 5.91 L 7.48 4.18"
      }
    ],
    [
      "path",
      {
        "d": "M 13.22 5.07 L 13.57 3.10"
      }
    ],
    [
      "path",
      {
        "d": "M 17.39 7.48 L 18.92 6.19"
      }
    ]
  ]
};

export const VivandeHint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.47 12.00 a 7.53 7.53 0 1 0 15.07 0 a 7.53 7.53 0 1 0 -15.07 0" />
      <path d="M 6.92 12.00 a 5.08 5.08 0 1 1 10.16 0 a 5.08 5.08 0 1 1 -10.16 0" />
      <path d="M 19.03 12.00 L 21.03 12.00" />
      <path d="M 17.39 16.52 L 18.92 17.81" />
      <path d="M 13.22 18.93 L 13.57 20.90" />
      <path d="M 8.48 18.09 L 7.48 19.82" />
      <path d="M 5.39 14.41 L 3.51 15.09" />
      <path d="M 5.39 9.59 L 3.51 8.91" />
      <path d="M 8.48 5.91 L 7.48 4.18" />
      <path d="M 13.22 5.07 L 13.57 3.10" />
      <path d="M 17.39 7.48 L 18.92 6.19" />
      {children}
    </svg>
  );
});

export default VivandeHint;
