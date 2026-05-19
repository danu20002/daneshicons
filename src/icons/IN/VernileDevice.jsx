import React from 'react';

export const iconData = {
  "id": "VernileDevice",
  "name": "VernileDevice",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.82 4.19 L 19.81 17.82 L 6.18 19.81 L 4.19 6.18 Z"
      }
    ]
  ]
};

export const VernileDevice = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.82 4.19 L 19.81 17.82 L 6.18 19.81 L 4.19 6.18 Z" />
      {children}
    </svg>
  );
});

export default VernileDevice;
