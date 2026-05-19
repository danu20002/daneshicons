import React from 'react';

export const iconData = {
  "id": "XantoTonight",
  "name": "XantoTonight",
  "category": "AX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.73 12.00 Q 13.86 12.77 18.17 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 18.17 18.17 Q 12.77 13.86 12.00 20.73"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.73 Q 11.23 13.86 5.83 18.17"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 18.17 Q 10.14 12.77 3.27 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.27 12.00 Q 10.14 11.23 5.83 5.83"
      }
    ],
    [
      "path",
      {
        "d": "M 5.83 5.83 Q 11.23 10.14 12.00 3.27"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.27 Q 12.77 10.14 18.17 5.83"
      }
    ],
    [
      "path",
      {
        "d": "M 18.17 5.83 Q 13.86 11.23 20.73 12.00"
      }
    ]
  ]
};

export const XantoTonight = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.73 12.00 Q 13.86 12.77 18.17 18.17" />
      <path d="M 18.17 18.17 Q 12.77 13.86 12.00 20.73" />
      <path d="M 12.00 20.73 Q 11.23 13.86 5.83 18.17" />
      <path d="M 5.83 18.17 Q 10.14 12.77 3.27 12.00" />
      <path d="M 3.27 12.00 Q 10.14 11.23 5.83 5.83" />
      <path d="M 5.83 5.83 Q 11.23 10.14 12.00 3.27" />
      <path d="M 12.00 3.27 Q 12.77 10.14 18.17 5.83" />
      <path d="M 18.17 5.83 Q 13.86 11.23 20.73 12.00" />
      {children}
    </svg>
  );
});

export default XantoTonight;
