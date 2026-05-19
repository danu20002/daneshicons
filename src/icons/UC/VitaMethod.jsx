import React from 'react';

export const iconData = {
  "id": "VitaMethod",
  "name": "VitaMethod",
  "category": "UC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.80 12.00 a 9.20 9.20 0 1 0 18.40 0 a 9.20 9.20 0 1 0 -18.40 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 6.48 a 7.36 2.207737599648535 0 1 0 14.72 0 a 7.36 2.207737599648535 0 1 0 -14.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 10.16 a 9.01 2.703915302547921 0 1 0 18.03 0 a 9.01 2.703915302547921 0 1 0 -18.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 13.84 a 9.01 2.703915302547921 0 1 0 18.03 0 a 9.01 2.703915302547921 0 1 0 -18.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.64 17.52 a 7.36 2.2077375996485347 0 1 0 14.72 0 a 7.36 2.2077375996485347 0 1 0 -14.72 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.80 A 2 2 0 0 0 12.00 21.20"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.80 A 2 2 0 0 1 12.00 21.20"
      }
    ]
  ]
};

export const VitaMethod = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.80 12.00 a 9.20 9.20 0 1 0 18.40 0 a 9.20 9.20 0 1 0 -18.40 0" />
      <path d="M 4.64 6.48 a 7.36 2.207737599648535 0 1 0 14.72 0 a 7.36 2.207737599648535 0 1 0 -14.72 0" />
      <path d="M 2.99 10.16 a 9.01 2.703915302547921 0 1 0 18.03 0 a 9.01 2.703915302547921 0 1 0 -18.03 0" />
      <path d="M 2.99 13.84 a 9.01 2.703915302547921 0 1 0 18.03 0 a 9.01 2.703915302547921 0 1 0 -18.03 0" />
      <path d="M 4.64 17.52 a 7.36 2.2077375996485347 0 1 0 14.72 0 a 7.36 2.2077375996485347 0 1 0 -14.72 0" />
      <path d="M 12.00 2.80 A 2 2 0 0 0 12.00 21.20" />
      <path d="M 12.00 2.80 A 2 2 0 0 1 12.00 21.20" />
      {children}
    </svg>
  );
});

export default VitaMethod;
