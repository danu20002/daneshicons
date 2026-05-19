import React from 'react';

export const iconData = {
  "id": "VarioloGlade",
  "name": "VarioloGlade",
  "category": "VS",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.20 19.18 L 10.60 20.75 L 4.82 17.20 L 3.25 10.60 L 6.80 4.82 L 13.40 3.25 L 19.18 6.80 L 20.75 13.40 Z"
      }
    ]
  ]
};

export const VarioloGlade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.20 19.18 L 10.60 20.75 L 4.82 17.20 L 3.25 10.60 L 6.80 4.82 L 13.40 3.25 L 19.18 6.80 L 20.75 13.40 Z" />
      {children}
    </svg>
  );
});

export default VarioloGlade;
