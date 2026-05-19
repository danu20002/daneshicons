import React from 'react';

export const iconData = {
  "id": "MisoOpium",
  "name": "MisoOpium",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.28 18.22 L 12.24 15.04 L 5.78 19.28 L 8.96 12.24 L 4.72 5.78 L 11.76 8.96 L 18.22 4.72 L 15.04 11.76 Z"
      }
    ]
  ]
};

export const MisoOpium = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.28 18.22 L 12.24 15.04 L 5.78 19.28 L 8.96 12.24 L 4.72 5.78 L 11.76 8.96 L 18.22 4.72 L 15.04 11.76 Z" />
      {children}
    </svg>
  );
});

export default MisoOpium;
