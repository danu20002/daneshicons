import React from 'react';

export const iconData = {
  "id": "MuroOnus",
  "name": "MuroOnus",
  "category": "RF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.18 5.53 L 19.82 5.53 L 19.82 18.47 L 4.18 18.47 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.18 5.53 L 7.23 2.48 L 22.87 2.48 L 19.82 5.53"
      }
    ],
    [
      "path",
      {
        "d": "M 19.82 5.53 L 22.87 2.48 L 22.87 15.42 L 19.82 18.47"
      }
    ]
  ]
};

export const MuroOnus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.18 5.53 L 19.82 5.53 L 19.82 18.47 L 4.18 18.47 Z" />
      <path d="M 4.18 5.53 L 7.23 2.48 L 22.87 2.48 L 19.82 5.53" />
      <path d="M 19.82 5.53 L 22.87 2.48 L 22.87 15.42 L 19.82 18.47" />
      {children}
    </svg>
  );
});

export default MuroOnus;
