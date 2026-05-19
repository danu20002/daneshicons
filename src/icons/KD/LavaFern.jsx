import React from 'react';

export const iconData = {
  "id": "LavaFern",
  "name": "LavaFern",
  "category": "KD",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.46 11.87 L 16.64 14.60 L 17.34 20.99 L 12.07 17.32 L 6.88 21.12 L 7.43 14.71 L 1.54 12.13 L 7.36 9.40 L 6.66 3.01 L 11.93 6.68 L 17.12 2.88 L 16.57 9.29 Z"
      }
    ]
  ]
};

export const LavaFern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.46 11.87 L 16.64 14.60 L 17.34 20.99 L 12.07 17.32 L 6.88 21.12 L 7.43 14.71 L 1.54 12.13 L 7.36 9.40 L 6.66 3.01 L 11.93 6.68 L 17.12 2.88 L 16.57 9.29 Z" />
      {children}
    </svg>
  );
});

export default LavaFern;
