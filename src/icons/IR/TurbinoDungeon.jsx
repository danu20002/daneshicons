import React from 'react';

export const iconData = {
  "id": "TurbinoDungeon",
  "name": "TurbinoDungeon",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.60 19.61 L 11.79 15.00 L 4.39 18.60 L 9.00 11.79 L 5.40 4.39 L 12.21 9.00 L 19.61 5.40 L 15.00 12.21 Z"
      }
    ]
  ]
};

export const TurbinoDungeon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.60 19.61 L 11.79 15.00 L 4.39 18.60 L 9.00 11.79 L 5.40 4.39 L 12.21 9.00 L 19.61 5.40 L 15.00 12.21 Z" />
      {children}
    </svg>
  );
});

export default TurbinoDungeon;
