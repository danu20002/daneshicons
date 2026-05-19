import React from 'react';

export const iconData = {
  "id": "VezzoSkill",
  "name": "VezzoSkill",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.01 4.93 L 13.17 2.12 L 20.45 6.76 L 21.37 15.34 L 15.23 21.41 L 6.66 20.39 L 2.11 13.06 Z"
      }
    ]
  ]
};

export const VezzoSkill = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.01 4.93 L 13.17 2.12 L 20.45 6.76 L 21.37 15.34 L 15.23 21.41 L 6.66 20.39 L 2.11 13.06 Z" />
      {children}
    </svg>
  );
});

export default VezzoSkill;
