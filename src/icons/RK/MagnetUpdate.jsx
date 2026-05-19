import React from 'react';

export const iconData = {
  "id": "MagnetUpdate",
  "name": "MagnetUpdate",
  "category": "RK",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.77 4.79 L 16.45 9.55 L 21.18 10.99 L 16.87 13.42 L 19.21 17.77 L 14.45 16.45 L 13.01 21.18 L 10.58 16.87 L 6.23 19.21 L 7.55 14.45 L 2.82 13.01 L 7.13 10.58 L 4.79 6.23 L 9.55 7.55 L 10.99 2.82 L 13.42 7.13 Z"
      }
    ]
  ]
};

export const MagnetUpdate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.77 4.79 L 16.45 9.55 L 21.18 10.99 L 16.87 13.42 L 19.21 17.77 L 14.45 16.45 L 13.01 21.18 L 10.58 16.87 L 6.23 19.21 L 7.55 14.45 L 2.82 13.01 L 7.13 10.58 L 4.79 6.23 L 9.55 7.55 L 10.99 2.82 L 13.42 7.13 Z" />
      {children}
    </svg>
  );
});

export default MagnetUpdate;
