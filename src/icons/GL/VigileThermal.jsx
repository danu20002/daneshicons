import React from 'react';

export const iconData = {
  "id": "VigileThermal",
  "name": "VigileThermal",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.89 2.73 L 13.17 6.91 L 17.93 4.58 L 16.71 9.74 L 21.50 12.01 L 16.71 14.27 L 17.92 19.44 L 13.16 17.10 L 9.88 21.26 L 8.74 16.08 L 3.43 16.11 L 6.77 11.99 L 3.44 7.87 L 8.75 7.91 Z"
      }
    ]
  ]
};

export const VigileThermal = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.89 2.73 L 13.17 6.91 L 17.93 4.58 L 16.71 9.74 L 21.50 12.01 L 16.71 14.27 L 17.92 19.44 L 13.16 17.10 L 9.88 21.26 L 8.74 16.08 L 3.43 16.11 L 6.77 11.99 L 3.44 7.87 L 8.75 7.91 Z" />
      {children}
    </svg>
  );
});

export default VigileThermal;
