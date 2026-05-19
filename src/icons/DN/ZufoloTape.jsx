import React from 'react';

export const iconData = {
  "id": "ZufoloTape",
  "name": "ZufoloTape",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.38 4.24 L 10.27 6.68 L 12.81 1.83 L 14.54 7.02 L 19.76 5.38 L 17.32 10.27 L 22.17 12.81 L 16.98 14.54 L 18.62 19.76 L 13.73 17.32 L 11.19 22.17 L 9.46 16.98 L 4.24 18.62 L 6.68 13.73 L 1.83 11.19 L 7.02 9.46 Z"
      }
    ]
  ]
};

export const ZufoloTape = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.38 4.24 L 10.27 6.68 L 12.81 1.83 L 14.54 7.02 L 19.76 5.38 L 17.32 10.27 L 22.17 12.81 L 16.98 14.54 L 18.62 19.76 L 13.73 17.32 L 11.19 22.17 L 9.46 16.98 L 4.24 18.62 L 6.68 13.73 L 1.83 11.19 L 7.02 9.46 Z" />
      {children}
    </svg>
  );
});

export default ZufoloTape;
