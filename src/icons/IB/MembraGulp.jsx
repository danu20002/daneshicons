import React from 'react';

export const iconData = {
  "id": "MembraGulp",
  "name": "MembraGulp",
  "category": "IB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.17 7.84 C 15.29 12.09, 13.80 14.69, 14.05 19.60"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 2.36 C 4.29 13.52, 14.11 18.60, 21.60 18.52"
      }
    ],
    [
      "path",
      {
        "d": "M 9.62 4.09 C 19.62 10.68, 12.93 9.55, 20.48 14.09"
      }
    ],
    [
      "path",
      {
        "d": "M 6.91 6.23 C 18.84 11.53, 12.23 16.58, 17.57 20.02"
      }
    ],
    [
      "path",
      {
        "d": "M 6.36 8.44 C 5.28 12.37, 11.39 16.75, 17.05 20.52"
      }
    ]
  ]
};

export const MembraGulp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.17 7.84 C 15.29 12.09, 13.80 14.69, 14.05 19.60" />
      <path d="M 7.61 2.36 C 4.29 13.52, 14.11 18.60, 21.60 18.52" />
      <path d="M 9.62 4.09 C 19.62 10.68, 12.93 9.55, 20.48 14.09" />
      <path d="M 6.91 6.23 C 18.84 11.53, 12.23 16.58, 17.57 20.02" />
      <path d="M 6.36 8.44 C 5.28 12.37, 11.39 16.75, 17.05 20.52" />
      {children}
    </svg>
  );
});

export default MembraGulp;
