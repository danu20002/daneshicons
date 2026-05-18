import React from 'react';

export const iconData = {
  id: "UserSquare2",
  name: "UserSquare2",
  category: "U",
  nodes: [["path",{"d":"M18 21a6 6 0 0 0-12 0"}],["circle",{"cx":"12","cy":"11","r":"4"}],["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}]]
};

export const UserSquare2 = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M18 21a6 6 0 0 0-12 0" />
      <circle cx="12" cy="11" r="4" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      {children}
    </svg>
  );
});

export default UserSquare2;
