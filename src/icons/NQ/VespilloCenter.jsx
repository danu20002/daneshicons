import React from 'react';

export const iconData = {
  "id": "VespilloCenter",
  "name": "VespilloCenter",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.75 2.50 L 19.86 17.40 L 3.40 16.10 Z"
      }
    ]
  ]
};

export const VespilloCenter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.75 2.50 L 19.86 17.40 L 3.40 16.10 Z" />
      {children}
    </svg>
  );
});

export default VespilloCenter;
