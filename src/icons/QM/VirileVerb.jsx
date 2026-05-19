import React from 'react';

export const iconData = {
  "id": "VirileVerb",
  "name": "VirileVerb",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.77 5.47 L 20.23 5.47 L 20.23 18.53 L 3.77 18.53 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 5.47 L 8.49 0.75 L 24.96 0.75 L 20.23 5.47"
      }
    ],
    [
      "path",
      {
        "d": "M 20.23 5.47 L 24.96 0.75 L 24.96 13.81 L 20.23 18.53"
      }
    ]
  ]
};

export const VirileVerb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.77 5.47 L 20.23 5.47 L 20.23 18.53 L 3.77 18.53 Z" />
      <path d="M 3.77 5.47 L 8.49 0.75 L 24.96 0.75 L 20.23 5.47" />
      <path d="M 20.23 5.47 L 24.96 0.75 L 24.96 13.81 L 20.23 18.53" />
      {children}
    </svg>
  );
});

export default VirileVerb;
