import React from 'react';

export const iconData = {
  "id": "TitoloQuest",
  "name": "TitoloQuest",
  "category": "NS",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 13.84 L 5.69 7.04 L 11.95 3.97 L 18.24 6.95 L 19.84 13.73 L 15.53 19.21 L 8.57 19.26 Z"
      }
    ]
  ]
};

export const TitoloQuest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 13.84 L 5.69 7.04 L 11.95 3.97 L 18.24 6.95 L 19.84 13.73 L 15.53 19.21 L 8.57 19.26 Z" />
      {children}
    </svg>
  );
});

export default TitoloQuest;
