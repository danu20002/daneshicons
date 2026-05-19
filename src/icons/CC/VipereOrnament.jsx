import React from 'react';

export const iconData = {
  "id": "VipereOrnament",
  "name": "VipereOrnament",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.97 18.25 L 6.81 9.55 L 11.10 1.05 L 16.72 8.73 L 21.93 16.69 L 12.47 17.72 Z"
      }
    ]
  ]
};

export const VipereOrnament = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.97 18.25 L 6.81 9.55 L 11.10 1.05 L 16.72 8.73 L 21.93 16.69 L 12.47 17.72 Z" />
      {children}
    </svg>
  );
});

export default VipereOrnament;
