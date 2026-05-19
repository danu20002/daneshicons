import React from 'react';

export const iconData = {
  "id": "VedovoClass",
  "name": "VedovoClass",
  "category": "UQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 12.00 L 20.45 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.55 L 12.00 20.45"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 6.09 L 17.91 17.91"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 17.91 L 17.91 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 2.22 12.00 a 9.78 9.78 0 1 0 19.56 0 a 9.78 9.78 0 1 0 -19.56 0"
      }
    ]
  ]
};

export const VedovoClass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 12.00 L 20.45 12.00" />
      <path d="M 12.00 3.55 L 12.00 20.45" />
      <path d="M 6.09 6.09 L 17.91 17.91" />
      <path d="M 6.09 17.91 L 17.91 6.09" />
      <path d="M 2.22 12.00 a 9.78 9.78 0 1 0 19.56 0 a 9.78 9.78 0 1 0 -19.56 0" />
      {children}
    </svg>
  );
});

export default VedovoClass;
