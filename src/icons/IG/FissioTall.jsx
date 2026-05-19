import React from 'react';

export const iconData = {
  "id": "FissioTall",
  "name": "FissioTall",
  "category": "IG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.43 8.23 C 18.17 5.64, 19.47 8.06, 9.15 2.25"
      }
    ],
    [
      "path",
      {
        "d": "M 12.69 8.70 Q 2.55 13.07 3.87 7.73"
      }
    ],
    [
      "path",
      {
        "d": "M 17.93 21.25 L 18.41 7.10"
      }
    ],
    [
      "path",
      {
        "d": "M 8.75 18.03 Q 17.74 18.91 15.26 9.17"
      }
    ],
    [
      "path",
      {
        "d": "M 11.20 3.05 Q 16.68 16.18 13.50 13.66"
      }
    ]
  ]
};

export const FissioTall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.43 8.23 C 18.17 5.64, 19.47 8.06, 9.15 2.25" />
      <path d="M 12.69 8.70 Q 2.55 13.07 3.87 7.73" />
      <path d="M 17.93 21.25 L 18.41 7.10" />
      <path d="M 8.75 18.03 Q 17.74 18.91 15.26 9.17" />
      <path d="M 11.20 3.05 Q 16.68 16.18 13.50 13.66" />
      {children}
    </svg>
  );
});

export default FissioTall;
