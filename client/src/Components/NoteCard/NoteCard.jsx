import React from "react";
import "./NoteCard.scss";
import Editpng from "../../assets/images/pen.png";
import Binpng from "../../assets/images/bin.png";
import TextField from "@mui/material/TextField";
const NoteCard = () => {
  return (
    <div className="notecard">
      <div className="notecard_header">
        <div className="notecard_header_left">
          <h3>My test1 Note</h3>
          <p>20/10/2022 4:35 pm</p>
        </div>
        <div className="notecard_header_right">
          <img src={Editpng} alt="" />
          <img src={Binpng} alt="" />
        </div>
      </div>
      <div className="line"></div>
      <ul className="notecard_crumbs">
        <li>
          sport<span> x</span>
        </li>
        <li>
          fashion<span> x</span>
        </li>
      </ul>
      <div className="notecard_body">
        <div className="notecard_body_text">
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          asperiores alias optio ratione facere nemo tempora harum iste minus
          minima repudiandae, modi temporibus similique! Perferendis sit dolores
          veniam deserunt quisquam unde deleniti eos architecto hic nulla,
          ullam, eius, sequi saepe ab asperiores explicabo optio ipsa ad rem
          laborum esse dicta quia! Laboriosam ullam doloremque, inventore
          voluptatibus numquam iusto nam deserunt maiores atque repudiandae
          voluptates nobis, at cum deleniti dignissimos fuga maxime odio modi.
          Enim quasi tenetur cupiditate soluta deserunt, consectetur ducimus at
          autem odio velit nostrum nobis commodi suscipit. Quo incidunt suscipit
          id repudiandae repellat voluptatum rem officia fugit nesciunt!`.slice(
            0,
            500
          ) + `...`}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
