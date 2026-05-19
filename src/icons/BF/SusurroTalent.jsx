import React from 'react';

export const iconData = {
  "id": "SusurroTalent",
  "name": "SusurroTalent",
  "category": "BF",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.49 16.10 L 12.69 21.41 L 4.20 17.30 L 3.51 7.90 L 11.31 2.59 L 19.80 6.70 Z"
      }
    ]
  ]
};

export const SusurroTalent = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.49 16.10 L 12.69 21.41 L 4.20 17.30 L 3.51 7.90 L 11.31 2.59 L 19.80 6.70 Z" />
      {children}
    </svg>
  );
});

export default SusurroTalent;
