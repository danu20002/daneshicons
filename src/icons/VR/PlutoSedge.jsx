import React from 'react';

export const iconData = {
  "id": "PlutoSedge",
  "name": "PlutoSedge",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.99 5.64 L 20.74 11.74 L 18.36 17.99 L 12.26 20.74 L 6.01 18.36 L 3.26 12.26 L 5.64 6.01 L 11.74 3.26 Z"
      }
    ]
  ]
};

export const PlutoSedge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.99 5.64 L 20.74 11.74 L 18.36 17.99 L 12.26 20.74 L 6.01 18.36 L 3.26 12.26 L 5.64 6.01 L 11.74 3.26 Z" />
      {children}
    </svg>
  );
});

export default PlutoSedge;
