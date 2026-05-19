import React from 'react';

export const iconData = {
  "id": "NarcisoKit",
  "name": "NarcisoKit",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.67 11.66 L 17.68 18.57 L 10.41 20.53 L 4.33 16.07 L 4.03 8.55 L 9.73 3.62 L 17.14 5.00 Z"
      }
    ]
  ]
};

export const NarcisoKit = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.67 11.66 L 17.68 18.57 L 10.41 20.53 L 4.33 16.07 L 4.03 8.55 L 9.73 3.62 L 17.14 5.00 Z" />
      {children}
    </svg>
  );
});

export default NarcisoKit;
