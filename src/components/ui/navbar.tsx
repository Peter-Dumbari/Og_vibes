import React from "react";
import Notice from "./notice";
import { Button } from "@material-tailwind/react";

export default function Navbar() {
  return (
    <div className="flex">
      <section className="notice">
        <Notice
          title="Breaking News"
          message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quos culpa doloremque, maiores facilis necessitatibus!"
        />
      </section>

      <Button>test</Button>
    </div>
  );
}
