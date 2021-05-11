import React, { useState } from 'react';
import Head from 'next/head';
// import styles from '../../styles/Home.module.css'
import Question from "../../components/question"
import content from '../../examlify.content.json';


export default function Page({page}) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [fruit, setAnswer] = useState();
  
  return (
    <>
    <Head>
      <title>{page.title} | {page.title}</title>
    </Head>
    <h1>{page.title}</h1>
    <div>{page.subject}</div>
    <Question props={page}/>
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