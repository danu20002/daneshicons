import React from 'react';

export const iconData = {
  "id": "PostoPrecision",
  "name": "PostoPrecision",
  "category": "DL",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.98 13.70 L 6.04 18.92 L 8.98 3.38 Z"
      }
    ]
  ]
};

export const PostoPrecision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.98 13.70 L 6.04 18.92 L 8.98 3.38 Z" />
      {children}
    </svg>
  );
});

export default PostoPrecision;
