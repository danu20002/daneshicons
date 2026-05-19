import React from 'react';

export const iconData = {
  "id": "TantoReign",
  "name": "TantoReign",
  "category": "C",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 14.86 L 6.67 4.85 L 17.15 4.72 L 20.52 14.65 L 12.11 20.92 Z"
      }
    ]
  ]
};

export const TantoReign = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 14.86 L 6.67 4.85 L 17.15 4.72 L 20.52 14.65 L 12.11 20.92 Z" />
      {children}
    </svg>
  );
});

export default TantoReign;
