import React from 'react';

export const iconData = {
  "id": "UndatoService",
  "name": "UndatoService",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.98 15.71 L 7.40 9.89 L 8.29 1.98 L 14.11 7.40 L 22.02 8.29 L 16.60 14.11 L 15.71 22.02 L 9.89 16.60 Z"
      }
    ]
  ]
};

export const UndatoService = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.98 15.71 L 7.40 9.89 L 8.29 1.98 L 14.11 7.40 L 22.02 8.29 L 16.60 14.11 L 15.71 22.02 L 9.89 16.60 Z" />
      {children}
    </svg>
  );
});

export default UndatoService;
