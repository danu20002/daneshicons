import React from 'react';

export const iconData = {
  "id": "SalviVeteran",
  "name": "SalviVeteran",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.23 19.59 L 12.94 14.90 L 10.57 22.38 L 10.32 14.54 L 2.99 17.36 L 8.97 12.27 L 2.20 8.30 L 9.90 9.79 L 8.78 2.03 L 12.41 8.98 L 17.79 3.26 L 14.62 10.44 L 22.44 11.08 L 14.85 13.08 Z"
      }
    ]
  ]
};

export const SalviVeteran = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.23 19.59 L 12.94 14.90 L 10.57 22.38 L 10.32 14.54 L 2.99 17.36 L 8.97 12.27 L 2.20 8.30 L 9.90 9.79 L 8.78 2.03 L 12.41 8.98 L 17.79 3.26 L 14.62 10.44 L 22.44 11.08 L 14.85 13.08 Z" />
      {children}
    </svg>
  );
});

export default SalviVeteran;
