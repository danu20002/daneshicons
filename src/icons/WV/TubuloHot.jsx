import React from 'react';

export const iconData = {
  "id": "TubuloHot",
  "name": "TubuloHot",
  "category": "WV",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.08 6.81 L 14.08 6.81"
      }
    ],
    [
      "path",
      {
        "d": "M 16.34 8.57 L 17.58 12.37"
      }
    ],
    [
      "path",
      {
        "d": "M 16.60 15.07 L 13.37 17.42"
      }
    ],
    [
      "path",
      {
        "d": "M 10.51 17.33 L 7.27 14.98"
      }
    ],
    [
      "path",
      {
        "d": "M 6.47 12.23 L 7.71 8.42"
      }
    ]
  ]
};

export const TubuloHot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.08 6.81 L 14.08 6.81" />
      <path d="M 16.34 8.57 L 17.58 12.37" />
      <path d="M 16.60 15.07 L 13.37 17.42" />
      <path d="M 10.51 17.33 L 7.27 14.98" />
      <path d="M 6.47 12.23 L 7.71 8.42" />
      {children}
    </svg>
  );
});

export default TubuloHot;
