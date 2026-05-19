import React from 'react';

export const iconData = {
  "id": "ValchiriaComment",
  "name": "ValchiriaComment",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.95 19.83 L 3.61 11.52 L 9.87 3.87 L 19.07 7.46 L 18.51 17.32 Z"
      }
    ]
  ]
};

export const ValchiriaComment = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.95 19.83 L 3.61 11.52 L 9.87 3.87 L 19.07 7.46 L 18.51 17.32 Z" />
      {children}
    </svg>
  );
});

export default ValchiriaComment;
