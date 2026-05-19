import React from 'react';

export const iconData = {
  "id": "StriatoTrim",
  "name": "StriatoTrim",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.73 12.00 a 8.27 8.27 0 1 0 16.53 0 a 8.27 8.27 0 1 0 -16.53 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.81 12.00 a 6.19 6.19 0 1 1 12.38 0 a 6.19 6.19 0 1 1 -12.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.77 12.00 L 21.77 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.88 18.73 L 16.88 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 18.73 L 7.12 20.46"
      }
    ],
    [
      "path",
      {
        "d": "M 4.23 12.00 L 2.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.12 5.27 L 7.12 3.54"
      }
    ],
    [
      "path",
      {
        "d": "M 15.88 5.27 L 16.88 3.54"
      }
    ]
  ]
};

export const StriatoTrim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.73 12.00 a 8.27 8.27 0 1 0 16.53 0 a 8.27 8.27 0 1 0 -16.53 0" />
      <path d="M 5.81 12.00 a 6.19 6.19 0 1 1 12.38 0 a 6.19 6.19 0 1 1 -12.38 0" />
      <path d="M 19.77 12.00 L 21.77 12.00" />
      <path d="M 15.88 18.73 L 16.88 20.46" />
      <path d="M 8.12 18.73 L 7.12 20.46" />
      <path d="M 4.23 12.00 L 2.23 12.00" />
      <path d="M 8.12 5.27 L 7.12 3.54" />
      <path d="M 15.88 5.27 L 16.88 3.54" />
      {children}
    </svg>
  );
});

export default StriatoTrim;
