import React from 'react';

export const iconData = {
  "id": "HorizoLone",
  "name": "HorizoLone",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.44 3.94 L 15.22 11.07 L 20.06 16.44 L 12.93 15.22 L 7.56 20.06 L 8.78 12.93 L 3.94 7.56 L 11.07 8.78 Z"
      }
    ]
  ]
};

export const HorizoLone = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.44 3.94 L 15.22 11.07 L 20.06 16.44 L 12.93 15.22 L 7.56 20.06 L 8.78 12.93 L 3.94 7.56 L 11.07 8.78 Z" />
      {children}
    </svg>
  );
});

export default HorizoLone;
