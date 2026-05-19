import React from 'react';

export const iconData = {
  "id": "KataEnvelope",
  "name": "KataEnvelope",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.24 11.37 L 15.24 11.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.92 11.66 L 10.92 15.13"
      }
    ],
    [
      "path",
      {
        "d": "M 11.83 12.97 L 9.83 9.51"
      }
    ]
  ]
};

export const KataEnvelope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.24 11.37 L 15.24 11.37" />
      <path d="M 12.92 11.66 L 10.92 15.13" />
      <path d="M 11.83 12.97 L 9.83 9.51" />
      {children}
    </svg>
  );
});

export default KataEnvelope;
