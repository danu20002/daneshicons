import React from 'react';

export const iconData = {
  "id": "SubtilScene",
  "name": "SubtilScene",
  "category": "W",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.05 12.30 L 6.86 10.05 L 4.75 5.18 L 9.74 6.99 L 11.70 2.05 L 13.95 6.86 L 18.82 4.75 L 17.01 9.74 L 21.95 11.70 L 17.14 13.95 L 19.25 18.82 L 14.26 17.01 L 12.30 21.95 L 10.05 17.14 L 5.18 19.25 L 6.99 14.26 Z"
      }
    ]
  ]
};

export const SubtilScene = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.05 12.30 L 6.86 10.05 L 4.75 5.18 L 9.74 6.99 L 11.70 2.05 L 13.95 6.86 L 18.82 4.75 L 17.01 9.74 L 21.95 11.70 L 17.14 13.95 L 19.25 18.82 L 14.26 17.01 L 12.30 21.95 L 10.05 17.14 L 5.18 19.25 L 6.99 14.26 Z" />
      {children}
    </svg>
  );
});

export default SubtilScene;
