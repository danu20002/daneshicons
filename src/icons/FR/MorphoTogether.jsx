import React from 'react';

export const iconData = {
  "id": "MorphoTogether",
  "name": "MorphoTogether",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.88 16.49 L 9.86 19.93 L 3.79 12.41 L 9.07 4.32 L 18.40 6.84 Z"
      }
    ]
  ]
};

export const MorphoTogether = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.88 16.49 L 9.86 19.93 L 3.79 12.41 L 9.07 4.32 L 18.40 6.84 Z" />
      {children}
    </svg>
  );
});

export default MorphoTogether;
