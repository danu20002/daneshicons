import React from 'react';

export const iconData = {
  "id": "KryptoRisk",
  "name": "KryptoRisk",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.90 6.37 L 17.62 12.05 L 19.80 17.77 L 13.69 17.36 L 8.92 21.20 L 7.42 15.26 L 2.30 11.91 L 7.48 8.65 L 9.09 2.75 L 13.79 6.67 Z"
      }
    ]
  ]
};

export const KryptoRisk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.90 6.37 L 17.62 12.05 L 19.80 17.77 L 13.69 17.36 L 8.92 21.20 L 7.42 15.26 L 2.30 11.91 L 7.48 8.65 L 9.09 2.75 L 13.79 6.67 Z" />
      {children}
    </svg>
  );
});

export default KryptoRisk;
