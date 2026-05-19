import React from 'react';

export const iconData = {
  "id": "MaltoProcess",
  "name": "MaltoProcess",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.98 14.52 L 14.31 21.04 L 5.33 18.52 L 3.02 9.48 L 9.69 2.96 L 18.67 5.48 Z"
      }
    ]
  ]
};

export const MaltoProcess = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.98 14.52 L 14.31 21.04 L 5.33 18.52 L 3.02 9.48 L 9.69 2.96 L 18.67 5.48 Z" />
      {children}
    </svg>
  );
});

export default MaltoProcess;
