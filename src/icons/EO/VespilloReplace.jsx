import React from 'react';

export const iconData = {
  "id": "VespilloReplace",
  "name": "VespilloReplace",
  "category": "EO",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.83 12.00 Q 14.23 12.72 19.95 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 17.78 Q 13.38 13.90 15.04 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 15.04 21.35 Q 12.00 14.34 8.96 21.35"
      }
    ],
    [
      "path",
      {
        "d": "M 8.96 21.35 Q 10.62 13.90 4.05 17.78"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 17.78 Q 9.77 12.72 2.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.17 12.00 Q 9.77 11.28 4.05 6.22"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 6.22 Q 10.62 10.10 8.96 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 8.96 2.65 Q 12.00 9.66 15.04 2.65"
      }
    ],
    [
      "path",
      {
        "d": "M 15.04 2.65 Q 13.38 10.10 19.95 6.22"
      }
    ],
    [
      "path",
      {
        "d": "M 19.95 6.22 Q 14.23 11.28 21.83 12.00"
      }
    ]
  ]
};

export const VespilloReplace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.83 12.00 Q 14.23 12.72 19.95 17.78" />
      <path d="M 19.95 17.78 Q 13.38 13.90 15.04 21.35" />
      <path d="M 15.04 21.35 Q 12.00 14.34 8.96 21.35" />
      <path d="M 8.96 21.35 Q 10.62 13.90 4.05 17.78" />
      <path d="M 4.05 17.78 Q 9.77 12.72 2.17 12.00" />
      <path d="M 2.17 12.00 Q 9.77 11.28 4.05 6.22" />
      <path d="M 4.05 6.22 Q 10.62 10.10 8.96 2.65" />
      <path d="M 8.96 2.65 Q 12.00 9.66 15.04 2.65" />
      <path d="M 15.04 2.65 Q 13.38 10.10 19.95 6.22" />
      <path d="M 19.95 6.22 Q 14.23 11.28 21.83 12.00" />
      {children}
    </svg>
  );
});

export default VespilloReplace;
