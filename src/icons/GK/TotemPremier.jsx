import React from 'react';

export const iconData = {
  "id": "TotemPremier",
  "name": "TotemPremier",
  "category": "GK",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.26 19.66 L 2.68 14.17 L 3.46 7.67 L 8.24 3.20 L 14.78 2.84 L 20.01 6.77 L 21.50 13.14 L 18.54 18.98 L 12.52 21.56 Z"
      }
    ]
  ]
};

export const TotemPremier = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.26 19.66 L 2.68 14.17 L 3.46 7.67 L 8.24 3.20 L 14.78 2.84 L 20.01 6.77 L 21.50 13.14 L 18.54 18.98 L 12.52 21.56 Z" />
      {children}
    </svg>
  );
});

export default TotemPremier;
