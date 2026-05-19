import React from 'react';

export const iconData = {
  "id": "AstroVariety",
  "name": "AstroVariety",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.89 4.45 L 15.14 4.46 L 19.55 8.89 L 19.54 15.14 L 15.11 19.55 L 8.86 19.54 L 4.45 15.11 L 4.46 8.86 Z"
      }
    ]
  ]
};

export const AstroVariety = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.89 4.45 L 15.14 4.46 L 19.55 8.89 L 19.54 15.14 L 15.11 19.55 L 8.86 19.54 L 4.45 15.11 L 4.46 8.86 Z" />
      {children}
    </svg>
  );
});

export default AstroVariety;
