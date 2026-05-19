import React from 'react';

export const iconData = {
  "id": "ProboStocking",
  "name": "ProboStocking",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.96 12.00 Q 15.06 13.76 16.98 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 20.63 Q 12.00 15.53 7.02 20.63"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 20.63 Q 8.94 13.76 2.04 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.04 12.00 Q 8.94 10.24 7.02 3.37"
      }
    ],
    [
      "path",
      {
        "d": "M 7.02 3.37 Q 12.00 8.47 16.98 3.37"
      }
    ],
    [
      "path",
      {
        "d": "M 16.98 3.37 Q 15.06 10.24 21.96 12.00"
      }
    ]
  ]
};

export const ProboStocking = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.96 12.00 Q 15.06 13.76 16.98 20.63" />
      <path d="M 16.98 20.63 Q 12.00 15.53 7.02 20.63" />
      <path d="M 7.02 20.63 Q 8.94 13.76 2.04 12.00" />
      <path d="M 2.04 12.00 Q 8.94 10.24 7.02 3.37" />
      <path d="M 7.02 3.37 Q 12.00 8.47 16.98 3.37" />
      <path d="M 16.98 3.37 Q 15.06 10.24 21.96 12.00" />
      {children}
    </svg>
  );
});

export default ProboStocking;
