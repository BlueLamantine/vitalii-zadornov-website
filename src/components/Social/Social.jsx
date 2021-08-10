import './Social.scss';
const Social = () => {
  return (
    <>
      <div className="social">
        <p className="social-text">Я в соцсетях</p>
        <div className="social-links">
          <div className="social-link">
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook"
                className="svg-inline--fa fa-facebook fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="social-link">
            <a href="#">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                className="svg-inline--fa fa-instagram fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="social-link">
            <a href="#">
              <svg
                viewBox="0 0 100 100"
                version="1.1"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/1999/xlink"
              >
                <path
                fill="currentColor"
                d="M65.8600422,30.5 C73.1441765,30.5 78,37.6095796 78,44.6092213 C78,54.5222167 66.7770937,63.6937247 57.9270281,69.6137607 C56.1918933,68.0101704 53.6079471,65.6801202 51.6142181,64.1176578 C54.6004219,61.6571058 57.5191836,59.3270555 59.5695798,57.2955776 C65.0870532,51.8267615 66.0815233,48.2181891 66.0815233,45.3740409 C66.0815233,42.3119943 62.9907645,38.9217158 59.2387549,38.9217158 C53.7208825,38.9217158 50.7765806,42.7208999 49.9177926,43.7459322 C49.2230204,42.7208999 46.2787184,38.9217158 40.7612451,38.9217158 C37.0092355,38.9217158 33.9184767,42.3119943 33.9184767,45.3740409 C33.9184767,48.2181891 34.9125477,51.8267615 40.4304202,57.2955776 C46.6207172,63.429162 60.718089,72.27402 60.718089,79.2554705 C60.718089,86.6224946 53.1613933,89 50.0470897,89 C46.932387,89 39.2815119,87.3730776 39.2815119,79.2554705 C39.2815119,77.1259185 40.5956331,74.8219686 42.5945499,72.4745182 C44.1888148,73.4168993 46.6143321,74.6111885 47.8889459,75.9090881 C41.6016761,82.9490668 46.8493814,86.1902568 50.0215495,86.2044934 C53.233225,86.1902568 59.2858446,81.9987764 52.0292458,75.8517464 C48.1998176,72.6066018 22,59.6647784 22,44.6092213 C22,37.6095796 26.8554244,30.5 34.1399578,30.5 C42.8200217,30.5 49.2126447,37.1492642 50,38.0050396 C50.7881535,37.1492642 57.1807765,30.5 65.8600422,30.5 Z M56.5339165,11 C61.1733056,11 64.9333333,14.7422178 64.9333333,19.3569495 C64.9333333,23.9716811 61.1733056,27.7142857 56.5339165,27.7142857 C51.8929723,27.7142857 48.1333333,23.9716811 48.1333333,19.3569495 C48.1333333,14.7422178 51.8929723,11 56.5339165,11 Z M43.7989879,11 C45.7794185,11 47.6006388,11.6385285 49.0666667,12.7028716 C47.3286883,14.427788 46.2582617,16.7722821 46.2582617,19.3569495 C46.2582617,21.9423904 47.3286883,24.286111 49.0666667,26.0110274 C47.6006388,27.0749837 45.7794185,27.7142857 43.7989879,27.7142857 C38.9758048,27.7142857 35.0666667,23.9716811 35.0666667,19.3569495 C35.0666667,14.7422178 38.9758048,11 43.7989879,11 Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
