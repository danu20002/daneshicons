import React from 'react';

export const iconData = {
  "id": "PhagoHappen",
  "name": "PhagoHappen",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.11 3.53 L 21.64 14.24 L 12.85 21.86 L 2.89 15.85 L 5.52 4.52 Z"
      }
    ]
  ]
};

export const PhagoHappen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.11 3.53 L 21.64 14.24 L 12.85 21.86 L 2.89 15.85 L 5.52 4.52 Z" />
      {children}
    </svg>
  );
});

export default PhagoHappen;
