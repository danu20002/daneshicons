import React from 'react';

export const iconData = {
  "id": "SiphoSalvage",
  "name": "SiphoSalvage",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.68 8.49 L 13.68 8.49"
      }
    ],
    [
      "path",
      {
        "d": "M 14.62 8.71 L 15.85 12.51"
      }
    ],
    [
      "path",
      {
        "d": "M 15.94 13.47 L 12.70 15.82"
      }
    ],
    [
      "path",
      {
        "d": "M 11.82 16.20 L 8.58 13.85"
      }
    ],
    [
      "path",
      {
        "d": "M 7.95 13.13 L 9.18 9.32"
      }
    ]
  ]
};

export const SiphoSalvage = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.68 8.49 L 13.68 8.49" />
      <path d="M 14.62 8.71 L 15.85 12.51" />
      <path d="M 15.94 13.47 L 12.70 15.82" />
      <path d="M 11.82 16.20 L 8.58 13.85" />
      <path d="M 7.95 13.13 L 9.18 9.32" />
      {children}
    </svg>
  );
});

export default SiphoSalvage;
