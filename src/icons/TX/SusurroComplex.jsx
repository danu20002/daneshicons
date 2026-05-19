import React from 'react';

export const iconData = {
  "id": "SusurroComplex",
  "name": "SusurroComplex",
  "category": "TX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.42 12.00 L 18.58 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.42 L 12.00 18.58"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 7.39 L 16.61 16.61"
      }
    ],
    [
      "path",
      {
        "d": "M 7.39 16.61 L 16.61 7.39"
      }
    ],
    [
      "path",
      {
        "d": "M 2.48 12.00 a 9.52 9.52 0 1 0 19.04 0 a 9.52 9.52 0 1 0 -19.04 0"
      }
    ]
  ]
};

export const SusurroComplex = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.42 12.00 L 18.58 12.00" />
      <path d="M 12.00 5.42 L 12.00 18.58" />
      <path d="M 7.39 7.39 L 16.61 16.61" />
      <path d="M 7.39 16.61 L 16.61 7.39" />
      <path d="M 2.48 12.00 a 9.52 9.52 0 1 0 19.04 0 a 9.52 9.52 0 1 0 -19.04 0" />
      {children}
    </svg>
  );
});

export default SusurroComplex;
