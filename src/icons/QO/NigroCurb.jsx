import React from 'react';

export const iconData = {
  "id": "NigroCurb",
  "name": "NigroCurb",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.47 19.68 L 7.62 4.23 L 20.92 12.09 Z"
      }
    ]
  ]
};

export const NigroCurb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.47 19.68 L 7.62 4.23 L 20.92 12.09 Z" />
      {children}
    </svg>
  );
});

export default NigroCurb;
