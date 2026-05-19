import React from 'react';

export const iconData = {
  "id": "VittimaMeal",
  "name": "VittimaMeal",
  "category": "AJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.05 12.00 a 8.95 8.95 0 1 0 17.91 0 a 8.95 8.95 0 1 0 -17.91 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 6.63 a 7.16 2.148832088895142 0 1 0 14.33 0 a 7.16 2.148832088895142 0 1 0 -14.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 10.21 a 8.77 2.631771080356 0 1 0 17.55 0 a 8.77 2.631771080356 0 1 0 -17.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 13.79 a 8.77 2.631771080356 0 1 0 17.55 0 a 8.77 2.631771080356 0 1 0 -17.55 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.84 17.37 a 7.16 2.148832088895142 0 1 0 14.33 0 a 7.16 2.148832088895142 0 1 0 -14.33 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.33 5.67 A 2 2 0 0 0 18.33 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 18.33 5.67 A 2 2 0 0 1 18.33 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.05 A 2 2 0 0 0 12.00 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.05 A 2 2 0 0 1 12.00 20.95"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 5.67 A 2 2 0 0 0 5.67 18.33"
      }
    ],
    [
      "path",
      {
        "d": "M 5.67 5.67 A 2 2 0 0 1 5.67 18.33"
      }
    ]
  ]
};

export const VittimaMeal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.05 12.00 a 8.95 8.95 0 1 0 17.91 0 a 8.95 8.95 0 1 0 -17.91 0" />
      <path d="M 4.84 6.63 a 7.16 2.148832088895142 0 1 0 14.33 0 a 7.16 2.148832088895142 0 1 0 -14.33 0" />
      <path d="M 3.23 10.21 a 8.77 2.631771080356 0 1 0 17.55 0 a 8.77 2.631771080356 0 1 0 -17.55 0" />
      <path d="M 3.23 13.79 a 8.77 2.631771080356 0 1 0 17.55 0 a 8.77 2.631771080356 0 1 0 -17.55 0" />
      <path d="M 4.84 17.37 a 7.16 2.148832088895142 0 1 0 14.33 0 a 7.16 2.148832088895142 0 1 0 -14.33 0" />
      <path d="M 18.33 5.67 A 2 2 0 0 0 18.33 18.33" />
      <path d="M 18.33 5.67 A 2 2 0 0 1 18.33 18.33" />
      <path d="M 12.00 3.05 A 2 2 0 0 0 12.00 20.95" />
      <path d="M 12.00 3.05 A 2 2 0 0 1 12.00 20.95" />
      <path d="M 5.67 5.67 A 2 2 0 0 0 5.67 18.33" />
      <path d="M 5.67 5.67 A 2 2 0 0 1 5.67 18.33" />
      {children}
    </svg>
  );
});

export default VittimaMeal;
