import React from 'react';

export const iconData = {
  "id": "PigmentOutline",
  "name": "PigmentOutline",
  "category": "FA",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.44 4.46 L 11.31 8.46 L 15.25 2.55 L 14.72 9.63 L 21.81 10.09 L 15.41 13.17 L 18.56 19.54 L 12.69 15.54 L 8.75 21.45 L 9.28 14.37 L 2.19 13.91 L 8.59 10.83 Z"
      }
    ]
  ]
};

export const PigmentOutline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.44 4.46 L 11.31 8.46 L 15.25 2.55 L 14.72 9.63 L 21.81 10.09 L 15.41 13.17 L 18.56 19.54 L 12.69 15.54 L 8.75 21.45 L 9.28 14.37 L 2.19 13.91 L 8.59 10.83 Z" />
      {children}
    </svg>
  );
});

export default PigmentOutline;
