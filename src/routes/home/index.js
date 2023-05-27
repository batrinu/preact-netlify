import { h } from "preact";
import { useEffect } from "preact/hooks";
import style from "./style";
import { usePrerenderData } from "@preact/prerender-data-provider";

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  console.log("🚀 ~ file: index.js:8 ~ Home ~ data:", data);

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.error) {
    return <div>Error loading data</div>;
  }

  const { heroTitle, heroDescription, aboutTitle, aboutDescription } =
    data?.data?.edges?.[0]?.details ?? {};
  const tourDates = data.tourDates.edges

  return (
    <div class={style.home} id="home">
      <section class={style.hero} id="hero">
        <h1 class={style.heroTitle}>{heroTitle}</h1>
        <p class={style.heroDescription}>{heroDescription}</p>
      </section>
      <section class={style.about} id="about">
        <h2 class={style.aboutTitle}>{aboutTitle}</h2>
        <p class={style.aboutDescription}>{aboutDescription}</p>
      </section>
      <div class={style.tourDates}>
        <h2>Tour Dates</h2>
        <ul>
          {tourDates.map(({details :{ title, date, location }}) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>Date: {date}</p>
              <p>Location: {location}</p>
            </li>
          ))}
        </ul>
      </div>
      <section class={style.gallery}>
        <h2>Gallery</h2>
        <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FSameAgainBarman%2Fvideos%2F746490810601053%2F&show_text=true&width=267&t=0" width="267" height="591" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
      </section>
    </div>
  );
};

export default Home;
