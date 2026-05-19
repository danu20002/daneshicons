import React from 'react';

export const iconData = {
  "id": "TriploRadius",
  "name": "TriploRadius",
  "category": "HI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.77 2.98 C 7.42 16.35, 6.69 6.76, 15.10 14.85"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 2.52 C 13.67 15.05, 11.64 6.77, 17.53 14.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.93 2.07 C 18.02 19.75, 6.78 5.53, 19.91 17.12"
      }
    ],
    [
      "path",
      {
        "d": "M 9.74 2.63 C 8.97 5.89, 14.13 10.85, 21.46 15.64"
      }
    ],
    [
      "path",
      {
        "d": "M 8.77 3.27 C 13.03 13.02, 5.02 16.65, 14.52 15.16"
      }
    ]
  ]
};

export const TriploRadius = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.77 2.98 C 7.42 16.35, 6.69 6.76, 15.10 14.85" />
      <path d="M 3.43 2.52 C 13.67 15.05, 11.64 6.77, 17.53 14.92" />
      <path d="M 5.93 2.07 C 18.02 19.75, 6.78 5.53, 19.91 17.12" />
      <path d="M 9.74 2.63 C 8.97 5.89, 14.13 10.85, 21.46 15.64" />
      <path d="M 8.77 3.27 C 13.03 13.02, 5.02 16.65, 14.52 15.16" />
      {children}
    </svg>
  );
});

export default TriploRadius;
