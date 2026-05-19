import React from 'react';

export const iconData = {
  "id": "VaranoReverse",
  "name": "VaranoReverse",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.63 13.53 L 8.26 11.12 L 4.29 6.45 L 9.98 8.73 L 10.47 2.63 L 12.88 8.26 L 17.55 4.29 L 15.27 9.98 L 21.37 10.47 L 15.74 12.88 L 19.71 17.55 L 14.02 15.27 L 13.53 21.37 L 11.12 15.74 L 6.45 19.71 L 8.73 14.02 Z"
      }
    ]
  ]
};

export const VaranoReverse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.63 13.53 L 8.26 11.12 L 4.29 6.45 L 9.98 8.73 L 10.47 2.63 L 12.88 8.26 L 17.55 4.29 L 15.27 9.98 L 21.37 10.47 L 15.74 12.88 L 19.71 17.55 L 14.02 15.27 L 13.53 21.37 L 11.12 15.74 L 6.45 19.71 L 8.73 14.02 Z" />
      {children}
    </svg>
  );
});

export default VaranoReverse;
