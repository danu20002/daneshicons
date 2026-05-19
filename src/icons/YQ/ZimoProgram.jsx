import React from 'react';

export const iconData = {
  "id": "ZimoProgram",
  "name": "ZimoProgram",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.83 17.74 L 12.07 20.18 L 6.26 17.83 L 3.82 12.07 L 6.17 6.26 L 11.93 3.82 L 17.74 6.17 L 20.18 11.93 Z"
      }
    ]
  ]
};

export const ZimoProgram = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.83 17.74 L 12.07 20.18 L 6.26 17.83 L 3.82 12.07 L 6.17 6.26 L 11.93 3.82 L 17.74 6.17 L 20.18 11.93 Z" />
      {children}
    </svg>
  );
});

export default ZimoProgram;
