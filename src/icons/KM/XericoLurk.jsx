import React from 'react';

export const iconData = {
  "id": "XericoLurk",
  "name": "XericoLurk",
  "category": "KM",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.62 8.23 10.66 3.90 Q 15.47 3.97 20.29 4.04 Q 17.44 12.30 14.58 20.57 Q 12.59 16.56 10.59 12.55 Z"
      }
    ]
  ]
};

export const XericoLurk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.62 8.23 10.66 3.90 Q 15.47 3.97 20.29 4.04 Q 17.44 12.30 14.58 20.57 Q 12.59 16.56 10.59 12.55 Z" />
      {children}
    </svg>
  );
});

export default XericoLurk;
