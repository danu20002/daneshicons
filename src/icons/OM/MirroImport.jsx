import React from 'react';

export const iconData = {
  "id": "MirroImport",
  "name": "MirroImport",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.13 5.16 L 11.01 8.32 L 14.49 2.63 L 14.69 9.30 L 21.36 9.47 L 15.69 12.98 L 18.87 18.84 L 12.99 15.68 L 9.51 21.37 L 9.31 14.70 L 2.64 14.53 L 8.31 11.02 Z"
      }
    ]
  ]
};

export const MirroImport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.13 5.16 L 11.01 8.32 L 14.49 2.63 L 14.69 9.30 L 21.36 9.47 L 15.69 12.98 L 18.87 18.84 L 12.99 15.68 L 9.51 21.37 L 9.31 14.70 L 2.64 14.53 L 8.31 11.02 Z" />
      {children}
    </svg>
  );
});

export default MirroImport;
