import React from 'react';

export const iconData = {
  "id": "SpumosoMinister",
  "name": "SpumosoMinister",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.16 20.84 L 10.44 14.72 L 1.76 12.04 L 10.42 9.29 L 17.08 3.11 L 15.14 11.99 Z"
      }
    ]
  ]
};

export const SpumosoMinister = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.16 20.84 L 10.44 14.72 L 1.76 12.04 L 10.42 9.29 L 17.08 3.11 L 15.14 11.99 Z" />
      {children}
    </svg>
  );
});

export default SpumosoMinister;
