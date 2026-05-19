import React from 'react';

export const iconData = {
  "id": "TextuProject",
  "name": "TextuProject",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.34 2.66 L 16.42 10.23 L 19.42 17.83 L 11.32 16.72 L 3.24 15.51 L 8.25 9.06 Z"
      }
    ]
  ]
};

export const TextuProject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.34 2.66 L 16.42 10.23 L 19.42 17.83 L 11.32 16.72 L 3.24 15.51 L 8.25 9.06 Z" />
      {children}
    </svg>
  );
});

export default TextuProject;
