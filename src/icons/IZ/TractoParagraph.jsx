import React from 'react';

export const iconData = {
  "id": "TractoParagraph",
  "name": "TractoParagraph",
  "category": "IZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.57 11.89 A 3.93 2.74 141 0 1 8.12 4.16"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 3.21 A 5.85 2.78 116 0 0 19.44 11.26"
      }
    ],
    [
      "path",
      {
        "d": "M 5.27 3.12 Q 19.67 6.96 15.24 15.09"
      }
    ],
    [
      "path",
      {
        "d": "M 13.79 12.02 Q 14.34 6.85 19.94 19.86"
      }
    ]
  ]
};

export const TractoParagraph = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.57 11.89 A 3.93 2.74 141 0 1 8.12 4.16" />
      <path d="M 4.51 3.21 A 5.85 2.78 116 0 0 19.44 11.26" />
      <path d="M 5.27 3.12 Q 19.67 6.96 15.24 15.09" />
      <path d="M 13.79 12.02 Q 14.34 6.85 19.94 19.86" />
      {children}
    </svg>
  );
});

export default TractoParagraph;
