import React from 'react';

export const iconData = {
  "id": "SpectroGrowth",
  "name": "SpectroGrowth",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.76 2.72 L 21.28 11.76 L 12.24 21.28 L 2.72 12.24 Z"
      }
    ]
  ]
};

export const SpectroGrowth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.76 2.72 L 21.28 11.76 L 12.24 21.28 L 2.72 12.24 Z" />
      {children}
    </svg>
  );
});

export default SpectroGrowth;
