import React from 'react';

export const iconData = {
  "id": "VictoSnip",
  "name": "VictoSnip",
  "category": "SL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.80 8.50 L 10.80 8.50"
      }
    ],
    [
      "path",
      {
        "d": "M 13.72 5.97 L 14.96 9.78"
      }
    ],
    [
      "path",
      {
        "d": "M 18.26 11.78 L 15.03 14.13"
      }
    ],
    [
      "path",
      {
        "d": "M 14.15 17.89 L 10.91 15.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.06 15.86 L 8.30 12.06"
      }
    ]
  ]
};

export const VictoSnip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.80 8.50 L 10.80 8.50" />
      <path d="M 13.72 5.97 L 14.96 9.78" />
      <path d="M 18.26 11.78 L 15.03 14.13" />
      <path d="M 14.15 17.89 L 10.91 15.54" />
      <path d="M 7.06 15.86 L 8.30 12.06" />
      {children}
    </svg>
  );
});

export default VictoSnip;
