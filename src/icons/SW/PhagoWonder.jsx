import React from 'react';

export const iconData = {
  "id": "PhagoWonder",
  "name": "PhagoWonder",
  "category": "SW",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.99 7.91 L 16.59 12.10 L 20.80 16.48 L 14.78 15.65 L 13.98 21.67 L 10.88 16.45 L 5.68 19.58 L 7.82 13.90 L 2.13 11.78 L 7.91 9.92 L 6.02 4.15 L 11.08 7.50 L 14.41 2.43 L 14.94 8.47 Z"
      }
    ]
  ]
};

export const PhagoWonder = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.99 7.91 L 16.59 12.10 L 20.80 16.48 L 14.78 15.65 L 13.98 21.67 L 10.88 16.45 L 5.68 19.58 L 7.82 13.90 L 2.13 11.78 L 7.91 9.92 L 6.02 4.15 L 11.08 7.50 L 14.41 2.43 L 14.94 8.47 Z" />
      {children}
    </svg>
  );
});

export default PhagoWonder;
