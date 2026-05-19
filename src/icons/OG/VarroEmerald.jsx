import React from 'react';

export const iconData = {
  "id": "VarroEmerald",
  "name": "VarroEmerald",
  "category": "OG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 12.00 a 8.39 8.39 0 1 0 16.79 0 a 8.39 8.39 0 1 0 -16.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 6.96 a 6.72 2.014677433781326 0 1 0 13.43 0 a 6.72 2.014677433781326 0 1 0 -13.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 10.32 a 8.22 2.4674658545320463 0 1 0 16.45 0 a 8.22 2.4674658545320463 0 1 0 -16.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.78 13.68 a 8.22 2.4674658545320463 0 1 0 16.45 0 a 8.22 2.4674658545320463 0 1 0 -16.45 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.28 17.04 a 6.72 2.014677433781326 0 1 0 13.43 0 a 6.72 2.014677433781326 0 1 0 -13.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.61 A 2 2 0 0 0 12.00 20.39"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 3.61 A 2 2 0 0 1 12.00 20.39"
      }
    ]
  ]
};

export const VarroEmerald = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 12.00 a 8.39 8.39 0 1 0 16.79 0 a 8.39 8.39 0 1 0 -16.79 0" />
      <path d="M 5.28 6.96 a 6.72 2.014677433781326 0 1 0 13.43 0 a 6.72 2.014677433781326 0 1 0 -13.43 0" />
      <path d="M 3.78 10.32 a 8.22 2.4674658545320463 0 1 0 16.45 0 a 8.22 2.4674658545320463 0 1 0 -16.45 0" />
      <path d="M 3.78 13.68 a 8.22 2.4674658545320463 0 1 0 16.45 0 a 8.22 2.4674658545320463 0 1 0 -16.45 0" />
      <path d="M 5.28 17.04 a 6.72 2.014677433781326 0 1 0 13.43 0 a 6.72 2.014677433781326 0 1 0 -13.43 0" />
      <path d="M 12.00 3.61 A 2 2 0 0 0 12.00 20.39" />
      <path d="M 12.00 3.61 A 2 2 0 0 1 12.00 20.39" />
      {children}
    </svg>
  );
});

export default VarroEmerald;
