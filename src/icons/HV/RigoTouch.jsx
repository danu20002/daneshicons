import React from 'react';

export const iconData = {
  "id": "RigoTouch",
  "name": "RigoTouch",
  "category": "HV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.43 13.95 L 14.53 20.28 L 6.10 18.33 L 3.57 10.05 L 9.47 3.72 L 17.90 5.67 Z"
      }
    ]
  ]
};

export const RigoTouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.43 13.95 L 14.53 20.28 L 6.10 18.33 L 3.57 10.05 L 9.47 3.72 L 17.90 5.67 Z" />
      {children}
    </svg>
  );
});

export default RigoTouch;
