import React from 'react';

export const iconData = {
  "id": "ScopoTuesday",
  "name": "ScopoTuesday",
  "category": "MV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.55 6.09 L 20.45 6.09 L 20.45 17.91 L 3.55 17.91 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.55 6.09 L 8.42 1.21 L 25.33 1.21 L 20.45 6.09"
      }
    ],
    [
      "path",
      {
        "d": "M 20.45 6.09 L 25.33 1.21 L 25.33 13.03 L 20.45 17.91"
      }
    ]
  ]
};

export const ScopoTuesday = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.55 6.09 L 20.45 6.09 L 20.45 17.91 L 3.55 17.91 Z" />
      <path d="M 3.55 6.09 L 8.42 1.21 L 25.33 1.21 L 20.45 6.09" />
      <path d="M 20.45 6.09 L 25.33 1.21 L 25.33 13.03 L 20.45 17.91" />
      {children}
    </svg>
  );
});

export default ScopoTuesday;
