import React from 'react';

export const iconData = {
  "id": "GlyphoStripe",
  "name": "GlyphoStripe",
  "category": "YV",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 12.00 a 2.35 2.35 0 1 0 4.71 0 a 2.35 2.35 0 1 0 -4.71 0",
        "stroke-dasharray": "4 2"
      }
    ],
    [
      "path",
      {
        "d": "M 5.64 12.00 a 6.36 6.36 0 1 0 12.72 0 a 6.36 6.36 0 1 0 -12.72 0",
        "stroke-dasharray": "6 2"
      }
    ]
  ]
};

export const GlyphoStripe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 12.00 a 2.35 2.35 0 1 0 4.71 0 a 2.35 2.35 0 1 0 -4.71 0" stroke-dasharray="4 2" />
      <path d="M 5.64 12.00 a 6.36 6.36 0 1 0 12.72 0 a 6.36 6.36 0 1 0 -12.72 0" stroke-dasharray="6 2" />
      {children}
    </svg>
  );
});

export default GlyphoStripe;
