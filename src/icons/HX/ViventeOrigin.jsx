import React from 'react';

export const iconData = {
  "id": "ViventeOrigin",
  "name": "ViventeOrigin",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.35 5.89 L 15.27 11.39 L 21.99 14.72 L 14.51 14.18 L 16.10 21.51 L 11.86 15.33 L 7.13 21.13 L 9.31 13.97 L 1.82 13.88 L 8.79 11.13 L 4.18 5.22 L 10.68 8.94 L 12.43 1.66 L 13.57 9.06 Z"
      }
    ]
  ]
};

export const ViventeOrigin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.35 5.89 L 15.27 11.39 L 21.99 14.72 L 14.51 14.18 L 16.10 21.51 L 11.86 15.33 L 7.13 21.13 L 9.31 13.97 L 1.82 13.88 L 8.79 11.13 L 4.18 5.22 L 10.68 8.94 L 12.43 1.66 L 13.57 9.06 Z" />
      {children}
    </svg>
  );
});

export default ViventeOrigin;
