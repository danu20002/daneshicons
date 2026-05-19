import React from 'react';

export const iconData = {
  "id": "VillicoRecall",
  "name": "VillicoRecall",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.56 2.32 L 15.35 9.01 L 21.68 12.56 L 14.99 15.35 L 11.44 21.68 L 8.65 14.99 L 2.32 11.44 L 9.01 8.65 Z"
      }
    ]
  ]
};

export const VillicoRecall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.56 2.32 L 15.35 9.01 L 21.68 12.56 L 14.99 15.35 L 11.44 21.68 L 8.65 14.99 L 2.32 11.44 L 9.01 8.65 Z" />
      {children}
    </svg>
  );
});

export default VillicoRecall;
