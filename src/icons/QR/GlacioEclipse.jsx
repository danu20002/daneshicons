import React from 'react';

export const iconData = {
  "id": "GlacioEclipse",
  "name": "GlacioEclipse",
  "category": "QR",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.60 10.70 L 16.16 13.77 L 18.42 20.53 L 12.55 16.49 L 7.83 21.83 L 8.39 14.72 L 1.40 13.30 L 7.84 10.23 L 5.58 3.47 L 11.45 7.51 L 16.17 2.17 L 15.61 9.28 Z"
      }
    ]
  ]
};

export const GlacioEclipse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.60 10.70 L 16.16 13.77 L 18.42 20.53 L 12.55 16.49 L 7.83 21.83 L 8.39 14.72 L 1.40 13.30 L 7.84 10.23 L 5.58 3.47 L 11.45 7.51 L 16.17 2.17 L 15.61 9.28 Z" />
      {children}
    </svg>
  );
});

export default GlacioEclipse;
