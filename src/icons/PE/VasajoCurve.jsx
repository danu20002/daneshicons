import React from 'react';

export const iconData = {
  "id": "VasajoCurve",
  "name": "VasajoCurve",
  "category": "PE",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.85 19.62 L 4.39 15.16 L 4.38 8.85 L 8.84 4.39 L 15.15 4.38 L 19.61 8.84 L 19.62 15.15 L 15.16 19.61 Z"
      }
    ]
  ]
};

export const VasajoCurve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.85 19.62 L 4.39 15.16 L 4.38 8.85 L 8.84 4.39 L 15.15 4.38 L 19.61 8.84 L 19.62 15.15 L 15.16 19.61 Z" />
      {children}
    </svg>
  );
});

export default VasajoCurve;
