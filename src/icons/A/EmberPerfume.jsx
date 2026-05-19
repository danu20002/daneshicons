import React from 'react';

export const iconData = {
  "id": "EmberPerfume",
  "name": "EmberPerfume",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.95 12.72 L 11.28 3.95 L 20.05 11.28 L 12.72 20.05 Z"
      }
    ]
  ]
};

export const EmberPerfume = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.95 12.72 L 11.28 3.95 L 20.05 11.28 L 12.72 20.05 Z" />
      {children}
    </svg>
  );
});

export default EmberPerfume;
