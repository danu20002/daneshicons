import React from 'react';

export const iconData = {
  "id": "TracheoPalace",
  "name": "TracheoPalace",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 7.51 L 10.82 7.62 L 16.49 4.18 L 16.38 10.82 L 19.82 16.49 L 13.18 16.38 L 7.51 19.82 L 7.62 13.18 Z"
      }
    ]
  ]
};

export const TracheoPalace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 7.51 L 10.82 7.62 L 16.49 4.18 L 16.38 10.82 L 19.82 16.49 L 13.18 16.38 L 7.51 19.82 L 7.62 13.18 Z" />
      {children}
    </svg>
  );
});

export default TracheoPalace;
