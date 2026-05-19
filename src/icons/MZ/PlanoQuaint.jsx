import React from 'react';

export const iconData = {
  "id": "PlanoQuaint",
  "name": "PlanoQuaint",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.97 6.72 L 13.06 3.27 L 20.09 8.55 L 19.03 17.28 L 10.94 20.73 L 3.91 15.45 Z"
      }
    ]
  ]
};

export const PlanoQuaint = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.97 6.72 L 13.06 3.27 L 20.09 8.55 L 19.03 17.28 L 10.94 20.73 L 3.91 15.45 Z" />
      {children}
    </svg>
  );
});

export default PlanoQuaint;
