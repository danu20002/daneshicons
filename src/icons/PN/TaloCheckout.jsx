import React from 'react';

export const iconData = {
  "id": "TaloCheckout",
  "name": "TaloCheckout",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.83 12.00 Q 16.15 13.35 19.15 17.19"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 17.19 Q 14.56 15.53 14.73 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 14.73 20.40 Q 12.00 16.36 9.27 20.40"
      }
    ],
    [
      "path",
      {
        "d": "M 9.27 20.40 Q 9.44 15.53 4.85 17.19"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 17.19 Q 7.85 13.35 3.17 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 3.17 12.00 Q 7.85 10.65 4.85 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 4.85 6.81 Q 9.44 8.47 9.27 3.60"
      }
    ],
    [
      "path",
      {
        "d": "M 9.27 3.60 Q 12.00 7.64 14.73 3.60"
      }
    ],
    [
      "path",
      {
        "d": "M 14.73 3.60 Q 14.56 8.47 19.15 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 19.15 6.81 Q 16.15 10.65 20.83 12.00"
      }
    ]
  ]
};

export const TaloCheckout = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.83 12.00 Q 16.15 13.35 19.15 17.19" />
      <path d="M 19.15 17.19 Q 14.56 15.53 14.73 20.40" />
      <path d="M 14.73 20.40 Q 12.00 16.36 9.27 20.40" />
      <path d="M 9.27 20.40 Q 9.44 15.53 4.85 17.19" />
      <path d="M 4.85 17.19 Q 7.85 13.35 3.17 12.00" />
      <path d="M 3.17 12.00 Q 7.85 10.65 4.85 6.81" />
      <path d="M 4.85 6.81 Q 9.44 8.47 9.27 3.60" />
      <path d="M 9.27 3.60 Q 12.00 7.64 14.73 3.60" />
      <path d="M 14.73 3.60 Q 14.56 8.47 19.15 6.81" />
      <path d="M 19.15 6.81 Q 16.15 10.65 20.83 12.00" />
      {children}
    </svg>
  );
});

export default TaloCheckout;
