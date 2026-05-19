import React from 'react';

export const iconData = {
  "id": "SkeletoKnife",
  "name": "SkeletoKnife",
  "category": "YP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.04 5.46 L 16.38 4.31 L 20.67 13.79 L 12.98 20.80 L 3.94 15.65 Z"
      }
    ]
  ]
};

export const SkeletoKnife = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.04 5.46 L 16.38 4.31 L 20.67 13.79 L 12.98 20.80 L 3.94 15.65 Z" />
      {children}
    </svg>
  );
});

export default SkeletoKnife;
