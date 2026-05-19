import React from 'react';

export const iconData = {
  "id": "VesteBrand",
  "name": "VesteBrand",
  "category": "AT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.88 7.86 C 11.36 19.85, 15.40 8.79, 17.73 14.16"
      }
    ],
    [
      "path",
      {
        "d": "M 2.97 8.31 C 14.60 6.48, 6.49 15.92, 15.78 21.90"
      }
    ],
    [
      "path",
      {
        "d": "M 3.47 2.01 C 8.95 8.28, 17.44 10.46, 17.67 17.29"
      }
    ]
  ]
};

export const VesteBrand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.88 7.86 C 11.36 19.85, 15.40 8.79, 17.73 14.16" />
      <path d="M 2.97 8.31 C 14.60 6.48, 6.49 15.92, 15.78 21.90" />
      <path d="M 3.47 2.01 C 8.95 8.28, 17.44 10.46, 17.67 17.29" />
      {children}
    </svg>
  );
});

export default VesteBrand;
