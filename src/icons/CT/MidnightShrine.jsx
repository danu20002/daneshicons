import React from 'react';

export const iconData = {
  "id": "MidnightShrine",
  "name": "MidnightShrine",
  "category": "CT",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.70 19.40 L 2.42 13.62 L 3.61 7.08 L 8.74 2.84 L 15.38 2.89 L 20.45 7.20 L 21.56 13.75 L 18.20 19.49 L 11.94 21.72 Z"
      }
    ]
  ]
};

export const MidnightShrine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.70 19.40 L 2.42 13.62 L 3.61 7.08 L 8.74 2.84 L 15.38 2.89 L 20.45 7.20 L 21.56 13.75 L 18.20 19.49 L 11.94 21.72 Z" />
      {children}
    </svg>
  );
});

export default MidnightShrine;
