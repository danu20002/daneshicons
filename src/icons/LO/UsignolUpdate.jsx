import React from 'react';

export const iconData = {
  "id": "UsignolUpdate",
  "name": "UsignolUpdate",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.93 9.39 L 17.44 12.59 L 20.16 16.47 L 15.43 16.27 L 14.61 20.93 L 11.41 17.44 L 7.53 20.16 L 7.73 15.43 L 3.07 14.61 L 6.56 11.41 L 3.84 7.53 L 8.57 7.73 L 9.39 3.07 L 12.59 6.56 L 16.47 3.84 L 16.27 8.57 Z"
      }
    ]
  ]
};

export const UsignolUpdate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.93 9.39 L 17.44 12.59 L 20.16 16.47 L 15.43 16.27 L 14.61 20.93 L 11.41 17.44 L 7.53 20.16 L 7.73 15.43 L 3.07 14.61 L 6.56 11.41 L 3.84 7.53 L 8.57 7.73 L 9.39 3.07 L 12.59 6.56 L 16.47 3.84 L 16.27 8.57 Z" />
      {children}
    </svg>
  );
});

export default UsignolUpdate;
