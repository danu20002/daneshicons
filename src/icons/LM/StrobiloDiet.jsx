import React from 'react';

export const iconData = {
  "id": "StrobiloDiet",
  "name": "StrobiloDiet",
  "category": "LM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.49 17.09 L 4.84 6.43 L 15.09 3.47 L 21.07 12.30 L 14.52 20.72 Z"
      }
    ]
  ]
};

export const StrobiloDiet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.49 17.09 L 4.84 6.43 L 15.09 3.47 L 21.07 12.30 L 14.52 20.72 Z" />
      {children}
    </svg>
  );
});

export default StrobiloDiet;
