import React from 'react';

export const iconData = {
  "id": "PlexiWing",
  "name": "PlexiWing",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.72 3.84 L 12.45 8.90 L 18.44 5.40 L 15.09 11.47 L 20.26 16.08 L 13.46 14.77 L 10.67 21.12 L 9.81 14.24 L 2.92 13.55 L 9.19 10.61 Z"
      }
    ]
  ]
};

export const PlexiWing = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.72 3.84 L 12.45 8.90 L 18.44 5.40 L 15.09 11.47 L 20.26 16.08 L 13.46 14.77 L 10.67 21.12 L 9.81 14.24 L 2.92 13.55 L 9.19 10.61 Z" />
      {children}
    </svg>
  );
});

export default PlexiWing;
