import React from 'react';

export const iconData = {
  "id": "MidnightOld",
  "name": "MidnightOld",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.86 2.78 L 14.41 9.51 L 21.22 11.86 L 14.49 14.41 L 12.14 21.22 L 9.59 14.49 L 2.78 12.14 L 9.51 9.59 Z"
      }
    ]
  ]
};

export const MidnightOld = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.86 2.78 L 14.41 9.51 L 21.22 11.86 L 14.49 14.41 L 12.14 21.22 L 9.59 14.49 L 2.78 12.14 L 9.51 9.59 Z" />
      {children}
    </svg>
  );
});

export default MidnightOld;
