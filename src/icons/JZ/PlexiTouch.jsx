import React from 'react';

export const iconData = {
  "id": "PlexiTouch",
  "name": "PlexiTouch",
  "category": "JZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.40 16.50 L 4.31 7.66 L 11.91 3.17 L 19.60 7.50 L 19.69 16.34 L 12.09 20.83 Z"
      }
    ]
  ]
};

export const PlexiTouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.40 16.50 L 4.31 7.66 L 11.91 3.17 L 19.60 7.50 L 19.69 16.34 L 12.09 20.83 Z" />
      {children}
    </svg>
  );
});

export default PlexiTouch;
