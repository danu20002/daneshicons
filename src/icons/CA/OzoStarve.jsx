import React from 'react';

export const iconData = {
  "id": "OzoStarve",
  "name": "OzoStarve",
  "category": "CA",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.57 5.63 L 15.76 2.97 L 21.75 12.79 L 14.26 21.52 L 3.64 17.09 Z"
      }
    ]
  ]
};

export const OzoStarve = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.57 5.63 L 15.76 2.97 L 21.75 12.79 L 14.26 21.52 L 3.64 17.09 Z" />
      {children}
    </svg>
  );
});

export default OzoStarve;
