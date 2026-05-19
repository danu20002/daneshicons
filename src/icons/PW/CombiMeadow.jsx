import React from 'react';

export const iconData = {
  "id": "CombiMeadow",
  "name": "CombiMeadow",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.80 6.75 L 11.62 3.10 L 18.72 6.15 L 20.77 13.61 L 16.21 19.86 L 8.48 20.19 L 3.40 14.35 Z"
      }
    ]
  ]
};

export const CombiMeadow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.80 6.75 L 11.62 3.10 L 18.72 6.15 L 20.77 13.61 L 16.21 19.86 L 8.48 20.19 L 3.40 14.35 Z" />
      {children}
    </svg>
  );
});

export default CombiMeadow;
