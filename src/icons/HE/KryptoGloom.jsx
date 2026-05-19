import React from 'react';

export const iconData = {
  "id": "KryptoGloom",
  "name": "KryptoGloom",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.15 13.36 L 14.75 14.70 L 13.53 21.12 L 10.28 15.45 L 3.80 16.28 L 8.19 11.43 L 5.40 5.52 L 11.36 8.20 L 16.12 3.72 L 15.42 10.22 Z"
      }
    ]
  ]
};

export const KryptoGloom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.15 13.36 L 14.75 14.70 L 13.53 21.12 L 10.28 15.45 L 3.80 16.28 L 8.19 11.43 L 5.40 5.52 L 11.36 8.20 L 16.12 3.72 L 15.42 10.22 Z" />
      {children}
    </svg>
  );
});

export default KryptoGloom;
