import React from 'react';

export const iconData = {
  "id": "EmeraldLavender",
  "name": "EmeraldLavender",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.21 2.32 Q 19.20 8.94 10.23 13.42"
      }
    ],
    [
      "path",
      {
        "d": "M 3.94 15.77 C 11.80 4.81, 16.94 17.82, 16.25 3.78"
      }
    ],
    [
      "path",
      {
        "d": "M 20.94 3.20 L 21.80 9.56 L 12.81 7.99"
      }
    ],
    [
      "path",
      {
        "d": "M 19.79 13.45 C 4.46 3.12, 15.77 9.35, 10.93 13.65"
      }
    ],
    [
      "path",
      {
        "d": "M 16.04 3.98 A 4.67 6.97 120 0 1 4.30 17.32"
      }
    ]
  ]
};

export const EmeraldLavender = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.21 2.32 Q 19.20 8.94 10.23 13.42" />
      <path d="M 3.94 15.77 C 11.80 4.81, 16.94 17.82, 16.25 3.78" />
      <path d="M 20.94 3.20 L 21.80 9.56 L 12.81 7.99" />
      <path d="M 19.79 13.45 C 4.46 3.12, 15.77 9.35, 10.93 13.65" />
      <path d="M 16.04 3.98 A 4.67 6.97 120 0 1 4.30 17.32" />
      {children}
    </svg>
  );
});

export default EmeraldLavender;
