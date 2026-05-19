import React from 'react';

export const iconData = {
  "id": "SacroFloat",
  "name": "SacroFloat",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.54 2.46 L 21.24 9.56 L 17.17 20.04 L 5.95 19.40 L 3.09 8.54 Z"
      }
    ]
  ]
};

export const SacroFloat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.54 2.46 L 21.24 9.56 L 17.17 20.04 L 5.95 19.40 L 3.09 8.54 Z" />
      {children}
    </svg>
  );
});

export default SacroFloat;
