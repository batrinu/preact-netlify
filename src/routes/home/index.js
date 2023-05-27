import { h } from "preact";
import { useEffect } from 'preact/hooks';
import style from "./style";
import { usePrerenderData } from '@preact/prerender-data-provider';

const Home = (props) => {
  const [data, isLoading] = usePrerenderData(props);
  console.log("🚀 ~ file: index.js:8 ~ Home ~ data:", data)

  useEffect(() => {
    if (window !== undefined && window.location.href.includes('#invite_token')) {
      const { href } = window.location;
      window.location.href= `${href.substring(0, href.indexOf('#'))}admin${href.substring(href.indexOf('#'))}`;
    }
  },[]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.error) {
    return <div>Error loading data</div>;
  }

  const { heroTitle, heroDescription, aboutTitle, aboutDescription } = data?.data?.edges?.[0]?.details ?? {};

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
	</div>
  );
};

export default Home;
