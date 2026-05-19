import React from 'react';

export const iconData = {
  "id": "TrajectoRaft",
  "name": "TrajectoRaft",
  "category": "GM",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.99 20.64 L 7.00 11.58 L 7.52 2.48 L 14.86 7.88 L 22.49 12.88 L 14.14 16.54 Z"
      }
    ]
  ]
};

export const TrajectoRaft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.99 20.64 L 7.00 11.58 L 7.52 2.48 L 14.86 7.88 L 22.49 12.88 L 14.14 16.54 Z" />
      {children}
    </svg>
  );
});

export default TrajectoRaft;
