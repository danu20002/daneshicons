import React from 'react';

export const iconData = {
  "id": "VarioloDepart",
  "name": "VarioloDepart",
  "category": "ED",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.32 3.37 L 19.07 5.84 L 20.05 16.82 L 9.91 21.14 L 2.66 12.83 Z"
      }
    ]
  ]
};

export const VarioloDepart = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.32 3.37 L 19.07 5.84 L 20.05 16.82 L 9.91 21.14 L 2.66 12.83 Z" />
      {children}
    </svg>
  );
});

export default VarioloDepart;
