import React from 'react';

export const iconData = {
  "id": "EpiBell",
  "name": "EpiBell",
  "category": "MR",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.03 12.25 19.70 9.16 Q 20.30 12.71 20.90 16.25 Q 18.80 17.17 16.70 18.09 Q 15.44 17.16 14.17 16.23 Q 9.08 17.82 3.98 19.42 Q 5.17 17.38 6.36 15.34 Z"
      }
    ]
  ]
};

export const EpiBell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.03 12.25 19.70 9.16 Q 20.30 12.71 20.90 16.25 Q 18.80 17.17 16.70 18.09 Q 15.44 17.16 14.17 16.23 Q 9.08 17.82 3.98 19.42 Q 5.17 17.38 6.36 15.34 Z" />
      {children}
    </svg>
  );
});

export default EpiBell;
