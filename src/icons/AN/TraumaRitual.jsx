import React from 'react';

export const iconData = {
  "id": "TraumaRitual",
  "name": "TraumaRitual",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.73 19.19 L 3.54 9.21 L 12.04 3.09 L 20.49 9.29 L 17.21 19.24 Z"
      }
    ]
  ]
};

export const TraumaRitual = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.73 19.19 L 3.54 9.21 L 12.04 3.09 L 20.49 9.29 L 17.21 19.24 Z" />
      {children}
    </svg>
  );
});

export default TraumaRitual;
