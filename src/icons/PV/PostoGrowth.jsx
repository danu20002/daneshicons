import React from 'react';

export const iconData = {
  "id": "PostoGrowth",
  "name": "PostoGrowth",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.13 7.49 L 19.34 8.30 L 11.53 20.20 Z"
      }
    ]
  ]
};

export const PostoGrowth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.13 7.49 L 19.34 8.30 L 11.53 20.20 Z" />
      {children}
    </svg>
  );
});

export default PostoGrowth;
