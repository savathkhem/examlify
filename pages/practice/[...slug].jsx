import React from 'react';
import Head from 'next/head';
import Questions from "../../components/Questions"
import content from '../../examlify.content.json';


export default function Page({page}) {


  // State: Correct = ""
  // State: Incorrect = ""
  // State: TotalQuestions = ""

  // const [answerState, setAnswer] = useState("")
  // const handleClick = (index) => setAnswer(index)
  const answerArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  
  return (
    <>
    <Head>
      <title>{page.title} | {page.title}</title>
    </Head>
    <h1>{page.title}</h1>
    <div>{page.subject}</div>
      <Questions 
      page={page}
      answerArr={answerArr}
      />
  </>
  );
}


export async function getStaticPaths() {
  const paths = content.pages.map(page => {

    const slug = page.path.split('/').slice(1);
    return {params: {slug}};
  });
  return {paths, fallback: true};
  
}

export async function getStaticProps({params}) {
  const currentPath = `/${params.slug.join('/')}`;
  const page = content.pages.find(page => page.path === currentPath) || {notfound: true};
  return {props: {page}};
}