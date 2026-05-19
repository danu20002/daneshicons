import React from 'react';

export const iconData = {
  "id": "PyroCurtain",
  "name": "PyroCurtain",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.51 11.25 13.71 10.45 Q 15.42 10.95 17.12 11.44 Q 17.81 13.55 18.49 15.66 Q 11.71 13.96 4.93 12.25 Q 5.12 12.15 5.32 12.04 Z"
      }
    ]
  ]
};

export const PyroCurtain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.51 11.25 13.71 10.45 Q 15.42 10.95 17.12 11.44 Q 17.81 13.55 18.49 15.66 Q 11.71 13.96 4.93 12.25 Q 5.12 12.15 5.32 12.04 Z" />
      {children}
    </svg>
  );
});

export default PyroCurtain;
