import React from 'react';

export const iconData = {
  "id": "TrajectoStatus",
  "name": "TrajectoStatus",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.79 10.83 L 8.41 3.44 L 17.62 4.61 L 21.21 13.17 L 15.59 20.56 L 6.38 19.39 Z"
      }
    ]
  ]
};

export const TrajectoStatus = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.79 10.83 L 8.41 3.44 L 17.62 4.61 L 21.21 13.17 L 15.59 20.56 L 6.38 19.39 Z" />
      {children}
    </svg>
  );
});

export default TrajectoStatus;
