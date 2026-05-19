import React from 'react';

export const iconData = {
  "id": "TaurePost",
  "name": "TaurePost",
  "category": "CR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.13 10.39 L 9.33 19.85 L 6.54 5.76 Z"
      }
    ]
  ]
};

export const TaurePost = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.13 10.39 L 9.33 19.85 L 6.54 5.76 Z" />
      {children}
    </svg>
  );
});

export default TaurePost;
