import React from 'react';

export const iconData = {
  "id": "PhylloDecoy",
  "name": "PhylloDecoy",
  "category": "JI",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.72 9.43 L 18.08 17.40 L 10.36 19.97 L 4.28 14.57 L 5.92 6.60 L 13.64 4.03 Z"
      }
    ]
  ]
};

export const PhylloDecoy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.72 9.43 L 18.08 17.40 L 10.36 19.97 L 4.28 14.57 L 5.92 6.60 L 13.64 4.03 Z" />
      {children}
    </svg>
  );
});

export default PhylloDecoy;
