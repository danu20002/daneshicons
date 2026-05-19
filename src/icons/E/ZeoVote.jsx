import React from 'react';

export const iconData = {
  "id": "ZeoVote",
  "name": "ZeoVote",
  "category": "E",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.19 7.19 L 16.33 12.18 L 20.76 17.55 L 14.01 15.84 L 11.57 22.36 L 9.68 15.66 L 2.81 16.81 L 7.67 11.82 L 3.24 6.45 L 9.99 8.16 L 12.43 1.64 L 14.32 8.34 Z"
      }
    ]
  ]
};

export const ZeoVote = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.19 7.19 L 16.33 12.18 L 20.76 17.55 L 14.01 15.84 L 11.57 22.36 L 9.68 15.66 L 2.81 16.81 L 7.67 11.82 L 3.24 6.45 L 9.99 8.16 L 12.43 1.64 L 14.32 8.34 Z" />
      {children}
    </svg>
  );
});

export default ZeoVote;
