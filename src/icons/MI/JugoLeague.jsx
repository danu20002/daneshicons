import React from 'react';

export const iconData = {
  "id": "JugoLeague",
  "name": "JugoLeague",
  "category": "MI",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.36 1.66 L 14.48 9.57 L 22.28 14.88 L 12.86 15.37 L 4.37 19.46 L 8.65 11.06 Z"
      }
    ]
  ]
};

export const JugoLeague = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.36 1.66 L 14.48 9.57 L 22.28 14.88 L 12.86 15.37 L 4.37 19.46 L 8.65 11.06 Z" />
      {children}
    </svg>
  );
});

export default JugoLeague;
