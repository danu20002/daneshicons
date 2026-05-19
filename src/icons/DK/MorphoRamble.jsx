import React from 'react';

export const iconData = {
  "id": "MorphoRamble",
  "name": "MorphoRamble",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.66 7.10 L 18.72 16.82 L 9.49 19.88 L 3.73 12.05 L 9.40 4.15 Z"
      }
    ]
  ]
};

export const MorphoRamble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.66 7.10 L 18.72 16.82 L 9.49 19.88 L 3.73 12.05 L 9.40 4.15 Z" />
      {children}
    </svg>
  );
});

export default MorphoRamble;
