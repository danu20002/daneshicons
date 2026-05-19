import React from 'react';

export const iconData = {
  "id": "HemiSplit",
  "name": "HemiSplit",
  "category": "Q",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 7.69 a 7.46 2.238933075680781 0 1 0 14.93 0 a 7.46 2.238933075680781 0 1 0 -14.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.38 12.00 a 8.62 2.585297227883711 0 1 0 17.24 0 a 8.62 2.585297227883711 0 1 0 -17.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.54 16.31 a 7.46 2.238933075680781 0 1 0 14.93 0 a 7.46 2.238933075680781 0 1 0 -14.93 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 5.91 A 2 2 0 0 0 18.09 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 18.09 5.91 A 2 2 0 0 1 18.09 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.38 A 2 2 0 0 0 12.00 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.38 A 2 2 0 0 1 12.00 20.62"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 5.91 A 2 2 0 0 0 5.91 18.09"
      }
    ],
    [
      "path",
      {
        "d": "M 5.91 5.91 A 2 2 0 0 1 5.91 18.09"
      }
    ]
  ]
};

export const HemiSplit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.38 12.00 a 8.62 8.62 0 1 0 17.24 0 a 8.62 8.62 0 1 0 -17.24 0" />
      <path d="M 4.54 7.69 a 7.46 2.238933075680781 0 1 0 14.93 0 a 7.46 2.238933075680781 0 1 0 -14.93 0" />
      <path d="M 3.38 12.00 a 8.62 2.585297227883711 0 1 0 17.24 0 a 8.62 2.585297227883711 0 1 0 -17.24 0" />
      <path d="M 4.54 16.31 a 7.46 2.238933075680781 0 1 0 14.93 0 a 7.46 2.238933075680781 0 1 0 -14.93 0" />
      <path d="M 18.09 5.91 A 2 2 0 0 0 18.09 18.09" />
      <path d="M 18.09 5.91 A 2 2 0 0 1 18.09 18.09" />
      <path d="M 12.00 3.38 A 2 2 0 0 0 12.00 20.62" />
      <path d="M 12.00 3.38 A 2 2 0 0 1 12.00 20.62" />
      <path d="M 5.91 5.91 A 2 2 0 0 0 5.91 18.09" />
      <path d="M 5.91 5.91 A 2 2 0 0 1 5.91 18.09" />
      {children}
    </svg>
  );
});

export default HemiSplit;
