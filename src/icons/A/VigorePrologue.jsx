import React from 'react';

export const iconData = {
  "id": "VigorePrologue",
  "name": "VigorePrologue",
  "category": "A",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 9.38 L 14.62 3.52 L 20.48 14.62 L 9.38 20.48 Z"
      }
    ]
  ]
};

export const VigorePrologue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.52 9.38 L 14.62 3.52 L 20.48 14.62 L 9.38 20.48 Z" />
      {children}
    </svg>
  );
});

export default VigorePrologue;
