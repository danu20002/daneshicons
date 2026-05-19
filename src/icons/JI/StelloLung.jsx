import React from 'react';

export const iconData = {
  "id": "StelloLung",
  "name": "StelloLung",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.29 19.16 L 3.03 13.82 L 3.96 7.62 L 8.65 3.48 L 14.91 3.32 L 19.81 7.22 L 21.05 13.36 L 18.06 18.86 L 12.23 21.15 Z"
      }
    ]
  ]
};

export const StelloLung = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.29 19.16 L 3.03 13.82 L 3.96 7.62 L 8.65 3.48 L 14.91 3.32 L 19.81 7.22 L 21.05 13.36 L 18.06 18.86 L 12.23 21.15 Z" />
      {children}
    </svg>
  );
});

export default StelloLung;
