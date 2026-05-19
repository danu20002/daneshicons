import React from 'react';

export const iconData = {
  "id": "TricloNylon",
  "name": "TricloNylon",
  "category": "MU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.38 12.00 a 9.62 9.62 0 1 0 19.24 0 a 9.62 9.62 0 1 0 -19.24 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 6.23 a 7.70 2.308968021310866 0 1 0 15.39 0 a 7.70 2.308968021310866 0 1 0 -15.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.57 10.08 a 9.43 2.827896742307668 0 1 0 18.85 0 a 9.43 2.827896742307668 0 1 0 -18.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.57 13.92 a 9.43 2.827896742307668 0 1 0 18.85 0 a 9.43 2.827896742307668 0 1 0 -18.85 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.30 17.77 a 7.70 2.3089680213108656 0 1 0 15.39 0 a 7.70 2.3089680213108656 0 1 0 -15.39 0"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.38 A 2 2 0 0 0 12.00 21.62"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.38 A 2 2 0 0 1 12.00 21.62"
      }
    ]
  ]
};

export const TricloNylon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.38 12.00 a 9.62 9.62 0 1 0 19.24 0 a 9.62 9.62 0 1 0 -19.24 0" />
      <path d="M 4.30 6.23 a 7.70 2.308968021310866 0 1 0 15.39 0 a 7.70 2.308968021310866 0 1 0 -15.39 0" />
      <path d="M 2.57 10.08 a 9.43 2.827896742307668 0 1 0 18.85 0 a 9.43 2.827896742307668 0 1 0 -18.85 0" />
      <path d="M 2.57 13.92 a 9.43 2.827896742307668 0 1 0 18.85 0 a 9.43 2.827896742307668 0 1 0 -18.85 0" />
      <path d="M 4.30 17.77 a 7.70 2.3089680213108656 0 1 0 15.39 0 a 7.70 2.3089680213108656 0 1 0 -15.39 0" />
      <path d="M 12.00 2.38 A 2 2 0 0 0 12.00 21.62" />
      <path d="M 12.00 2.38 A 2 2 0 0 1 12.00 21.62" />
      {children}
    </svg>
  );
});

export default TricloNylon;
