"use client";
import { Dropdown } from "flowbite-react";

function ProjectsDropdown() {
  return (
    <Dropdown
      label="Dropdown button"
      dismissOnClick={false}
      className="bg-red-200 relative"
    >
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}

export default ProjectsDropdown;
