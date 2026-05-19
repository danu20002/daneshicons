import React from 'react';

export const iconData = {
  "id": "PirouMature",
  "name": "PirouMature",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.06 19.28 L 2.65 12.95 L 4.72 6.06 L 11.05 2.65 L 17.94 4.72 L 21.35 11.05 L 19.28 17.94 L 12.95 21.35 Z"
      }
    ]
  ]
};

export const PirouMature = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.06 19.28 L 2.65 12.95 L 4.72 6.06 L 11.05 2.65 L 17.94 4.72 L 21.35 11.05 L 19.28 17.94 L 12.95 21.35 Z" />
      {children}
    </svg>
  );
});

export default PirouMature;
