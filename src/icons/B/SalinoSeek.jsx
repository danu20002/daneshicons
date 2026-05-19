import React from 'react';

export const iconData = {
  "id": "SalinoSeek",
  "name": "SalinoSeek",
  "category": "B",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.99 4.47 L 15.19 4.55 L 19.53 8.99 L 19.45 15.19 L 15.01 19.53 L 8.81 19.45 L 4.47 15.01 L 4.55 8.81 Z"
      }
    ]
  ]
};

export const SalinoSeek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.99 4.47 L 15.19 4.55 L 19.53 8.99 L 19.45 15.19 L 15.01 19.53 L 8.81 19.45 L 4.47 15.01 L 4.55 8.81 Z" />
      {children}
    </svg>
  );
});

export default SalinoSeek;
