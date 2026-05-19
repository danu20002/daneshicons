import React from 'react';

export const iconData = {
  "id": "PlexiGreat",
  "name": "PlexiGreat",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.74 5.38 L 21.42 11.26 L 19.69 17.49 L 14.37 21.15 L 7.93 20.53 L 3.40 15.92 L 2.89 9.47 L 6.65 4.21 L 12.91 2.59 Z"
      }
    ]
  ]
};

export const PlexiGreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.74 5.38 L 21.42 11.26 L 19.69 17.49 L 14.37 21.15 L 7.93 20.53 L 3.40 15.92 L 2.89 9.47 L 6.65 4.21 L 12.91 2.59 Z" />
      {children}
    </svg>
  );
});

export default PlexiGreat;
