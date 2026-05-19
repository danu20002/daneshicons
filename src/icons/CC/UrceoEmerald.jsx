import React from 'react';

export const iconData = {
  "id": "UrceoEmerald",
  "name": "UrceoEmerald",
  "category": "CC",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.60 3.87 L 15.19 11.67 L 20.13 18.60 L 12.33 15.19 L 5.40 20.13 L 8.81 12.33 L 3.87 5.40 L 11.67 8.81 Z"
      }
    ]
  ]
};

export const UrceoEmerald = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.60 3.87 L 15.19 11.67 L 20.13 18.60 L 12.33 15.19 L 5.40 20.13 L 8.81 12.33 L 3.87 5.40 L 11.67 8.81 Z" />
      {children}
    </svg>
  );
});

export default UrceoEmerald;
