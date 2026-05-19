import React from 'react';

export const iconData = {
  "id": "VelociInfant",
  "name": "VelociInfant",
  "category": "BH",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.47 7.15 L 20.45 14.82 L 15.07 20.36 L 7.38 19.61 L 3.17 13.13 L 5.61 5.80 L 12.86 3.14 Z"
      }
    ]
  ]
};

export const VelociInfant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.47 7.15 L 20.45 14.82 L 15.07 20.36 L 7.38 19.61 L 3.17 13.13 L 5.61 5.80 L 12.86 3.14 Z" />
      {children}
    </svg>
  );
});

export default VelociInfant;
