import React from 'react';

export const iconData = {
  "id": "CirroVariety",
  "name": "CirroVariety",
  "category": "IM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 12.00 a 8.91 8.91 0 1 0 17.82 0 a 8.91 8.91 0 1 0 -17.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.41 12.00 L 22.41 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 19.08 16.55 L 20.76 17.63"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 19.65 L 16.32 21.47"
      }
    ],
    [
      "path",
      {
        "d": "M 10.80 20.33 L 10.52 22.30"
      }
    ],
    [
      "path",
      {
        "d": "M 6.49 18.36 L 5.18 19.87"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 14.37 L 2.01 14.93"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 9.63 L 2.01 9.07"
      }
    ],
    [
      "path",
      {
        "d": "M 6.49 5.64 L 5.18 4.13"
      }
    ],
    [
      "path",
      {
        "d": "M 10.80 3.67 L 10.52 1.70"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 4.35 L 16.32 2.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.08 7.45 L 20.76 6.37"
      }
    ]
  ]
};

export const CirroVariety = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 12.00 a 8.91 8.91 0 1 0 17.82 0 a 8.91 8.91 0 1 0 -17.82 0" />
      <path d="M 5.82 12.00 a 6.18 6.18 0 1 1 12.36 0 a 6.18 6.18 0 1 1 -12.36 0" />
      <path d="M 20.41 12.00 L 22.41 12.00" />
      <path d="M 19.08 16.55 L 20.76 17.63" />
      <path d="M 15.49 19.65 L 16.32 21.47" />
      <path d="M 10.80 20.33 L 10.52 22.30" />
      <path d="M 6.49 18.36 L 5.18 19.87" />
      <path d="M 3.93 14.37 L 2.01 14.93" />
      <path d="M 3.93 9.63 L 2.01 9.07" />
      <path d="M 6.49 5.64 L 5.18 4.13" />
      <path d="M 10.80 3.67 L 10.52 1.70" />
      <path d="M 15.49 4.35 L 16.32 2.53" />
      <path d="M 19.08 7.45 L 20.76 6.37" />
      {children}
    </svg>
  );
});

export default CirroVariety;
