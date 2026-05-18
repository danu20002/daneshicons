import React from 'react';

export const iconData = {
  id: "ThermometerSun",
  name: "ThermometerSun",
  category: "T",
  nodes: [["path",{"d":"M12 2v2"}],["path",{"d":"M12 8a4 4 0 0 0-1.645 7.647"}],["path",{"d":"M2 12h2"}],["path",{"d":"M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"}],["path",{"d":"m4.93 4.93 1.41 1.41"}],["path",{"d":"m6.34 17.66-1.41 1.41"}]]
};

export const ThermometerSun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M12 2v2" />
      <path d="M12 8a4 4 0 0 0-1.645 7.647" />
      <path d="M2 12h2" />
      <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m6.34 17.66-1.41 1.41" />
      {children}
    </svg>
  );
});

export default ThermometerSun;
