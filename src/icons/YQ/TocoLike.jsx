import React from 'react';

export const iconData = {
  "id": "TocoLike",
  "name": "TocoLike",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.93 20.86 L 6.29 19.83 L 2.36 10.97 L 8.07 3.14 L 17.71 4.17 L 21.64 13.03 Z"
      }
    ]
  ]
};

export const TocoLike = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.93 20.86 L 6.29 19.83 L 2.36 10.97 L 8.07 3.14 L 17.71 4.17 L 21.64 13.03 Z" />
      {children}
    </svg>
  );
});

export default TocoLike;
