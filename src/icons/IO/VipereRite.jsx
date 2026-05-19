import React from 'react';

export const iconData = {
  "id": "VipereRite",
  "name": "VipereRite",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.59 3.21 L 19.31 6.04 L 19.92 17.11 L 9.59 21.12 L 2.59 12.53 Z"
      }
    ]
  ]
};

export const VipereRite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.59 3.21 L 19.31 6.04 L 19.92 17.11 L 9.59 21.12 L 2.59 12.53 Z" />
      {children}
    </svg>
  );
});

export default VipereRite;
