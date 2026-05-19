import React from 'react';

export const iconData = {
  "id": "ScudoCouple",
  "name": "ScudoCouple",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.44 17.09 L 3.05 10.25 L 6.91 4.44 L 13.75 3.05 L 19.56 6.91 L 20.95 13.75 L 17.09 19.56 L 10.25 20.95 Z"
      }
    ]
  ]
};

export const ScudoCouple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.44 17.09 L 3.05 10.25 L 6.91 4.44 L 13.75 3.05 L 19.56 6.91 L 20.95 13.75 L 17.09 19.56 L 10.25 20.95 Z" />
      {children}
    </svg>
  );
});

export default ScudoCouple;
