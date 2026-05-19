import React from 'react';

export const iconData = {
  "id": "CombiSwirl",
  "name": "CombiSwirl",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.32 22.61 L 8.06 14.86 L 1.39 10.32 L 9.14 8.06 L 13.68 1.39 L 15.94 9.14 L 22.61 13.68 L 14.86 15.94 Z"
      }
    ]
  ]
};

export const CombiSwirl = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.32 22.61 L 8.06 14.86 L 1.39 10.32 L 9.14 8.06 L 13.68 1.39 L 15.94 9.14 L 22.61 13.68 L 14.86 15.94 Z" />
      {children}
    </svg>
  );
});

export default CombiSwirl;
