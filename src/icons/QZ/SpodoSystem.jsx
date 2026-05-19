import React from 'react';

export const iconData = {
  "id": "SpodoSystem",
  "name": "SpodoSystem",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.55 12.00 Q 13.92 12.63 18.91 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 18.91 17.02 Q 13.19 13.64 14.64 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 14.64 20.13 Q 12.00 14.02 9.36 20.13"
      }
    ],
    [
      "path",
      {
        "d": "M 9.36 20.13 Q 10.81 13.64 5.09 17.02"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 17.02 Q 10.08 12.63 3.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.45 12.00 Q 10.08 11.37 5.09 6.98"
      }
    ],
    [
      "path",
      {
        "d": "M 5.09 6.98 Q 10.81 10.36 9.36 3.87"
      }
    ],
    [
      "path",
      {
        "d": "M 9.36 3.87 Q 12.00 9.98 14.64 3.87"
      }
    ],
    [
      "path",
      {
        "d": "M 14.64 3.87 Q 13.19 10.36 18.91 6.98"
      }
    ],
    [
      "path",
      {
        "d": "M 18.91 6.98 Q 13.92 11.37 20.55 12.00"
      }
    ]
  ]
};

export const SpodoSystem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.55 12.00 Q 13.92 12.63 18.91 17.02" />
      <path d="M 18.91 17.02 Q 13.19 13.64 14.64 20.13" />
      <path d="M 14.64 20.13 Q 12.00 14.02 9.36 20.13" />
      <path d="M 9.36 20.13 Q 10.81 13.64 5.09 17.02" />
      <path d="M 5.09 17.02 Q 10.08 12.63 3.45 12.00" />
      <path d="M 3.45 12.00 Q 10.08 11.37 5.09 6.98" />
      <path d="M 5.09 6.98 Q 10.81 10.36 9.36 3.87" />
      <path d="M 9.36 3.87 Q 12.00 9.98 14.64 3.87" />
      <path d="M 14.64 3.87 Q 13.19 10.36 18.91 6.98" />
      <path d="M 18.91 6.98 Q 13.92 11.37 20.55 12.00" />
      {children}
    </svg>
  );
});

export default SpodoSystem;
