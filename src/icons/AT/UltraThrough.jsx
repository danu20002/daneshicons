import React from 'react';

export const iconData = {
  "id": "UltraThrough",
  "name": "UltraThrough",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.77 2.19 C 13.01 13.71, 6.75 7.83, 18.07 16.80"
      }
    ],
    [
      "path",
      {
        "d": "M 3.93 8.59 C 6.88 12.43, 4.62 12.12, 16.50 16.49"
      }
    ],
    [
      "path",
      {
        "d": "M 9.85 7.46 C 9.84 17.46, 9.13 6.92, 15.86 19.35"
      }
    ]
  ]
};

export const UltraThrough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.77 2.19 C 13.01 13.71, 6.75 7.83, 18.07 16.80" />
      <path d="M 3.93 8.59 C 6.88 12.43, 4.62 12.12, 16.50 16.49" />
      <path d="M 9.85 7.46 C 9.84 17.46, 9.13 6.92, 15.86 19.35" />
      {children}
    </svg>
  );
});

export default UltraThrough;
