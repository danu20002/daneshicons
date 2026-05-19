import React from 'react';

export const iconData = {
  "id": "VulcanoStick",
  "name": "VulcanoStick",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.94 14.41 L 3.89 7.30 L 9.59 2.94 L 16.70 3.89 L 21.06 9.59 L 20.11 16.70 L 14.41 21.06 L 7.30 20.11 Z"
      }
    ]
  ]
};

export const VulcanoStick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.94 14.41 L 3.89 7.30 L 9.59 2.94 L 16.70 3.89 L 21.06 9.59 L 20.11 16.70 L 14.41 21.06 L 7.30 20.11 Z" />
      {children}
    </svg>
  );
});

export default VulcanoStick;
