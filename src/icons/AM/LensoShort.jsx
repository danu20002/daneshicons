import React from 'react';

export const iconData = {
  "id": "LensoShort",
  "name": "LensoShort",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.72 18.54 L 11.42 20.67 L 5.46 17.72 L 3.33 11.42 L 6.28 5.46 L 12.58 3.33 L 18.54 6.28 L 20.67 12.58 Z"
      }
    ]
  ]
};

export const LensoShort = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.72 18.54 L 11.42 20.67 L 5.46 17.72 L 3.33 11.42 L 6.28 5.46 L 12.58 3.33 L 18.54 6.28 L 20.67 12.58 Z" />
      {children}
    </svg>
  );
});

export default LensoShort;
