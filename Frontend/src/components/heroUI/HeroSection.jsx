import React, { useState } from "react";
import deletex from "../../assets/delete1.png";
import editx from "../../assets/edit1.png";
import add from "../../assets/add.png";
const HeroSection = () => {
  const [name, setName] = useState("");
  const people = [
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
      phoneNumber: "123-456-7890",
    },
    {
      name: "Michael Foster",
      email: "michael.foster@example.com",
      role: "Co-Founder / CTO",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
      phoneNumber: "123-456-7891",
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      role: "Business Relations",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
      phoneNumber: "123-456-7892",
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
      phoneNumber: "123-456-7893",
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: "3h ago",
      lastSeenDateTime: "2023-01-23T13:23Z",
      phoneNumber: "123-456-7894",
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      lastSeen: null,
      phoneNumber: "123-456-7895",
    },
  ];

  return (
    <ul role="list" className="divide-y divide-gray-100">
      <input
        className=" w-full"
        placeholder="search here"
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {people
        .filter((item) => {
          return name === ""
            ? item
            : item.name.toLowerCase().includes(name.toLowerCase());
        })
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex gap-8 items-center">
                <p className="text-m font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-s leading-5 text-black">
                  {person.email}
                </p>
                <p className="mt-1 truncate text-s leading-5 text-black">
                  {person.phoneNumber}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:items-end flex-row gap-3 items-center">
              <img
                src={deletex}
                className="text-sm leading-6 text-gray-900 h-5 w-5 cursor-pointer"
              />
              <img
                src={editx}
                className="text-sm leading-6 text-gray-900 h-5 w-5 cursor-pointer"
              />
            </div>
          </li>
        ))}
      <li key={404} className="flex gap-x-6 py-5 items-center justify-center">
        <div className="flex min-w-0 gap-x-4 items-center justify-center cursor-pointer">
          <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={add}
            alt=""
          />
        </div>
      </li>
    </ul>
  );
};

export default HeroSection;
