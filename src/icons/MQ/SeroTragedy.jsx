import React from 'react';

export const iconData = {
  "id": "SeroTragedy",
  "name": "SeroTragedy",
  "category": "MQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.31 16.68 L 9.80 20.22"
      }
    ],
    [
      "path",
      {
        "d": "M 18.51 8.85 C 9.37 14.14, 20.94 2.20, 14.87 10.10"
      }
    ],
    [
      "path",
      {
        "d": "M 17.64 3.16 A 6.87 4.15 136 0 0 2.00 6.80"
      }
    ],
    [
      "path",
      {
        "d": "M 13.42 12.67 C 5.41 3.28, 10.86 8.46, 13.76 8.39"
      }
    ],
    [
      "path",
      {
        "d": "M 21.40 21.47 L 3.72 15.79"
      }
    ]
  ]
};

export const SeroTragedy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.31 16.68 L 9.80 20.22" />
      <path d="M 18.51 8.85 C 9.37 14.14, 20.94 2.20, 14.87 10.10" />
      <path d="M 17.64 3.16 A 6.87 4.15 136 0 0 2.00 6.80" />
      <path d="M 13.42 12.67 C 5.41 3.28, 10.86 8.46, 13.76 8.39" />
      <path d="M 21.40 21.47 L 3.72 15.79" />
      {children}
    </svg>
  );
});

export default SeroTragedy;
