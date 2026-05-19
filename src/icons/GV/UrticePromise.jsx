import React from 'react';

export const iconData = {
  "id": "UrticePromise",
  "name": "UrticePromise",
  "category": "GV",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.68 13.01 18.49 8.57 Q 19.69 8.22 20.89 7.87 Q 20.75 14.30 20.62 20.73 Q 19.10 19.41 17.59 18.10 Q 17.21 18.26 16.83 18.42 Q 11.85 17.93 6.88 17.44 Z"
      }
    ]
  ]
};

export const UrticePromise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.68 13.01 18.49 8.57 Q 19.69 8.22 20.89 7.87 Q 20.75 14.30 20.62 20.73 Q 19.10 19.41 17.59 18.10 Q 17.21 18.26 16.83 18.42 Q 11.85 17.93 6.88 17.44 Z" />
      {children}
    </svg>
  );
});

export default UrticePromise;
