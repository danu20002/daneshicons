import React from 'react';

export const iconData = {
  "id": "NarcisoPatron",
  "name": "NarcisoPatron",
  "category": "SC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.01 19.32 L 3.16 11.34 L 8.15 4.02 L 16.99 4.68 L 20.84 12.66 L 15.85 19.98 Z"
      }
    ]
  ]
};

export const NarcisoPatron = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.01 19.32 L 3.16 11.34 L 8.15 4.02 L 16.99 4.68 L 20.84 12.66 L 15.85 19.98 Z" />
      {children}
    </svg>
  );
});

export default NarcisoPatron;
