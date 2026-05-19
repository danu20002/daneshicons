import React from 'react';

export const iconData = {
  "id": "TitoloColony",
  "name": "TitoloColony",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.83 7.90 L 20.71 16.35 L 14.03 21.52 L 5.82 19.53 L 2.26 11.86 L 6.04 4.30 L 14.30 2.54 Z"
      }
    ]
  ]
};

export const TitoloColony = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.83 7.90 L 20.71 16.35 L 14.03 21.52 L 5.82 19.53 L 2.26 11.86 L 6.04 4.30 L 14.30 2.54 Z" />
      {children}
    </svg>
  );
});

export default TitoloColony;
