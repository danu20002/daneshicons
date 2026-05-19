import React from 'react';

export const iconData = {
  "id": "VolieraStem",
  "name": "VolieraStem",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.06 6.98 C 5.34 9.49, 16.71 11.94, 16.20 15.91"
      }
    ],
    [
      "path",
      {
        "d": "M 6.90 8.86 C 9.99 18.73, 4.60 6.96, 19.57 15.10"
      }
    ],
    [
      "path",
      {
        "d": "M 4.98 8.69 C 9.80 14.02, 17.99 9.49, 15.40 17.65"
      }
    ],
    [
      "path",
      {
        "d": "M 4.05 5.02 C 10.78 13.01, 11.54 16.56, 20.84 14.99"
      }
    ]
  ]
};

export const VolieraStem = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.06 6.98 C 5.34 9.49, 16.71 11.94, 16.20 15.91" />
      <path d="M 6.90 8.86 C 9.99 18.73, 4.60 6.96, 19.57 15.10" />
      <path d="M 4.98 8.69 C 9.80 14.02, 17.99 9.49, 15.40 17.65" />
      <path d="M 4.05 5.02 C 10.78 13.01, 11.54 16.56, 20.84 14.99" />
      {children}
    </svg>
  );
});

export default VolieraStem;
