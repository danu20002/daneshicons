import React from 'react';

export const iconData = {
  "id": "SelenoCricket",
  "name": "SelenoCricket",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.25 3.48 L 21.51 11.42 L 17.25 19.94 L 7.75 20.52 L 2.49 12.58 L 6.75 4.06 Z"
      }
    ]
  ]
};

export const SelenoCricket = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.25 3.48 L 21.51 11.42 L 17.25 19.94 L 7.75 20.52 L 2.49 12.58 L 6.75 4.06 Z" />
      {children}
    </svg>
  );
});

export default SelenoCricket;
