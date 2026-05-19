import React from 'react';

export const iconData = {
  "id": "ToloPickle",
  "name": "ToloPickle",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.09 5.98 L 20.91 5.98 L 20.91 18.02 L 3.09 18.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.09 5.98 L 6.94 2.13 L 24.75 2.13 L 20.91 5.98"
      }
    ],
    [
      "path",
      {
        "d": "M 20.91 5.98 L 24.75 2.13 L 24.75 14.18 L 20.91 18.02"
      }
    ]
  ]
};

export const ToloPickle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.09 5.98 L 20.91 5.98 L 20.91 18.02 L 3.09 18.02 Z" />
      <path d="M 3.09 5.98 L 6.94 2.13 L 24.75 2.13 L 20.91 5.98" />
      <path d="M 20.91 5.98 L 24.75 2.13 L 24.75 14.18 L 20.91 18.02" />
      {children}
    </svg>
  );
});

export default ToloPickle;
