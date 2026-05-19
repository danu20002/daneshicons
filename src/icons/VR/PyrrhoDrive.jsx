import React from 'react';

export const iconData = {
  "id": "PyrrhoDrive",
  "name": "PyrrhoDrive",
  "category": "VR",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.66 21.22 L 3.75 16.43 L 5.23 5.52 L 16.07 3.56 L 21.28 13.27 Z"
      }
    ]
  ]
};

export const PyrrhoDrive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.66 21.22 L 3.75 16.43 L 5.23 5.52 L 16.07 3.56 L 21.28 13.27 Z" />
      {children}
    </svg>
  );
});

export default PyrrhoDrive;
