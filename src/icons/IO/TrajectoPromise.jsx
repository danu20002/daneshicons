import React from 'react';

export const iconData = {
  "id": "TrajectoPromise",
  "name": "TrajectoPromise",
  "category": "IO",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.80 7.51 L 11.99 21.00 L 4.21 7.49 Z"
      }
    ]
  ]
};

export const TrajectoPromise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.80 7.51 L 11.99 21.00 L 4.21 7.49 Z" />
      {children}
    </svg>
  );
});

export default TrajectoPromise;
