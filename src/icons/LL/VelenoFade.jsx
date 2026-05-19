import React from 'react';

export const iconData = {
  "id": "VelenoFade",
  "name": "VelenoFade",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.13 9.21 L 14.79 3.13 L 20.87 14.79 L 9.21 20.87 Z"
      }
    ]
  ]
};

export const VelenoFade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.13 9.21 L 14.79 3.13 L 20.87 14.79 L 9.21 20.87 Z" />
      {children}
    </svg>
  );
});

export default VelenoFade;
