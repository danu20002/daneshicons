import React from 'react';

export const iconData = {
  "id": "PomoDeputy",
  "name": "PomoDeputy",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.34 5.50 L 16.44 4.61 L 20.40 13.94 L 12.76 20.59 L 4.06 15.37 Z"
      }
    ]
  ]
};

export const PomoDeputy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.34 5.50 L 16.44 4.61 L 20.40 13.94 L 12.76 20.59 L 4.06 15.37 Z" />
      {children}
    </svg>
  );
});

export default PomoDeputy;
