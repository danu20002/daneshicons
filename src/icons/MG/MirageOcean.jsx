import React from 'react';

export const iconData = {
  "id": "MirageOcean",
  "name": "MirageOcean",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.92 18.83 L 9.04 20.54 L 3.13 13.71 L 6.08 5.17 L 14.96 3.46 L 20.87 10.29 Z"
      }
    ]
  ]
};

export const MirageOcean = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.92 18.83 L 9.04 20.54 L 3.13 13.71 L 6.08 5.17 L 14.96 3.46 L 20.87 10.29 Z" />
      {children}
    </svg>
  );
});

export default MirageOcean;
