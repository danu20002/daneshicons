import React from 'react';

export const iconData = {
  id: "Volleyball",
  name: "Volleyball",
  category: "V",
  nodes: [["path",{"d":"M11 7a16 16 20 0 1 10.98 4.362"}],["path",{"d":"M12 12a13 13 0 0 1-8.66 5"}],["path",{"d":"M16.83 13.634a16 16 0 0 1-9.267 7.328"}],["path",{"d":"M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10"}],["path",{"d":"M8.17 15.366a16 16 0 0 1-1.713-11.69"}],["circle",{"cx":"12","cy":"12","r":"10"}]]
};

export const Volleyball = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M11 7a16 16 20 0 1 10.98 4.362" />
      <path d="M12 12a13 13 0 0 1-8.66 5" />
      <path d="M16.83 13.634a16 16 0 0 1-9.267 7.328" />
      <path d="M20.66 17A13 13 0 0 0 12 12a13 13 0 0 1 0-10" />
      <path d="M8.17 15.366a16 16 0 0 1-1.713-11.69" />
      <circle cx="12" cy="12" r="10" />
      {children}
    </svg>
  );
});

export default Volleyball;
