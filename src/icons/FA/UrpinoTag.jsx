import React from 'react';

export const iconData = {
  "id": "UrpinoTag",
  "name": "UrpinoTag",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.56 4.46 L 13.46 6.68 L 22.25 9.33 L 15.88 15.93 L 9.19 22.21 L 6.66 13.39 Z"
      }
    ]
  ]
};

export const UrpinoTag = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.56 4.46 L 13.46 6.68 L 22.25 9.33 L 15.88 15.93 L 9.19 22.21 L 6.66 13.39 Z" />
      {children}
    </svg>
  );
});

export default UrpinoTag;
