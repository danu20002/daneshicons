import React from 'react';

export const iconData = {
  "id": "VectisBeacon",
  "name": "VectisBeacon",
  "category": "NA",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.82 22.98 L 8.03 15.84 L 1.02 11.82 L 8.16 8.03 L 12.18 1.02 L 15.97 8.16 L 22.98 12.18 L 15.84 15.97 Z"
      }
    ]
  ]
};

export const VectisBeacon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.82 22.98 L 8.03 15.84 L 1.02 11.82 L 8.16 8.03 L 12.18 1.02 L 15.97 8.16 L 22.98 12.18 L 15.84 15.97 Z" />
      {children}
    </svg>
  );
});

export default VectisBeacon;
