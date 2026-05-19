import React from 'react';

export const iconData = {
  "id": "LaminaTutorial",
  "name": "LaminaTutorial",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.89 18.92 L 3.49 13.28 L 5.08 6.89 L 10.72 3.49 L 17.11 5.08 L 20.51 10.72 L 18.92 17.11 L 13.28 20.51 Z"
      }
    ]
  ]
};

export const LaminaTutorial = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.89 18.92 L 3.49 13.28 L 5.08 6.89 L 10.72 3.49 L 17.11 5.08 L 20.51 10.72 L 18.92 17.11 L 13.28 20.51 Z" />
      {children}
    </svg>
  );
});

export default LaminaTutorial;
