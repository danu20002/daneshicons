import React from 'react';

export const iconData = {
  "id": "MisoScramble",
  "name": "MisoScramble",
  "category": "HD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 16.65 L 5.00 5.51 L 16.01 3.34 L 21.47 13.14 L 13.84 21.36 Z"
      }
    ]
  ]
};

export const MisoScramble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 16.65 L 5.00 5.51 L 16.01 3.34 L 21.47 13.14 L 13.84 21.36 Z" />
      {children}
    </svg>
  );
});

export default MisoScramble;
