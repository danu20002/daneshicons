import React from 'react';

export const iconData = {
  "id": "StibioProud",
  "name": "StibioProud",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.35 12.36 L 18.35 18.87 L 11.64 21.35 L 5.13 18.35 L 2.65 11.64 L 5.65 5.13 L 12.36 2.65 L 18.87 5.65 Z"
      }
    ]
  ]
};

export const StibioProud = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.35 12.36 L 18.35 18.87 L 11.64 21.35 L 5.13 18.35 L 2.65 11.64 L 5.65 5.13 L 12.36 2.65 L 18.87 5.65 Z" />
      {children}
    </svg>
  );
});

export default StibioProud;
