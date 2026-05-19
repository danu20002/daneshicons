import React from 'react';

export const iconData = {
  "id": "TrasfigProvision",
  "name": "TrasfigProvision",
  "category": "XY",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.84 5.65 L 19.85 15.59 L 11.01 20.57 L 3.54 13.71 L 7.76 4.48 Z"
      }
    ]
  ]
};

export const TrasfigProvision = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.84 5.65 L 19.85 15.59 L 11.01 20.57 L 3.54 13.71 L 7.76 4.48 Z" />
      {children}
    </svg>
  );
});

export default TrasfigProvision;
