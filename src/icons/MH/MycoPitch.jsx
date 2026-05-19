import React from 'react';

export const iconData = {
  "id": "MycoPitch",
  "name": "MycoPitch",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.52 3.59 L 12.49 8.53 L 18.62 5.14 L 15.45 11.39 L 20.57 16.17 L 13.65 15.09 L 10.68 21.44 L 9.57 14.52 L 2.62 13.66 L 8.85 10.47 Z"
      }
    ]
  ]
};

export const MycoPitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.52 3.59 L 12.49 8.53 L 18.62 5.14 L 15.45 11.39 L 20.57 16.17 L 13.65 15.09 L 10.68 21.44 L 9.57 14.52 L 2.62 13.66 L 8.85 10.47 Z" />
      {children}
    </svg>
  );
});

export default MycoPitch;
