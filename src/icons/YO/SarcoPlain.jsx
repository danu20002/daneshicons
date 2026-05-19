import React from 'react';

export const iconData = {
  "id": "SarcoPlain",
  "name": "SarcoPlain",
  "category": "YO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.46 0 a 8.73 8.73 0 1 0 -17.46 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.43 12.00 a 6.57 6.57 0 1 1 13.15 0 a 6.57 6.57 0 1 1 -13.15 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.23 12.00 L 22.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.13 16.12 L 20.86 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 19.13 L 17.12 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 20.23 L 12.00 22.23"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 19.13 L 6.88 20.86"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 16.12 L 3.14 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 12.00 L 1.77 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 4.87 7.88 L 3.14 6.88"
      }
    ],
    [
      "path",
      {
        "d": "M 7.88 4.87 L 6.88 3.14"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.77 L 12.00 1.77"
      }
    ],
    [
      "path",
      {
        "d": "M 16.12 4.87 L 17.12 3.14"
      }
    ],
    [
      "path",
      {
        "d": "M 19.13 7.88 L 20.86 6.88"
      }
    ]
  ]
};

export const SarcoPlain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.46 0 a 8.73 8.73 0 1 0 -17.46 0" />
      <path d="M 5.43 12.00 a 6.57 6.57 0 1 1 13.15 0 a 6.57 6.57 0 1 1 -13.15 0" />
      <path d="M 20.23 12.00 L 22.23 12.00" />
      <path d="M 19.13 16.12 L 20.86 17.12" />
      <path d="M 16.12 19.13 L 17.12 20.86" />
      <path d="M 12.00 20.23 L 12.00 22.23" />
      <path d="M 7.88 19.13 L 6.88 20.86" />
      <path d="M 4.87 16.12 L 3.14 17.12" />
      <path d="M 3.77 12.00 L 1.77 12.00" />
      <path d="M 4.87 7.88 L 3.14 6.88" />
      <path d="M 7.88 4.87 L 6.88 3.14" />
      <path d="M 12.00 3.77 L 12.00 1.77" />
      <path d="M 16.12 4.87 L 17.12 3.14" />
      <path d="M 19.13 7.88 L 20.86 6.88" />
      {children}
    </svg>
  );
});

export default SarcoPlain;
