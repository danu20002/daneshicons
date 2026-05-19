import React from 'react';

export const iconData = {
  "id": "RefleCortex",
  "name": "RefleCortex",
  "category": "QN",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.91 12.00 a 7.09 7.09 0 1 0 14.18 0 a 7.09 7.09 0 1 0 -14.18 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.55 12.00 a 5.45 5.45 0 1 1 10.91 0 a 5.45 5.45 0 1 1 -10.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.59 12.00 L 20.59 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 17.55 15.56 L 19.23 16.65"
      }
    ],
    [
      "path",
      {
        "d": "M 14.74 18.00 L 15.57 19.82"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 18.53 L 10.78 20.50"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 16.98 L 6.37 18.49"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 13.86 L 3.76 14.42"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 10.14 L 3.76 9.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.68 7.02 L 6.37 5.51"
      }
    ],
    [
      "path",
      {
        "d": "M 11.06 5.47 L 10.78 3.50"
      }
    ],
    [
      "path",
      {
        "d": "M 14.74 6.00 L 15.57 4.18"
      }
    ],
    [
      "path",
      {
        "d": "M 17.55 8.44 L 19.23 7.35"
      }
    ]
  ]
};

export const RefleCortex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.91 12.00 a 7.09 7.09 0 1 0 14.18 0 a 7.09 7.09 0 1 0 -14.18 0" />
      <path d="M 6.55 12.00 a 5.45 5.45 0 1 1 10.91 0 a 5.45 5.45 0 1 1 -10.91 0" />
      <path d="M 18.59 12.00 L 20.59 12.00" />
      <path d="M 17.55 15.56 L 19.23 16.65" />
      <path d="M 14.74 18.00 L 15.57 19.82" />
      <path d="M 11.06 18.53 L 10.78 20.50" />
      <path d="M 7.68 16.98 L 6.37 18.49" />
      <path d="M 5.67 13.86 L 3.76 14.42" />
      <path d="M 5.67 10.14 L 3.76 9.58" />
      <path d="M 7.68 7.02 L 6.37 5.51" />
      <path d="M 11.06 5.47 L 10.78 3.50" />
      <path d="M 14.74 6.00 L 15.57 4.18" />
      <path d="M 17.55 8.44 L 19.23 7.35" />
      {children}
    </svg>
  );
});

export default RefleCortex;
