import React from 'react';

export const iconData = {
  "id": "UndosoDoctor",
  "name": "UndosoDoctor",
  "category": "WM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.26 7.24 L 10.89 2.98 L 18.36 5.51 L 21.04 12.93 L 16.91 19.64 L 9.08 20.61 L 3.45 15.09 Z"
      }
    ]
  ]
};

export const UndosoDoctor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.26 7.24 L 10.89 2.98 L 18.36 5.51 L 21.04 12.93 L 16.91 19.64 L 9.08 20.61 L 3.45 15.09 Z" />
      {children}
    </svg>
  );
});

export default UndosoDoctor;
