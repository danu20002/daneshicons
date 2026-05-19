import React from 'react';

export const iconData = {
  "id": "NarcisoGrand",
  "name": "NarcisoGrand",
  "category": "FJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.94 16.31 7.45 11.78 Q 11.75 8.98 16.06 6.18 Q 16.24 7.92 16.41 9.66 Q 18.31 13.57 20.20 17.47 Q 18.07 16.90 15.94 16.33 Q 13.19 18.59 10.44 20.84 Z"
      }
    ]
  ]
};

export const NarcisoGrand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.94 16.31 7.45 11.78 Q 11.75 8.98 16.06 6.18 Q 16.24 7.92 16.41 9.66 Q 18.31 13.57 20.20 17.47 Q 18.07 16.90 15.94 16.33 Q 13.19 18.59 10.44 20.84 Z" />
      {children}
    </svg>
  );
});

export default NarcisoGrand;
