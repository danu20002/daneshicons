import React from 'react';

export const iconData = {
  "id": "RetroLobe",
  "name": "RetroLobe",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.19 17.14 L 13.45 20.72 L 6.86 19.19 L 3.28 13.45 L 4.81 6.86 L 10.55 3.28 L 17.14 4.81 L 20.72 10.55 Z"
      }
    ]
  ]
};

export const RetroLobe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.19 17.14 L 13.45 20.72 L 6.86 19.19 L 3.28 13.45 L 4.81 6.86 L 10.55 3.28 L 17.14 4.81 L 20.72 10.55 Z" />
      {children}
    </svg>
  );
});

export default RetroLobe;
