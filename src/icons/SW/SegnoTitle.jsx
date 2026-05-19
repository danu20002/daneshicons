import React from 'react';

export const iconData = {
  "id": "SegnoTitle",
  "name": "SegnoTitle",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.04 20.67 L 7.64 14.08 L 1.51 11.18 L 8.01 9.26 L 7.47 2.50 L 12.38 7.18 L 17.96 3.33 L 16.36 9.92 L 22.49 12.82 L 15.99 14.74 L 16.53 21.50 L 11.62 16.82 Z"
      }
    ]
  ]
};

export const SegnoTitle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.04 20.67 L 7.64 14.08 L 1.51 11.18 L 8.01 9.26 L 7.47 2.50 L 12.38 7.18 L 17.96 3.33 L 16.36 9.92 L 22.49 12.82 L 15.99 14.74 L 16.53 21.50 L 11.62 16.82 Z" />
      {children}
    </svg>
  );
});

export default SegnoTitle;
