import React from 'react';

export const iconData = {
  "id": "MidnightRevenge",
  "name": "MidnightRevenge",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.77 3.52 L 17.15 11.94 L 16.96 20.37 L 9.47 16.49 L 2.27 12.11 L 9.38 7.57 Z"
      }
    ]
  ]
};

export const MidnightRevenge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.77 3.52 L 17.15 11.94 L 16.96 20.37 L 9.47 16.49 L 2.27 12.11 L 9.38 7.57 Z" />
      {children}
    </svg>
  );
});

export default MidnightRevenge;
