import React from 'react';

export const iconData = {
  "id": "KiloShoe",
  "name": "KiloShoe",
  "category": "ZZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.74 6.96 L 19.26 6.96 L 19.26 17.04 L 4.74 17.04 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.74 6.96 L 8.90 2.80 L 23.42 2.80 L 19.26 6.96"
      }
    ],
    [
      "path",
      {
        "d": "M 19.26 6.96 L 23.42 2.80 L 23.42 12.88 L 19.26 17.04"
      }
    ]
  ]
};

export const KiloShoe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.74 6.96 L 19.26 6.96 L 19.26 17.04 L 4.74 17.04 Z" />
      <path d="M 4.74 6.96 L 8.90 2.80 L 23.42 2.80 L 19.26 6.96" />
      <path d="M 19.26 6.96 L 23.42 2.80 L 23.42 12.88 L 19.26 17.04" />
      {children}
    </svg>
  );
});

export default KiloShoe;
