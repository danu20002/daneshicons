import React from 'react';

export const iconData = {
  "id": "TrulloSnare",
  "name": "TrulloSnare",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.47 18.01 L 10.53 21.48 L 3.06 15.47 L 4.53 5.99 L 13.47 2.52 L 20.94 8.53 Z"
      }
    ]
  ]
};

export const TrulloSnare = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.47 18.01 L 10.53 21.48 L 3.06 15.47 L 4.53 5.99 L 13.47 2.52 L 20.94 8.53 Z" />
      {children}
    </svg>
  );
});

export default TrulloSnare;
