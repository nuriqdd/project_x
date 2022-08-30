import React from "react";

const Home = () => {
  return (
    <div className="fonhome">
      <div className="wrapper">
        <div className="homepage">
          <h1 className="title" style={{ color: "gold" }}>
            History Wine
          </h1>
          <p className="hometext" style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            suscipit fugiat sunt a aliquam labore vero rem est tenetur quas.
            Mollitia nesciunt aut tempore blanditiis expedita quis, modi sed
            illum ad, non necessitatibus architecto molestias earum fugiat illo
            vitae ipsa vel corrupti rem amet, ex eius! Maxime ducimus expedita
            earum! Soluta minima quibusdam, facere nam eligendi officiis harum
            saepe ullam quaerat dicta minus tenetur consequuntur commodi
            laudantium dolore consequatur! Placeat nihil exercitationem ab
            tenetur temporibus quod voluptate cupiditate possimus ut autem
            assumenda rerum, eveniet dolor inventore eum quos aliquid,
            consequuntur culpa! Nostrum quasi, aliquid deserunt aperiam ab
          </p>
          <div
            className="imgblock"
            style={{ display: "flex", justifyConent: "space-between" }}
          >
            <img
              width={500}
              height={400}
              src="https://s.wine.style/images_raw/pages/wine-feature-image-600x4001545772580.jpg"
              alt="wine"
            />
            <img
              width={500}
              height={400}
              src="https://s.wine.style/images_raw/pages/a-magyar-bor-tortenete1545772837.jpg"
              alt="wine"
            />
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
            explicabo in ipsum similique ab tempore! Beatae fuga accusamus
            voluptatibus dignissimos maiores repudiandae fugiat ipsum voluptates
            cum quaerat est perferendis placeat itaque animi sapiente, dicta ut
            repellat sed sequi totam voluptatum sunt tempore. Cumque ut
            perspiciatis optio esse saepe commodi cupiditate animi non. Saepe
            distinctio sint minus delectus consequatur, facere hic veritatis
            maxime exercitationem obcaecati! Praesentium et consequuntur hic
            debitis accusantium, ea nemo dolorem consequatur ex officia eum
            impedit iusto optio! Voluptatum fuga distinctio beatae dignissimos
            ea quidem aut rerum officiis vel eligendi accusantium ut, suscipit
            reprehenderit. Nihil veritatis nisi quidem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
