import React from 'react';

export const iconData = {
  "id": "RocciEnroll",
  "name": "RocciEnroll",
  "category": "S",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.27 12.00 a 7.73 7.73 0 1 0 15.47 0 a 7.73 7.73 0 1 0 -15.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.80 12.00 a 5.20 5.20 0 1 1 10.41 0 a 5.20 5.20 0 1 1 -10.41 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.23 12.00 L 21.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.27 15.62 L 20.00 16.62"
      }
    ],
    [
      "path",
      {
        "d": "M 15.62 18.27 L 16.62 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 19.23 L 12.00 21.23"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 18.27 L 7.38 20.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 15.62 L 4.00 16.62"
      }
    ],
    [
      "path",
      {
        "d": "M 4.77 12.00 L 2.77 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.73 8.38 L 4.00 7.38"
      }
    ],
    [
      "path",
      {
        "d": "M 8.38 5.73 L 7.38 4.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.77 L 12.00 2.77"
      }
    ],
    [
      "path",
      {
        "d": "M 15.62 5.73 L 16.62 4.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.27 8.38 L 20.00 7.38"
      }
    ]
  ]
};

export const RocciEnroll = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.27 12.00 a 7.73 7.73 0 1 0 15.47 0 a 7.73 7.73 0 1 0 -15.47 0" />
      <path d="M 6.80 12.00 a 5.20 5.20 0 1 1 10.41 0 a 5.20 5.20 0 1 1 -10.41 0" />
      <path d="M 19.23 12.00 L 21.23 12.00" />
      <path d="M 18.27 15.62 L 20.00 16.62" />
      <path d="M 15.62 18.27 L 16.62 20.00" />
      <path d="M 12.00 19.23 L 12.00 21.23" />
      <path d="M 8.38 18.27 L 7.38 20.00" />
      <path d="M 5.73 15.62 L 4.00 16.62" />
      <path d="M 4.77 12.00 L 2.77 12.00" />
      <path d="M 5.73 8.38 L 4.00 7.38" />
      <path d="M 8.38 5.73 L 7.38 4.00" />
      <path d="M 12.00 4.77 L 12.00 2.77" />
      <path d="M 15.62 5.73 L 16.62 4.00" />
      <path d="M 18.27 8.38 L 20.00 7.38" />
      {children}
    </svg>
  );
});

export default RocciEnroll;
