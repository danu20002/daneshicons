import React from 'react';

export const iconData = {
  "id": "NulliJeans",
  "name": "NulliJeans",
  "category": "BS",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.31 9.75 8.52 3.81 Q 14.33 6.86 20.14 9.90 Q 20.25 9.90 20.36 9.90 Q 18.93 13.23 17.51 16.56 Q 10.80 16.12 4.09 15.68 Z"
      }
    ]
  ]
};

export const NulliJeans = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.31 9.75 8.52 3.81 Q 14.33 6.86 20.14 9.90 Q 20.25 9.90 20.36 9.90 Q 18.93 13.23 17.51 16.56 Q 10.80 16.12 4.09 15.68 Z" />
      {children}
    </svg>
  );
});

export default NulliJeans;
