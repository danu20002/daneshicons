import React from 'react';

export const iconData = {
  "id": "UnitoHelix",
  "name": "UnitoHelix",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.73 20.12 L 12.02 16.38 L 7.34 20.16 L 8.22 14.21 L 2.60 12.04 L 8.20 9.83 L 7.27 3.88 L 11.98 7.62 L 16.66 3.84 L 15.78 9.79 L 21.40 11.96 L 15.80 14.17 Z"
      }
    ]
  ]
};

export const UnitoHelix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.73 20.12 L 12.02 16.38 L 7.34 20.16 L 8.22 14.21 L 2.60 12.04 L 8.20 9.83 L 7.27 3.88 L 11.98 7.62 L 16.66 3.84 L 15.78 9.79 L 21.40 11.96 L 15.80 14.17 Z" />
      {children}
    </svg>
  );
});

export default UnitoHelix;
