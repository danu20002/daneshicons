import React from 'react';

export const iconData = {
  "id": "SphingoTell",
  "name": "SphingoTell",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.54 2.77 L 14.32 7.89 L 22.72 11.89 L 14.40 16.06 L 6.74 21.34 L 7.28 12.05 Z"
      }
    ]
  ]
};

export const SphingoTell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.54 2.77 L 14.32 7.89 L 22.72 11.89 L 14.40 16.06 L 6.74 21.34 L 7.28 12.05 Z" />
      {children}
    </svg>
  );
});

export default SphingoTell;
