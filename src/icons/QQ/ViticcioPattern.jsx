import React from 'react';

export const iconData = {
  "id": "ViticcioPattern",
  "name": "ViticcioPattern",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.25 5.91 L 12.55 2.93 L 19.44 6.78 L 20.72 14.56 L 15.44 20.41 L 7.57 19.93 L 3.03 13.48 Z"
      }
    ]
  ]
};

export const ViticcioPattern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.25 5.91 L 12.55 2.93 L 19.44 6.78 L 20.72 14.56 L 15.44 20.41 L 7.57 19.93 L 3.03 13.48 Z" />
      {children}
    </svg>
  );
});

export default ViticcioPattern;
