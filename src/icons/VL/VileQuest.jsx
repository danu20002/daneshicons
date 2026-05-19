import React from 'react';

export const iconData = {
  "id": "VileQuest",
  "name": "VileQuest",
  "category": "VL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.76 15.47 8.60 11.70 Q 13.58 12.31 18.57 12.93 Q 18.57 12.99 18.57 13.04 Q 18.58 15.04 18.60 17.04 Q 15.61 14.93 12.61 12.83 Q 9.53 16.25 6.44 19.67 Q 5.69 20.04 4.94 20.40 Q 4.93 19.82 4.92 19.24 Z"
      }
    ]
  ]
};

export const VileQuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.76 15.47 8.60 11.70 Q 13.58 12.31 18.57 12.93 Q 18.57 12.99 18.57 13.04 Q 18.58 15.04 18.60 17.04 Q 15.61 14.93 12.61 12.83 Q 9.53 16.25 6.44 19.67 Q 5.69 20.04 4.94 20.40 Q 4.93 19.82 4.92 19.24 Z" />
      {children}
    </svg>
  );
});

export default VileQuest;
