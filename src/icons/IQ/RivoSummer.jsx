import React from 'react';

export const iconData = {
  "id": "RivoSummer",
  "name": "RivoSummer",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 5.20 L 10.21 8.25 L 12.05 1.15 L 13.82 8.26 L 20.51 5.27 L 16.06 11.09 L 22.57 14.46 L 15.24 14.61 L 16.66 21.80 L 11.98 16.16 L 7.25 21.75 L 8.74 14.58 L 1.41 14.37 L 7.95 11.06 Z"
      }
    ]
  ]
};

export const RivoSummer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 5.20 L 10.21 8.25 L 12.05 1.15 L 13.82 8.26 L 20.51 5.27 L 16.06 11.09 L 22.57 14.46 L 15.24 14.61 L 16.66 21.80 L 11.98 16.16 L 7.25 21.75 L 8.74 14.58 L 1.41 14.37 L 7.95 11.06 Z" />
      {children}
    </svg>
  );
});

export default RivoSummer;
