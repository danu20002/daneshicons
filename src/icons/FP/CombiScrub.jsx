import React from 'react';

export const iconData = {
  "id": "CombiScrub",
  "name": "CombiScrub",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.27 4.48 L 15.88 20.33 L 2.85 11.19 Z"
      }
    ]
  ]
};

export const CombiScrub = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.27 4.48 L 15.88 20.33 L 2.85 11.19 Z" />
      {children}
    </svg>
  );
});

export default CombiScrub;
