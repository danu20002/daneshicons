import React from 'react';

export const iconData = {
  "id": "VigileStool",
  "name": "VigileStool",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.58 2.61 L 19.76 6.48 L 21.39 13.58 L 17.52 19.76 L 10.42 21.39 L 4.24 17.52 L 2.61 10.42 L 6.48 4.24 Z"
      }
    ]
  ]
};

export const VigileStool = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.58 2.61 L 19.76 6.48 L 21.39 13.58 L 17.52 19.76 L 10.42 21.39 L 4.24 17.52 L 2.61 10.42 L 6.48 4.24 Z" />
      {children}
    </svg>
  );
});

export default VigileStool;
