import React from 'react';

export const iconData = {
  "id": "CosmoSupper",
  "name": "CosmoSupper",
  "category": "AE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.45 12.00 Q 14.89 14.89 12.00 21.45"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 21.45 Q 9.11 14.89 2.55 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 2.55 12.00 Q 9.11 9.11 12.00 2.55"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.55 Q 14.89 9.11 21.45 12.00"
      }
    ]
  ]
};

export const CosmoSupper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.45 12.00 Q 14.89 14.89 12.00 21.45" />
      <path d="M 12.00 21.45 Q 9.11 14.89 2.55 12.00" />
      <path d="M 2.55 12.00 Q 9.11 9.11 12.00 2.55" />
      <path d="M 12.00 2.55 Q 14.89 9.11 21.45 12.00" />
      {children}
    </svg>
  );
});

export default CosmoSupper;
