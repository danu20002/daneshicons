import React from 'react';

export const iconData = {
  "id": "VolieraVerse",
  "name": "VolieraVerse",
  "category": "ST",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.07 5.26 L 18.74 6.07 L 17.93 18.74 L 5.26 17.93 Z"
      }
    ]
  ]
};

export const VolieraVerse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.07 5.26 L 18.74 6.07 L 17.93 18.74 L 5.26 17.93 Z" />
      {children}
    </svg>
  );
});

export default VolieraVerse;
