import React from 'react';

export const iconData = {
  "id": "SilicoElm",
  "name": "SilicoElm",
  "category": "NX",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.88 4.71 C 7.00 15.35, 11.38 13.40, 16.54 18.44"
      }
    ],
    [
      "path",
      {
        "d": "M 9.07 9.02 C 4.23 8.24, 4.24 6.83, 20.09 17.24"
      }
    ],
    [
      "path",
      {
        "d": "M 2.62 2.20 C 5.64 7.33, 17.76 16.45, 18.12 19.67"
      }
    ],
    [
      "path",
      {
        "d": "M 4.15 4.91 C 6.06 14.78, 11.94 5.45, 20.02 16.01"
      }
    ],
    [
      "path",
      {
        "d": "M 4.95 6.03 C 14.48 10.71, 11.09 18.74, 16.71 18.07"
      }
    ]
  ]
};

export const SilicoElm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.88 4.71 C 7.00 15.35, 11.38 13.40, 16.54 18.44" />
      <path d="M 9.07 9.02 C 4.23 8.24, 4.24 6.83, 20.09 17.24" />
      <path d="M 2.62 2.20 C 5.64 7.33, 17.76 16.45, 18.12 19.67" />
      <path d="M 4.15 4.91 C 6.06 14.78, 11.94 5.45, 20.02 16.01" />
      <path d="M 4.95 6.03 C 14.48 10.71, 11.09 18.74, 16.71 18.07" />
      {children}
    </svg>
  );
});

export default SilicoElm;
