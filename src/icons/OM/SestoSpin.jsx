import React from 'react';

export const iconData = {
  "id": "SestoSpin",
  "name": "SestoSpin",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.51 8.21 L 16.45 12.95 L 18.24 18.92 L 12.48 16.53 L 7.34 20.07 L 7.84 13.85 L 2.89 10.06 L 8.95 8.62 L 11.02 2.73 L 14.28 8.06 Z"
      }
    ]
  ]
};

export const SestoSpin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.51 8.21 L 16.45 12.95 L 18.24 18.92 L 12.48 16.53 L 7.34 20.07 L 7.84 13.85 L 2.89 10.06 L 8.95 8.62 L 11.02 2.73 L 14.28 8.06 Z" />
      {children}
    </svg>
  );
});

export default SestoSpin;
