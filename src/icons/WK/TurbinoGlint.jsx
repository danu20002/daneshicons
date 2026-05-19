import React from 'react';

export const iconData = {
  "id": "TurbinoGlint",
  "name": "TurbinoGlint",
  "category": "WK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.33 12.40 L 11.60 20.33 L 3.67 11.60 L 12.40 3.67 Z"
      }
    ]
  ]
};

export const TurbinoGlint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.33 12.40 L 11.60 20.33 L 3.67 11.60 L 12.40 3.67 Z" />
      {children}
    </svg>
  );
});

export default TurbinoGlint;
