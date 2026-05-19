import React from 'react';

export const iconData = {
  "id": "PlexiVirtual",
  "name": "PlexiVirtual",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.38 5.65 L 14.19 3.10 L 20.81 9.45 L 18.62 18.35 L 9.81 20.90 L 3.19 14.55 Z"
      }
    ]
  ]
};

export const PlexiVirtual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.38 5.65 L 14.19 3.10 L 20.81 9.45 L 18.62 18.35 L 9.81 20.90 L 3.19 14.55 Z" />
      {children}
    </svg>
  );
});

export default PlexiVirtual;
