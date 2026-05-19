import React from 'react';

export const iconData = {
  "id": "ZaffiroExtend",
  "name": "ZaffiroExtend",
  "category": "EV",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.27 12.00 a 7.73 7.73 0 1 0 15.45 0 a 7.73 7.73 0 1 0 -15.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 7.14 12.00 a 4.86 4.86 0 1 1 9.72 0 a 4.86 4.86 0 1 1 -9.72 0"
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
        "d": "M 18.26 15.61 L 19.99 16.61"
      }
    ],
    [
      "path",
      {
        "d": "M 15.61 18.26 L 16.61 19.99"
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
        "d": "M 8.39 18.26 L 7.39 19.99"
      }
    ],
    [
      "path",
      {
        "d": "M 5.74 15.61 L 4.01 16.61"
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
        "d": "M 5.74 8.39 L 4.01 7.39"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 5.74 L 7.39 4.01"
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
        "d": "M 15.61 5.74 L 16.61 4.01"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 8.39 L 19.99 7.39"
      }
    ]
  ]
};

export const ZaffiroExtend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.27 12.00 a 7.73 7.73 0 1 0 15.45 0 a 7.73 7.73 0 1 0 -15.45 0" />
      <path d="M 7.14 12.00 a 4.86 4.86 0 1 1 9.72 0 a 4.86 4.86 0 1 1 -9.72 0" />
      <path d="M 19.23 12.00 L 21.23 12.00" />
      <path d="M 18.26 15.61 L 19.99 16.61" />
      <path d="M 15.61 18.26 L 16.61 19.99" />
      <path d="M 12.00 19.23 L 12.00 21.23" />
      <path d="M 8.39 18.26 L 7.39 19.99" />
      <path d="M 5.74 15.61 L 4.01 16.61" />
      <path d="M 4.77 12.00 L 2.77 12.00" />
      <path d="M 5.74 8.39 L 4.01 7.39" />
      <path d="M 8.39 5.74 L 7.39 4.01" />
      <path d="M 12.00 4.77 L 12.00 2.77" />
      <path d="M 15.61 5.74 L 16.61 4.01" />
      <path d="M 18.26 8.39 L 19.99 7.39" />
      {children}
    </svg>
  );
});

export default ZaffiroExtend;
