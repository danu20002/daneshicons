import React from 'react';

export const iconData = {
  "id": "OctoPuncture",
  "name": "OctoPuncture",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.43 19.23 L 13.88 17.42 L 11.44 21.66 L 9.50 17.16 L 4.77 18.43 L 6.58 13.88 L 2.34 11.44 L 6.84 9.50 L 5.57 4.77 L 10.12 6.58 L 12.56 2.34 L 14.50 6.84 L 19.23 5.57 L 17.42 10.12 L 21.66 12.56 L 17.16 14.50 Z"
      }
    ]
  ]
};

export const OctoPuncture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.43 19.23 L 13.88 17.42 L 11.44 21.66 L 9.50 17.16 L 4.77 18.43 L 6.58 13.88 L 2.34 11.44 L 6.84 9.50 L 5.57 4.77 L 10.12 6.58 L 12.56 2.34 L 14.50 6.84 L 19.23 5.57 L 17.42 10.12 L 21.66 12.56 L 17.16 14.50 Z" />
      {children}
    </svg>
  );
});

export default OctoPuncture;
