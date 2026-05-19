import React from 'react';

export const iconData = {
  "id": "VerdettoChapter",
  "name": "VerdettoChapter",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.35 10.73 L 16.10 20.50 L 5.18 18.52 L 3.69 7.53 L 13.68 2.72 Z"
      }
    ]
  ]
};

export const VerdettoChapter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.35 10.73 L 16.10 20.50 L 5.18 18.52 L 3.69 7.53 L 13.68 2.72 Z" />
      {children}
    </svg>
  );
});

export default VerdettoChapter;
