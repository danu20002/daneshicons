import React from 'react';

export const iconData = {
  "id": "PortoTailor",
  "name": "PortoTailor",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.62 2.80 L 11.70 6.26 L 15.41 2.40 L 15.85 7.73 L 21.20 7.62 L 17.74 11.70 L 21.60 15.41 L 16.27 15.85 L 16.38 21.20 L 12.30 17.74 L 8.59 21.60 L 8.15 16.27 L 2.80 16.38 L 6.26 12.30 L 2.40 8.59 L 7.73 8.15 Z"
      }
    ]
  ]
};

export const PortoTailor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.62 2.80 L 11.70 6.26 L 15.41 2.40 L 15.85 7.73 L 21.20 7.62 L 17.74 11.70 L 21.60 15.41 L 16.27 15.85 L 16.38 21.20 L 12.30 17.74 L 8.59 21.60 L 8.15 16.27 L 2.80 16.38 L 6.26 12.30 L 2.40 8.59 L 7.73 8.15 Z" />
      {children}
    </svg>
  );
});

export default PortoTailor;
