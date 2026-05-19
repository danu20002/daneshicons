import React from 'react';

export const iconData = {
  "id": "FronoInstall",
  "name": "FronoInstall",
  "category": "SD",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.40 3.04 L 14.98 9.80 L 22.16 9.48 L 15.66 12.55 L 20.96 17.40 L 14.20 14.98 L 14.52 22.16 L 11.45 15.66 L 6.60 20.96 L 9.02 14.20 L 1.84 14.52 L 8.34 11.45 L 3.04 6.60 L 9.80 9.02 L 9.48 1.84 L 12.55 8.34 Z"
      }
    ]
  ]
};

export const FronoInstall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.40 3.04 L 14.98 9.80 L 22.16 9.48 L 15.66 12.55 L 20.96 17.40 L 14.20 14.98 L 14.52 22.16 L 11.45 15.66 L 6.60 20.96 L 9.02 14.20 L 1.84 14.52 L 8.34 11.45 L 3.04 6.60 L 9.80 9.02 L 9.48 1.84 L 12.55 8.34 Z" />
      {children}
    </svg>
  );
});

export default FronoInstall;
