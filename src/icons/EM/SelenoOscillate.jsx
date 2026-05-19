import React from 'react';

export const iconData = {
  "id": "SelenoOscillate",
  "name": "SelenoOscillate",
  "category": "EM",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.14 L 2.50 8.57 L 3.00 9.86 L 3.50 10.88 L 4.00 11.53 L 4.50 11.76 L 5.00 11.53 L 5.50 10.88 L 6.00 9.86 L 6.50 8.57 L 7.00 7.14 L 7.50 5.72 L 8.00 4.43 L 8.50 3.41 L 9.00 2.75 L 9.50 2.53 L 10.00 2.75 L 10.50 3.41 L 11.00 4.43 L 11.50 5.72 L 12.00 7.14 L 12.50 8.57 L 13.00 9.86 L 13.50 10.88 L 14.00 11.53 L 14.50 11.76 L 15.00 11.53 L 15.50 10.88 L 16.00 9.86 L 16.50 8.57 L 17.00 7.14 L 17.50 5.72 L 18.00 4.43 L 18.50 3.41 L 19.00 2.75 L 19.50 2.53 L 20.00 2.75 L 20.50 3.41 L 21.00 4.43 L 21.50 5.72 L 22.00 7.14"
      }
    ]
  ]
};

export const SelenoOscillate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.14 L 2.50 8.57 L 3.00 9.86 L 3.50 10.88 L 4.00 11.53 L 4.50 11.76 L 5.00 11.53 L 5.50 10.88 L 6.00 9.86 L 6.50 8.57 L 7.00 7.14 L 7.50 5.72 L 8.00 4.43 L 8.50 3.41 L 9.00 2.75 L 9.50 2.53 L 10.00 2.75 L 10.50 3.41 L 11.00 4.43 L 11.50 5.72 L 12.00 7.14 L 12.50 8.57 L 13.00 9.86 L 13.50 10.88 L 14.00 11.53 L 14.50 11.76 L 15.00 11.53 L 15.50 10.88 L 16.00 9.86 L 16.50 8.57 L 17.00 7.14 L 17.50 5.72 L 18.00 4.43 L 18.50 3.41 L 19.00 2.75 L 19.50 2.53 L 20.00 2.75 L 20.50 3.41 L 21.00 4.43 L 21.50 5.72 L 22.00 7.14" />
      {children}
    </svg>
  );
});

export default SelenoOscillate;
