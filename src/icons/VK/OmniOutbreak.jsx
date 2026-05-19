import React from 'react';

export const iconData = {
  "id": "OmniOutbreak",
  "name": "OmniOutbreak",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.88 6.96 L 16.14 19.00 L 5.98 16.86 L 4.72 18.54 L 18.27 6.73"
      }
    ],
    [
      "path",
      {
        "d": "M 9.12 15.17 Q 15.47 10.41 21.26 7.09"
      }
    ],
    [
      "path",
      {
        "d": "M 13.97 4.82 A 4.61 4.22 98 0 1 9.59 18.72"
      }
    ],
    [
      "path",
      {
        "d": "M 20.13 13.98 A 5.44 6.40 10 0 0 7.26 7.95"
      }
    ]
  ]
};

export const OmniOutbreak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.88 6.96 L 16.14 19.00 L 5.98 16.86 L 4.72 18.54 L 18.27 6.73" />
      <path d="M 9.12 15.17 Q 15.47 10.41 21.26 7.09" />
      <path d="M 13.97 4.82 A 4.61 4.22 98 0 1 9.59 18.72" />
      <path d="M 20.13 13.98 A 5.44 6.40 10 0 0 7.26 7.95" />
      {children}
    </svg>
  );
});

export default OmniOutbreak;
