import React from 'react';

export const iconData = {
  "id": "OcciStore",
  "name": "OcciStore",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.68 20.56 L 3.60 15.71 L 3.44 8.68 L 8.29 3.60 L 15.32 3.44 L 20.40 8.29 L 20.56 15.32 L 15.71 20.40 Z"
      }
    ]
  ]
};

export const OcciStore = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.68 20.56 L 3.60 15.71 L 3.44 8.68 L 8.29 3.60 L 15.32 3.44 L 20.40 8.29 L 20.56 15.32 L 15.71 20.40 Z" />
      {children}
    </svg>
  );
});

export default OcciStore;
