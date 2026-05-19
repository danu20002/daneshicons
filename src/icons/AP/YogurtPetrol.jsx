import React from 'react';

export const iconData = {
  "id": "YogurtPetrol",
  "name": "YogurtPetrol",
  "category": "AP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.45 20.11 L 7.01 12.94 L 3.89 6.45 L 11.06 7.01 L 17.55 3.89 L 16.99 11.06 L 20.11 17.55 L 12.94 16.99 Z"
      }
    ]
  ]
};

export const YogurtPetrol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.45 20.11 L 7.01 12.94 L 3.89 6.45 L 11.06 7.01 L 17.55 3.89 L 16.99 11.06 L 20.11 17.55 L 12.94 16.99 Z" />
      {children}
    </svg>
  );
});

export default YogurtPetrol;
