import React from 'react';

export const iconData = {
  "id": "TorsioNarrative",
  "name": "TorsioNarrative",
  "category": "KL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.89 6.89 L 5.63 15.11 L 8.40 8.65"
      }
    ],
    [
      "path",
      {
        "d": "M 3.65 19.64 C 19.69 5.27, 20.88 13.02, 3.48 3.41"
      }
    ],
    [
      "path",
      {
        "d": "M 11.90 19.18 L 12.52 16.28"
      }
    ],
    [
      "path",
      {
        "d": "M 12.97 3.78 Q 17.07 12.01 10.32 18.10"
      }
    ],
    [
      "path",
      {
        "d": "M 9.31 17.85 L 17.08 8.04"
      }
    ]
  ]
};

export const TorsioNarrative = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.89 6.89 L 5.63 15.11 L 8.40 8.65" />
      <path d="M 3.65 19.64 C 19.69 5.27, 20.88 13.02, 3.48 3.41" />
      <path d="M 11.90 19.18 L 12.52 16.28" />
      <path d="M 12.97 3.78 Q 17.07 12.01 10.32 18.10" />
      <path d="M 9.31 17.85 L 17.08 8.04" />
      {children}
    </svg>
  );
});

export default TorsioNarrative;
