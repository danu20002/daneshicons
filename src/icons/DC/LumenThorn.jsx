import React from 'react';

export const iconData = {
  "id": "LumenThorn",
  "name": "LumenThorn",
  "category": "DC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.10 12.00 Q 15.06 13.27 17.73 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 17.73 Q 13.27 15.06 12.00 20.10"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.10 Q 10.73 15.06 6.27 17.73"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 17.73 Q 8.94 13.27 3.90 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.90 12.00 Q 8.94 10.73 6.27 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 6.27 6.27 Q 10.73 8.94 12.00 3.90"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.90 Q 13.27 8.94 17.73 6.27"
      }
    ],
    [
      "path",
      {
        "d": "M 17.73 6.27 Q 15.06 10.73 20.10 12.00"
      }
    ]
  ]
};

export const LumenThorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.10 12.00 Q 15.06 13.27 17.73 17.73" />
      <path d="M 17.73 17.73 Q 13.27 15.06 12.00 20.10" />
      <path d="M 12.00 20.10 Q 10.73 15.06 6.27 17.73" />
      <path d="M 6.27 17.73 Q 8.94 13.27 3.90 12.00" />
      <path d="M 3.90 12.00 Q 8.94 10.73 6.27 6.27" />
      <path d="M 6.27 6.27 Q 10.73 8.94 12.00 3.90" />
      <path d="M 12.00 3.90 Q 13.27 8.94 17.73 6.27" />
      <path d="M 17.73 6.27 Q 15.06 10.73 20.10 12.00" />
      {children}
    </svg>
  );
});

export default LumenThorn;
