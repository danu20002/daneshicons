import React from 'react';

export const iconData = {
  "id": "ViragoDocument",
  "name": "ViragoDocument",
  "category": "WW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.41 20.74 Q 10.33 2.61 11.21 21.53"
      }
    ],
    [
      "path",
      {
        "d": "M 14.78 14.76 C 14.11 18.05, 7.30 8.47, 6.75 20.96"
      }
    ],
    [
      "path",
      {
        "d": "M 13.71 9.21 Q 10.30 8.97 12.09 21.31"
      }
    ],
    [
      "path",
      {
        "d": "M 20.95 7.20 L 9.20 3.03 L 8.05 5.03 L 5.13 5.03 L 11.69 21.13 L 2.22 18.01 L 17.17 5.74 L 14.68 19.68"
      }
    ],
    [
      "path",
      {
        "d": "M 7.61 7.03 Q 14.81 13.81 3.08 5.70"
      }
    ]
  ]
};

export const ViragoDocument = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.41 20.74 Q 10.33 2.61 11.21 21.53" />
      <path d="M 14.78 14.76 C 14.11 18.05, 7.30 8.47, 6.75 20.96" />
      <path d="M 13.71 9.21 Q 10.30 8.97 12.09 21.31" />
      <path d="M 20.95 7.20 L 9.20 3.03 L 8.05 5.03 L 5.13 5.03 L 11.69 21.13 L 2.22 18.01 L 17.17 5.74 L 14.68 19.68" />
      <path d="M 7.61 7.03 Q 14.81 13.81 3.08 5.70" />
      {children}
    </svg>
  );
});

export default ViragoDocument;
