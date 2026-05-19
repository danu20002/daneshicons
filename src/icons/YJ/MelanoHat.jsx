import React from 'react';

export const iconData = {
  "id": "MelanoHat",
  "name": "MelanoHat",
  "category": "YJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.09 8.40 4.25 4.75 Q 7.10 5.86 9.95 6.96 Q 14.74 7.28 19.53 7.60 Q 17.73 9.82 15.94 12.04 Z"
      }
    ]
  ]
};

export const MelanoHat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.09 8.40 4.25 4.75 Q 7.10 5.86 9.95 6.96 Q 14.74 7.28 19.53 7.60 Q 17.73 9.82 15.94 12.04 Z" />
      {children}
    </svg>
  );
});

export default MelanoHat;
