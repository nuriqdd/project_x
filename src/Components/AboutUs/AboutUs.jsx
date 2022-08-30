import React from "react";

const AboutUs = () => {
  return (
    <div className="aboutUs" style={{ dislay: "flex" }}>
      <div>
        <h3>
          Мы предлагаем оригинальные напитки от официальных поставщиков, продажи
          проходят под контролем ЕГАИС. Товары имеют сертификат соответствия и
          гарантию подлинности, подвергаются экспертизе и тщательному отбору. Мы
          следим за правильными условиями хранения напитков. Соблюдаем все
          законы РФ. Подробнее: https://winestyle.ru
        </h3>
        <p>
          вы получите покупку в срок понимаем ваши потребности и предложим
          лучший вариант подберем напиток именно вам или в подарок, оптимальный
          по цене и качеству посоветуем то, что понравится гостям, друзьям,
          партнерам и даже знатокам вин гарантируем подлинность напитков скидки
          постоянным покупателям особые условия корпоративным и оптовым клиентам
          Наши консультанты проходят обучение, имеют большой опыт работы в сфере
          вин и алкоголя. Публикуем проверенную информацию — полученную от
          производителей, винных хозяйств и независимых экспертов. Проводим
          дегустации. Следим за трендами, тенденциями и новостями виноделия. О
          самом интересном пишем в блог. Подробнее: https://winestyle.ru
        </p>
      </div>
      <div
        className="video-block"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <div>
          <iframe
            width="450"
            height="250"
            src="https://www.youtube.com/embed/ta8LKQ8fZHM"
            title="Lessons Learned From Opening a Wine Store"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            width="450"
            height="250"
            src="https://www.youtube.com/embed/Rmn1qQysSxI"
            title="A passion for wine. A booming hybrid business. | Seller spotlight"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
