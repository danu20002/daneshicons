import React from 'react';

export const iconData = {
  "id": "PiezoPact",
  "name": "PiezoPact",
  "category": "YI",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.57 5.58 L 17.49 2.25 L 15.78 7.88 L 14.50 21.87"
      }
    ],
    [
      "path",
      {
        "d": "M 17.52 7.22 L 17.54 16.45"
      }
    ],
    [
      "path",
      {
        "d": "M 15.41 11.88 L 11.99 16.85"
      }
    ],
    [
      "path",
      {
        "d": "M 11.51 4.54 Q 12.88 19.68 3.52 10.86"
      }
    ],
    [
      "path",
      {
        "d": "M 16.02 2.94 C 10.44 21.48, 4.32 3.55, 10.05 13.67"
      }
    ]
  ]
};

export const PiezoPact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.57 5.58 L 17.49 2.25 L 15.78 7.88 L 14.50 21.87" />
      <path d="M 17.52 7.22 L 17.54 16.45" />
      <path d="M 15.41 11.88 L 11.99 16.85" />
      <path d="M 11.51 4.54 Q 12.88 19.68 3.52 10.86" />
      <path d="M 16.02 2.94 C 10.44 21.48, 4.32 3.55, 10.05 13.67" />
      {children}
    </svg>
  );
});

export default PiezoPact;
