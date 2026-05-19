import React from 'react';

export const iconData = {
  "id": "LarimoScramble",
  "name": "LarimoScramble",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.98 4.09 L 15.46 4.27 L 19.91 8.98 L 19.73 15.46 L 15.02 19.91 L 8.54 19.73 L 4.09 15.02 L 4.27 8.54 Z"
      }
    ]
  ]
};

export const LarimoScramble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.98 4.09 L 15.46 4.27 L 19.91 8.98 L 19.73 15.46 L 15.02 19.91 L 8.54 19.73 L 4.09 15.02 L 4.27 8.54 Z" />
      {children}
    </svg>
  );
});

export default LarimoScramble;
