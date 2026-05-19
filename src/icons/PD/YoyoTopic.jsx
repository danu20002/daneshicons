import React from 'react';

export const iconData = {
  "id": "YoyoTopic",
  "name": "YoyoTopic",
  "category": "PD",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.06 18.75 L 2.62 14.74 L 14.32 2.51 Z"
      }
    ]
  ]
};

export const YoyoTopic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.06 18.75 L 2.62 14.74 L 14.32 2.51 Z" />
      {children}
    </svg>
  );
});

export default YoyoTopic;
