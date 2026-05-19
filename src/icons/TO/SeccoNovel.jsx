import React from 'react';

export const iconData = {
  "id": "SeccoNovel",
  "name": "SeccoNovel",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.16 11.04 L 8.41 3.86 L 17.25 4.82 L 20.84 12.96 L 15.59 20.14 L 6.75 19.18 Z"
      }
    ]
  ]
};

export const SeccoNovel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.16 11.04 L 8.41 3.86 L 17.25 4.82 L 20.84 12.96 L 15.59 20.14 L 6.75 19.18 Z" />
      {children}
    </svg>
  );
});

export default SeccoNovel;
