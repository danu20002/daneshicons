import React from 'react';

export const iconData = {
  "id": "ScenarioIntro",
  "name": "ScenarioIntro",
  "category": "BW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.46 6.09 L 20.54 6.09 L 20.54 17.91 L 3.46 17.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.46 6.09 L 6.67 2.89 L 23.74 2.89 L 20.54 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 20.54 6.09 L 23.74 2.89 L 23.74 14.71 L 20.54 17.91"
      }
    ]
  ]
};

export const ScenarioIntro = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.46 6.09 L 20.54 6.09 L 20.54 17.91 L 3.46 17.91 Z" />
      <path d="M 3.46 6.09 L 6.67 2.89 L 23.74 2.89 L 20.54 6.09" />
      <path d="M 20.54 6.09 L 23.74 2.89 L 23.74 14.71 L 20.54 17.91" />
      {children}
    </svg>
  );
});

export default ScenarioIntro;
