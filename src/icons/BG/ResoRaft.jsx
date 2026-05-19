import React from 'react';

export const iconData = {
  "id": "ResoRaft",
  "name": "ResoRaft",
  "category": "BG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 14.11 L 5.98 5.79 L 14.36 3.68 L 20.39 9.89 L 18.02 18.21 L 9.64 20.32 Z"
      }
    ]
  ]
};

export const ResoRaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 14.11 L 5.98 5.79 L 14.36 3.68 L 20.39 9.89 L 18.02 18.21 L 9.64 20.32 Z" />
      {children}
    </svg>
  );
});

export default ResoRaft;
