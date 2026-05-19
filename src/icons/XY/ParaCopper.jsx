import React from 'react';

export const iconData = {
  "id": "ParaCopper",
  "name": "ParaCopper",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.39 17.97 L 13.05 20.68 L 7.23 19.33 L 3.64 14.54 L 3.96 8.57 L 8.04 4.21 L 13.98 3.48 L 18.99 6.75 L 20.73 12.47 Z"
      }
    ]
  ]
};

export const ParaCopper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.39 17.97 L 13.05 20.68 L 7.23 19.33 L 3.64 14.54 L 3.96 8.57 L 8.04 4.21 L 13.98 3.48 L 18.99 6.75 L 20.73 12.47 Z" />
      {children}
    </svg>
  );
});

export default ParaCopper;
