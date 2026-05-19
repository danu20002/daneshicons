import React from 'react';

export const iconData = {
  "id": "ScenarioWait",
  "name": "ScenarioWait",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.55 19.42 L 7.35 18.78 L 3.80 11.36 L 8.45 4.58 L 16.65 5.22 L 20.20 12.64 Z"
      }
    ]
  ]
};

export const ScenarioWait = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.55 19.42 L 7.35 18.78 L 3.80 11.36 L 8.45 4.58 L 16.65 5.22 L 20.20 12.64 Z" />
      {children}
    </svg>
  );
});

export default ScenarioWait;
