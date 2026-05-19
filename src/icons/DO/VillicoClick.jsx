import React from 'react';

export const iconData = {
  "id": "VillicoClick",
  "name": "VillicoClick",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.06 14.01 L 8.41 7.93 L 15.23 2.39 L 17.31 10.93 L 18.71 19.61 L 10.27 17.14 Z"
      }
    ]
  ]
};

export const VillicoClick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.06 14.01 L 8.41 7.93 L 15.23 2.39 L 17.31 10.93 L 18.71 19.61 L 10.27 17.14 Z" />
      {children}
    </svg>
  );
});

export default VillicoClick;
