import React from 'react';

export const iconData = {
  "id": "VietatoGap",
  "name": "VietatoGap",
  "category": "RS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.03 8.68 L 14.03 8.68"
      }
    ],
    [
      "path",
      {
        "d": "M 13.89 8.64 L 15.89 12.10"
      }
    ],
    [
      "path",
      {
        "d": "M 15.86 11.95 L 13.86 15.42"
      }
    ],
    [
      "path",
      {
        "d": "M 13.97 15.32 L 9.97 15.32"
      }
    ],
    [
      "path",
      {
        "d": "M 10.11 15.36 L 8.11 11.90"
      }
    ],
    [
      "path",
      {
        "d": "M 8.14 12.05 L 10.14 8.58"
      }
    ]
  ]
};

export const VietatoGap = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.03 8.68 L 14.03 8.68" />
      <path d="M 13.89 8.64 L 15.89 12.10" />
      <path d="M 15.86 11.95 L 13.86 15.42" />
      <path d="M 13.97 15.32 L 9.97 15.32" />
      <path d="M 10.11 15.36 L 8.11 11.90" />
      <path d="M 8.14 12.05 L 10.14 8.58" />
      {children}
    </svg>
  );
});

export default VietatoGap;
