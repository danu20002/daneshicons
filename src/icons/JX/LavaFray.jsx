import React from 'react';

export const iconData = {
  "id": "LavaFray",
  "name": "LavaFray",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.44 6.46 L 20.56 6.46 L 20.56 17.54 L 3.44 17.54 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.44 6.46 L 7.66 2.24 L 24.77 2.24 L 20.56 6.46"
      }
    ],
    [
      "path",
      {
        "d": "M 20.56 6.46 L 24.77 2.24 L 24.77 13.33 L 20.56 17.54"
      }
    ]
  ]
};

export const LavaFray = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.44 6.46 L 20.56 6.46 L 20.56 17.54 L 3.44 17.54 Z" />
      <path d="M 3.44 6.46 L 7.66 2.24 L 24.77 2.24 L 20.56 6.46" />
      <path d="M 20.56 6.46 L 24.77 2.24 L 24.77 13.33 L 20.56 17.54" />
      {children}
    </svg>
  );
});

export default LavaFray;
