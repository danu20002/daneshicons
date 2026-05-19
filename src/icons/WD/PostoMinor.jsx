import React from 'react';

export const iconData = {
  "id": "PostoMinor",
  "name": "PostoMinor",
  "category": "WD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.18 10.72 Q 12.19 10.47 21.61 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 14.21 19.11 L 11.73 5.77"
      }
    ]
  ]
};

export const PostoMinor = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.18 10.72 Q 12.19 10.47 21.61 19.39" />
      <path d="M 14.21 19.11 L 11.73 5.77" />
      {children}
    </svg>
  );
});

export default PostoMinor;
