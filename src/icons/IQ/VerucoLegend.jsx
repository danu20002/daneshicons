import React from 'react';

export const iconData = {
  "id": "VerucoLegend",
  "name": "VerucoLegend",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 19.30 L 7.35 13.20 L 1.96 9.21 L 8.64 8.58 L 9.39 1.91 L 13.28 7.38 L 19.43 4.70 L 16.65 10.80 L 22.04 14.79 L 15.36 15.42 L 14.61 22.09 L 10.72 16.62 Z"
      }
    ]
  ]
};

export const VerucoLegend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 19.30 L 7.35 13.20 L 1.96 9.21 L 8.64 8.58 L 9.39 1.91 L 13.28 7.38 L 19.43 4.70 L 16.65 10.80 L 22.04 14.79 L 15.36 15.42 L 14.61 22.09 L 10.72 16.62 Z" />
      {children}
    </svg>
  );
});

export default VerucoLegend;
