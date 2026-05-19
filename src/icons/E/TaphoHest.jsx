import React from 'react';

export const iconData = {
  "id": "TaphoHest",
  "name": "TaphoHest",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.14 19.62 L 6.89 10.54 L 9.34 1.39 L 15.82 8.30 L 22.52 15.00 L 13.29 17.15 Z"
      }
    ]
  ]
};

export const TaphoHest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.14 19.62 L 6.89 10.54 L 9.34 1.39 L 15.82 8.30 L 22.52 15.00 L 13.29 17.15 Z" />
      {children}
    </svg>
  );
});

export default TaphoHest;
