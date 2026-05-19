import React from 'react';

export const iconData = {
  "id": "StructoStyle",
  "name": "StructoStyle",
  "category": "TM",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.41 8.57 L 20.37 15.52 L 15.43 20.41 L 8.48 20.37 L 3.59 15.43 L 3.63 8.48 L 8.57 3.59 L 15.52 3.63 Z"
      }
    ]
  ]
};

export const StructoStyle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.41 8.57 L 20.37 15.52 L 15.43 20.41 L 8.48 20.37 L 3.59 15.43 L 3.63 8.48 L 8.57 3.59 L 15.52 3.63 Z" />
      {children}
    </svg>
  );
});

export default StructoStyle;
