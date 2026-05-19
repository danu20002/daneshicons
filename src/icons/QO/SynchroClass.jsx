import React from 'react';

export const iconData = {
  "id": "SynchroClass",
  "name": "SynchroClass",
  "category": "QO",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.85 6.95 L 12.30 2.42 L 20.45 7.47 L 20.15 17.05 L 11.70 21.58 L 3.55 16.53 Z"
      }
    ]
  ]
};

export const SynchroClass = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.85 6.95 L 12.30 2.42 L 20.45 7.47 L 20.15 17.05 L 11.70 21.58 L 3.55 16.53 Z" />
      {children}
    </svg>
  );
});

export default SynchroClass;
