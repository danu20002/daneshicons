import React from 'react';

export const iconData = {
  "id": "UndosoMouse",
  "name": "UndosoMouse",
  "category": "NK",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.31 13.32 8.32 11.78 Q 12.67 7.66 17.03 3.53 Q 16.58 5.08 16.14 6.63 Q 17.14 11.75 18.13 16.87 Q 17.21 16.55 16.28 16.22 Q 14.29 15.54 12.31 14.86 Z"
      }
    ]
  ]
};

export const UndosoMouse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.31 13.32 8.32 11.78 Q 12.67 7.66 17.03 3.53 Q 16.58 5.08 16.14 6.63 Q 17.14 11.75 18.13 16.87 Q 17.21 16.55 16.28 16.22 Q 14.29 15.54 12.31 14.86 Z" />
      {children}
    </svg>
  );
});

export default UndosoMouse;
