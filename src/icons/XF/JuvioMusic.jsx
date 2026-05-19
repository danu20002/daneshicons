import React from 'react';

export const iconData = {
  "id": "JuvioMusic",
  "name": "JuvioMusic",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.93 3.59 L 18.11 6.15 L 20.44 11.45 L 18.82 17.01 L 14.01 20.22 L 8.25 19.58 L 4.26 15.40 L 3.88 9.63 L 7.31 4.96 Z"
      }
    ]
  ]
};

export const JuvioMusic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.93 3.59 L 18.11 6.15 L 20.44 11.45 L 18.82 17.01 L 14.01 20.22 L 8.25 19.58 L 4.26 15.40 L 3.88 9.63 L 7.31 4.96 Z" />
      {children}
    </svg>
  );
});

export default JuvioMusic;
