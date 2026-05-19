import React from 'react';

export const iconData = {
  "id": "RotoWarp",
  "name": "RotoWarp",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.08 10.91 L 6.67 3.57 L 15.27 2.58 L 21.41 8.68 L 20.46 17.28 L 13.14 21.91 L 4.97 19.07 Z"
      }
    ]
  ]
};

export const RotoWarp = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.08 10.91 L 6.67 3.57 L 15.27 2.58 L 21.41 8.68 L 20.46 17.28 L 13.14 21.91 L 4.97 19.07 Z" />
      {children}
    </svg>
  );
});

export default RotoWarp;
