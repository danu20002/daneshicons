import React from 'react';

export const iconData = {
  "id": "SubliSlug",
  "name": "SubliSlug",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.74 21.04 L 11.53 15.25 L 4.87 19.30 L 8.76 12.55 L 2.85 7.48 L 10.47 9.09 L 13.48 1.90 L 14.29 9.65 L 22.06 10.28 L 14.94 13.46 Z"
      }
    ]
  ]
};

export const SubliSlug = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.74 21.04 L 11.53 15.25 L 4.87 19.30 L 8.76 12.55 L 2.85 7.48 L 10.47 9.09 L 13.48 1.90 L 14.29 9.65 L 22.06 10.28 L 14.94 13.46 Z" />
      {children}
    </svg>
  );
});

export default SubliSlug;
