import React from 'react';

export const iconData = {
  "id": "MateriCruise",
  "name": "MateriCruise",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.29 18.24 L 8.34 11.61 L 5.76 4.29 L 12.39 8.34 L 19.71 5.76 L 15.66 12.39 L 18.24 19.71 L 11.61 15.66 Z"
      }
    ]
  ]
};

export const MateriCruise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.29 18.24 L 8.34 11.61 L 5.76 4.29 L 12.39 8.34 L 19.71 5.76 L 15.66 12.39 L 18.24 19.71 L 11.61 15.66 Z" />
      {children}
    </svg>
  );
});

export default MateriCruise;
