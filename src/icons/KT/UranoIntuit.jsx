import React from 'react';

export const iconData = {
  "id": "UranoIntuit",
  "name": "UranoIntuit",
  "category": "KT",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.23 2.59 L 21.33 10.27 L 16.53 20.34 L 5.47 18.89 L 3.43 7.92 Z"
      }
    ]
  ]
};

export const UranoIntuit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.23 2.59 L 21.33 10.27 L 16.53 20.34 L 5.47 18.89 L 3.43 7.92 Z" />
      {children}
    </svg>
  );
});

export default UranoIntuit;
