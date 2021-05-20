import React, { useEffect } from 'react';
import Head from 'next/head';
import Questions from "../../components/Questions"
import content from '../../examlify.content.json';
import { shufflesourceArray } from '../../lib/shuffle';


export default function Page({page}) {

  
  // Shuffle Questions
  var arr = page.questions;
  shufflesourceArray(arr); 
  
  return (
    <>
    <Head>
      <title>{page.title} | {page.title}</title>
    </Head>
    <h1>{page.title}</h1>
    <div>{page.subject}</div>
      <Questions 
      page={page}
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