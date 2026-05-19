import React from 'react';

export const iconData = {
  "id": "VadosoEnamel",
  "name": "VadosoEnamel",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.66 4.17 L 14.79 10.80 L 20.88 14.01 L 14.00 14.28 L 12.83 21.07 L 10.45 14.61 L 3.63 15.59 L 9.04 11.33 L 6.00 5.15 L 11.72 8.98 Z"
      }
    ]
  ]
};

export const VadosoEnamel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.66 4.17 L 14.79 10.80 L 20.88 14.01 L 14.00 14.28 L 12.83 21.07 L 10.45 14.61 L 3.63 15.59 L 9.04 11.33 L 6.00 5.15 L 11.72 8.98 Z" />
      {children}
    </svg>
  );
});

export default VadosoEnamel;
