import React from 'react';

export const iconData = {
  "id": "KleptoBreach",
  "name": "KleptoBreach",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.79 21.14 L 4.68 17.61 L 2.86 10.79 L 6.39 4.68 L 13.21 2.86 L 19.32 6.39 L 21.14 13.21 L 17.61 19.32 Z"
      }
    ]
  ]
};

export const KleptoBreach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.79 21.14 L 4.68 17.61 L 2.86 10.79 L 6.39 4.68 L 13.21 2.86 L 19.32 6.39 L 21.14 13.21 L 17.61 19.32 Z" />
      {children}
    </svg>
  );
});

export default KleptoBreach;
