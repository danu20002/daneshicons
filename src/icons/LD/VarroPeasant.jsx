import React from 'react';

export const iconData = {
  "id": "VarroPeasant",
  "name": "VarroPeasant",
  "category": "LD",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.84 7.60 L 14.84 7.60"
      }
    ],
    [
      "path",
      {
        "d": "M 16.39 13.19 L 14.39 16.66"
      }
    ],
    [
      "path",
      {
        "d": "M 8.77 15.21 L 6.77 11.74"
      }
    ]
  ]
};

export const VarroPeasant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.84 7.60 L 14.84 7.60" />
      <path d="M 16.39 13.19 L 14.39 16.66" />
      <path d="M 8.77 15.21 L 6.77 11.74" />
      {children}
    </svg>
  );
});

export default VarroPeasant;
