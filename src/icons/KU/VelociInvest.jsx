import React from 'react';

export const iconData = {
  "id": "VelociInvest",
  "name": "VelociInvest",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.09 3.59 L 21.83 12.20 L 16.74 20.61 L 6.91 20.41 L 2.17 11.80 L 7.26 3.39 Z"
      }
    ]
  ]
};

export const VelociInvest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.09 3.59 L 21.83 12.20 L 16.74 20.61 L 6.91 20.41 L 2.17 11.80 L 7.26 3.39 Z" />
      {children}
    </svg>
  );
});

export default VelociInvest;
