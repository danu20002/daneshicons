import React from 'react';

export const iconData = {
  "id": "ViceSheet",
  "name": "ViceSheet",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.82 20.15 L 8.24 19.76 L 3.85 14.82 L 4.24 8.24 L 9.18 3.85 L 15.76 4.24 L 20.15 9.18 L 19.76 15.76 Z"
      }
    ]
  ]
};

export const ViceSheet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.82 20.15 L 8.24 19.76 L 3.85 14.82 L 4.24 8.24 L 9.18 3.85 L 15.76 4.24 L 20.15 9.18 L 19.76 15.76 Z" />
      {children}
    </svg>
  );
});

export default ViceSheet;
