import React from 'react';

export const iconData = {
  "id": "TotemUrgent",
  "name": "TotemUrgent",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.36 14.57 L 7.87 7.66 L 15.09 1.50 L 17.82 10.59 L 19.55 19.92 L 10.31 17.75 Z"
      }
    ]
  ]
};

export const TotemUrgent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.36 14.57 L 7.87 7.66 L 15.09 1.50 L 17.82 10.59 L 19.55 19.92 L 10.31 17.75 Z" />
      {children}
    </svg>
  );
});

export default TotemUrgent;
