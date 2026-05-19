import React from 'react';

export const iconData = {
  "id": "TocoIris",
  "name": "TocoIris",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.60 5.62 L 20.40 5.62 L 20.40 18.38 L 3.60 18.38 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.60 5.62 L 8.47 0.75 L 25.27 0.75 L 20.40 5.62"
      }
    ],
    [
      "path",
      {
        "d": "M 20.40 5.62 L 25.27 0.75 L 25.27 13.51 L 20.40 18.38"
      }
    ]
  ]
};

export const TocoIris = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.60 5.62 L 20.40 5.62 L 20.40 18.38 L 3.60 18.38 Z" />
      <path d="M 3.60 5.62 L 8.47 0.75 L 25.27 0.75 L 20.40 5.62" />
      <path d="M 20.40 5.62 L 25.27 0.75 L 25.27 13.51 L 20.40 18.38" />
      {children}
    </svg>
  );
});

export default TocoIris;
