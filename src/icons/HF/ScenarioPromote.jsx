import React from 'react';

export const iconData = {
  "id": "ScenarioPromote",
  "name": "ScenarioPromote",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.00 19.32 L 7.12 11.20 L 8.66 3.14 L 15.13 8.18 L 21.34 13.54 L 13.74 16.62 Z"
      }
    ]
  ]
};

export const ScenarioPromote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.00 19.32 L 7.12 11.20 L 8.66 3.14 L 15.13 8.18 L 21.34 13.54 L 13.74 16.62 Z" />
      {children}
    </svg>
  );
});

export default ScenarioPromote;
