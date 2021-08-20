import photo from './assets/about.jpg';
import './About.scss';
const About = () => {
  return (
    <section className="about">
      <div className="about-info">
        <div className="about-text">
          <div className="about-title">
            <span className="cap-let">H</span>емного о себе
          </div>
          <p>
            Приветствую, <strong>я - ведущий (тамада) Виталий Задорнов </strong>
            ! Много лет занимаюсь организацией и проведением, музыкальным
            оформлением праздничных мероприятий.
          </p>
          <p>
            Роль тамады на празднике очень важна - на эту роль вполне может
            подойти кто-то из друзей, родственников или коллег. НО независимо от
            вашего выбора этому человеку необходимо быть остроумным и
            артистичным, с четкой дикцией и горомким голосом. Импровизация и
            хорошая память также являются необходимыми качествами ведущего.
          </p>
          <p>Мое мнение каким должен быть ведущий :</p>
          <ul className="about-list">
            <li className="list-item">
              Саблюдать дистанцию и не допускать панибратства
            </li>
            <li className="list-item">
              Предоставлять слово всем желающим, если им есть что сказать
            </li>
            <li className="list-item">Обладать грамотной речью</li>
            <li className="list-item">
              Не говорить слишком часто и чересчур долго
            </li>
            <li className="list-item">
              Не употреблять нецензурные выражения и ненормативную лексику
            </li>
          </ul>
          <p>
            Согласны с вышеперечисленным ? Я - тот ведущий который проведет ваше
            мероприятие на высшем уровне. Звоните!
          </p>
        </div>

        <div className="about-photo">
          <img src={photo} alt="photo" className="main-photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
