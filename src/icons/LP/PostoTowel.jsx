import React from 'react';

export const iconData = {
  "id": "PostoTowel",
  "name": "PostoTowel",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.65 10.14 L 16.03 14.73 L 13.86 21.65 L 9.27 16.03 L 2.35 13.86 L 7.97 9.27 L 10.14 2.35 L 14.73 7.97 Z"
      }
    ]
  ]
};

export const PostoTowel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.65 10.14 L 16.03 14.73 L 13.86 21.65 L 9.27 16.03 L 2.35 13.86 L 7.97 9.27 L 10.14 2.35 L 14.73 7.97 Z" />
      {children}
    </svg>
  );
});

export default PostoTowel;
