import React from 'react';

export const iconData = {
  "id": "XilofagoPaw",
  "name": "XilofagoPaw",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.11 9.25 L 16.03 13.53 L 17.74 20.76 L 11.79 16.31 L 5.44 20.17 L 7.84 13.13 L 2.21 8.29 L 9.64 8.39 L 12.51 1.54 L 14.70 8.64 Z"
      }
    ]
  ]
};

export const XilofagoPaw = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.11 9.25 L 16.03 13.53 L 17.74 20.76 L 11.79 16.31 L 5.44 20.17 L 7.84 13.13 L 2.21 8.29 L 9.64 8.39 L 12.51 1.54 L 14.70 8.64 Z" />
      {children}
    </svg>
  );
});

export default XilofagoPaw;
