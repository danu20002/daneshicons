import React from 'react';

export const iconData = {
  "id": "PseudoPsalm",
  "name": "PseudoPsalm",
  "category": "BX",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 12.00 a 7.78 7.78 0 1 0 15.56 0 a 7.78 7.78 0 1 0 -15.56 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.77 12.00 a 5.23 5.23 0 1 1 10.45 0 a 5.23 5.23 0 1 1 -10.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 19.28 12.00 L 21.28 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 15.64 18.30 L 16.64 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 8.36 18.30 L 7.36 20.04"
      }
    ],
    [
      "path",
      {
        "d": "M 4.72 12.00 L 2.72 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 8.36 5.70 L 7.36 3.96"
      }
    ],
    [
      "path",
      {
        "d": "M 15.64 5.70 L 16.64 3.96"
      }
    ]
  ]
};

export const PseudoPsalm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 12.00 a 7.78 7.78 0 1 0 15.56 0 a 7.78 7.78 0 1 0 -15.56 0" />
      <path d="M 6.77 12.00 a 5.23 5.23 0 1 1 10.45 0 a 5.23 5.23 0 1 1 -10.45 0" />
      <path d="M 19.28 12.00 L 21.28 12.00" />
      <path d="M 15.64 18.30 L 16.64 20.04" />
      <path d="M 8.36 18.30 L 7.36 20.04" />
      <path d="M 4.72 12.00 L 2.72 12.00" />
      <path d="M 8.36 5.70 L 7.36 3.96" />
      <path d="M 15.64 5.70 L 16.64 3.96" />
      {children}
    </svg>
  );
});

export default PseudoPsalm;
