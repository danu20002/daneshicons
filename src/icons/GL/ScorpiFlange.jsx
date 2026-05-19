import React from 'react';

export const iconData = {
  "id": "ScorpiFlange",
  "name": "ScorpiFlange",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.39 3.74 L 16.71 10.56 L 20.26 16.39 L 13.44 16.71 L 7.61 20.26 L 7.29 13.44 L 3.74 7.61 L 10.56 7.29 Z"
      }
    ]
  ]
};

export const ScorpiFlange = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.39 3.74 L 16.71 10.56 L 20.26 16.39 L 13.44 16.71 L 7.61 20.26 L 7.29 13.44 L 3.74 7.61 L 10.56 7.29 Z" />
      {children}
    </svg>
  );
});

export default ScorpiFlange;
