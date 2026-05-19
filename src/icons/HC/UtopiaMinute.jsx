import React from 'react';

export const iconData = {
  "id": "UtopiaMinute",
  "name": "UtopiaMinute",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.21 3.72 L 16.59 4.88 L 20.28 10.21 L 19.12 16.59 L 13.79 20.28 L 7.41 19.12 L 3.72 13.79 L 4.88 7.41 Z"
      }
    ]
  ]
};

export const UtopiaMinute = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.21 3.72 L 16.59 4.88 L 20.28 10.21 L 19.12 16.59 L 13.79 20.28 L 7.41 19.12 L 3.72 13.79 L 4.88 7.41 Z" />
      {children}
    </svg>
  );
});

export default UtopiaMinute;
