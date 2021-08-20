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
            Свадьба - целый спектакль, ивент, успех которого по законам
            театральных постановок определяется степенью разработки сценария,
            мастерством перевоплощения молодоженов в эталон влюбленности,
            преданности и верности друг другу. Конечно, определяющим на свадьбе
            будет великолепное настроение все присутсвующих, что в немалой
            степени зависит от тамады.
          </p>
        </article>
        <article className="service-info">
          <h4 className="info-title">День рождения</h4>
          <div id="photo2" className="event-photo"></div>
          <p>
            Это самый любимый праздник каждого, он как Новый год - чудесный,
            волнительный и незабываемый. На праздник приглашают близких
            родсвенников и друзей, приятелей и знакомых. Именинник принимает
            подарки и поздравления, радуется приятным сюрпризам и
            неожиданностям, которые приготовили для него гости. Самое главное на
            дне рождения - это праздничный торт со свечами и ответственный
            тамада, который возьмет на себя все хлопоты организации.
          </p>
        </article>
        <article className="service-info">
          <h4 className="info-title">Корпоратив</h4>
          <div id="photo3" className="event-photo"></div>
          <p>
            Как известно, нужно не только хорошо работать, но и хорошо отдыхать.
            Совместная встреча коллег способна сделать атмосферу в фирме более
            дружественной. Сегодня многие кафе и рестораны предлагают выездное
            обслуживание, и в офис доставят любые выбранные вами фирминные и
            традиционные блюда. А значит, организаванная таким образом встреча
            потребует от сотрудников минимального напряжения и сил. А провести
            праздник на соответсвующем уровне поможет тамада - приглашнный
            фирмой.
          </p>
        </article>
        <article className="service-info">
          <h4 className="info-title">Крестины</h4>
          <div id="photo4" className="event-photo"></div>
          <p>
            Самый теплый и красивый праздник для христиан всего мира.
            Празднование крестин проводят в семейном кругу, а праздничное меню
            всегда обильно и разнообразно. Ведущий также существенно важен для
            организации такого светлого события.
          </p>
        </article>
      </div>
      <p className="info-price">
        Цена организации и проведения мероприятия рассчитывается индивидуально в
        зависимости от Ваших пожеланий, а в среднем составляет от 1000₴ в час
      </p>
    </section>
  );
};

export default Info;