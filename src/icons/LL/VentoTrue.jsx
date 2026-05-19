import React from 'react';

export const iconData = {
  "id": "VentoTrue",
  "name": "VentoTrue",
  "category": "LL",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.55 5.17 L 18.83 7.55 L 16.45 18.83 L 5.17 16.45 Z"
      }
    ]
  ]
};

export const VentoTrue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.55 5.17 L 18.83 7.55 L 16.45 18.83 L 5.17 16.45 Z" />
      {children}
    </svg>
  );
});

export default VentoTrue;
