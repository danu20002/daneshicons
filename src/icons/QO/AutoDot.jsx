import React from 'react';

export const iconData = {
  "id": "AutoDot",
  "name": "AutoDot",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.55 5.52 L 21.15 13.08 L 16.86 19.83 L 8.91 20.68 L 3.28 15.00 L 4.22 7.06 L 11.02 2.84 Z"
      }
    ]
  ]
};

export const AutoDot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.55 5.52 L 21.15 13.08 L 16.86 19.83 L 8.91 20.68 L 3.28 15.00 L 4.22 7.06 L 11.02 2.84 Z" />
      {children}
    </svg>
  );
});

export default AutoDot;
