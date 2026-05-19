import React from 'react';

export const iconData = {
  "id": "TrulloTerrain",
  "name": "TrulloTerrain",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.65 9.05 L 17.48 19.32 L 6.73 19.47 L 3.27 9.30 L 11.87 2.86 Z"
      }
    ]
  ]
};

export const TrulloTerrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.65 9.05 L 17.48 19.32 L 6.73 19.47 L 3.27 9.30 L 11.87 2.86 Z" />
      {children}
    </svg>
  );
});

export default TrulloTerrain;
