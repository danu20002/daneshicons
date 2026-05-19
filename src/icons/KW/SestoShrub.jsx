import React from 'react';

export const iconData = {
  "id": "SestoShrub",
  "name": "SestoShrub",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.88 17.95 L 7.33 11.77 L 3.52 5.16 L 10.78 7.48 L 15.88 1.82 L 15.92 9.44 L 22.88 12.54 L 15.64 14.94 L 14.84 22.51 L 10.33 16.37 Z"
      }
    ]
  ]
};

export const SestoShrub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.88 17.95 L 7.33 11.77 L 3.52 5.16 L 10.78 7.48 L 15.88 1.82 L 15.92 9.44 L 22.88 12.54 L 15.64 14.94 L 14.84 22.51 L 10.33 16.37 Z" />
      {children}
    </svg>
  );
});

export default SestoShrub;
