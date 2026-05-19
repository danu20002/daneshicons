import React from 'react';

export const iconData = {
  "id": "TurrisSkeleton",
  "name": "TurrisSkeleton",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 19.50 L 2.68 12.35 L 5.92 4.93 L 13.73 2.84 L 20.25 7.64 L 20.55 15.73 L 14.41 21.01 Z"
      }
    ]
  ]
};

export const TurrisSkeleton = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 19.50 L 2.68 12.35 L 5.92 4.93 L 13.73 2.84 L 20.25 7.64 L 20.55 15.73 L 14.41 21.01 Z" />
      {children}
    </svg>
  );
});

export default TurrisSkeleton;
