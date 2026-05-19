import React from 'react';

export const iconData = {
  "id": "PostoLoft",
  "name": "PostoLoft",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.31 9.84 L 9.03 2.52 L 18.72 4.69 L 21.69 14.16 L 14.97 21.48 L 5.28 19.31 Z"
      }
    ]
  ]
};

export const PostoLoft = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.31 9.84 L 9.03 2.52 L 18.72 4.69 L 21.69 14.16 L 14.97 21.48 L 5.28 19.31 Z" />
      {children}
    </svg>
  );
});

export default PostoLoft;
