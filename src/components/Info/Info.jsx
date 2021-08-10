import './Info.scss';
const Info = () => {
  return (
    <section className="info">
      <div className="section-info-header">
        <span className="section-title">Услуги</span>
        <span className="section-sub-title">
          <strong>Организую</strong> и <strong>проведу</strong> Ваше мероприятие
          на высшем уровне!
        </span>
      </div>
      <div className="section-info-wrap">
        <article className="service-info">
          <h4 className="info-title">Свадьба</h4>
          <div id="photo1" className="event-photo"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            voluptas voluptatibus! Dignissimos architecto distinctio sapiente
          </p>
          
        </article>
        <article className="service-info">
          <h4 className="info-title">День рождения</h4>
          <div id="photo2" className="event-photo"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            voluptas voluptatibus! Dignissimos architecto distinctio sapiente
          </p>
          
        </article>
        <article className="service-info">
          <h4 className="info-title">Корпоратив</h4>
          <div id="photo3" className="event-photo"></div>
          <p>
            Dignissimos architecto distinctio sapiente nisi culpa, laboriosam,
            commodi magnam quisquam dolore tempore reprehenderit blanditiis
            repellat qui autem! Quasi, adipisci.
          </p>
         
        </article>
        <article className="service-info">
          <h4 className="info-title">Крестины</h4>
          <div id="photo4" className="event-photo"></div>
          <p>
            Adxde laboriosam, commodi magnam quisquam dolore tempore
            reprehenderit blanditiis repellat qui autem! Quasi, adipisci.
          </p>
        </article>
      </div>
      <p className="info-price">Цены от 200₴ в час!</p>
    </section>
  );
};

export default Info;
