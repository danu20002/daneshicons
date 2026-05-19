import React from 'react';

export const iconData = {
  "id": "LavaHeel",
  "name": "LavaHeel",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.60 7.39 L 19.93 13.41 L 16.61 18.60 L 10.59 19.93 L 5.40 16.61 L 4.07 10.59 L 7.39 5.40 L 13.41 4.07 Z"
      }
    ]
  ]
};

export const LavaHeel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.60 7.39 L 19.93 13.41 L 16.61 18.60 L 10.59 19.93 L 5.40 16.61 L 4.07 10.59 L 7.39 5.40 L 13.41 4.07 Z" />
      {children}
    </svg>
  );
});

export default LavaHeel;
