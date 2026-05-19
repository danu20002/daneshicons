import React from 'react';

export const iconData = {
  "id": "PlexiBrick",
  "name": "PlexiBrick",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.97 21.05 L 8.02 13.47 L 1.53 9.06 L 9.37 8.67 L 11.56 1.13 L 14.35 8.47 L 22.20 8.22 L 16.09 13.15 L 18.74 20.53 L 12.17 16.24 Z"
      }
    ]
  ]
};

export const PlexiBrick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.97 21.05 L 8.02 13.47 L 1.53 9.06 L 9.37 8.67 L 11.56 1.13 L 14.35 8.47 L 22.20 8.22 L 16.09 13.15 L 18.74 20.53 L 12.17 16.24 Z" />
      {children}
    </svg>
  );
});

export default PlexiBrick;
