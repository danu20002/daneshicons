import React from 'react';

export const iconData = {
  "id": "RevolChapter",
  "name": "RevolChapter",
  "category": "YR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.23 19.35 L 2.03 11.28 L 6.35 3.76 L 14.92 2.44 L 21.29 8.32 L 20.67 16.97 L 13.52 21.88 Z"
      }
    ]
  ]
};

export const RevolChapter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.23 19.35 L 2.03 11.28 L 6.35 3.76 L 14.92 2.44 L 21.29 8.32 L 20.67 16.97 L 13.52 21.88 Z" />
      {children}
    </svg>
  );
});

export default RevolChapter;
