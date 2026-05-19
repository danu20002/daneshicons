import React from 'react';

export const iconData = {
  "id": "SpiriSleep",
  "name": "SpiriSleep",
  "category": "MF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.06 6.54 L 17.46 5.06 L 18.94 17.46 L 6.54 18.94 Z"
      }
    ]
  ]
};

export const SpiriSleep = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.06 6.54 L 17.46 5.06 L 18.94 17.46 L 6.54 18.94 Z" />
      {children}
    </svg>
  );
});

export default SpiriSleep;
