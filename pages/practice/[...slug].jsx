import Head from 'next/head';
import styles from '../../styles/Home.module.css'
import { Card, CardTitle, CardSubtitle, Row, Table, Button, Alert, Progress, Col } from 'reactstrap';
import content from '../../examlify.content.json';



export default function Page({page}) {
  
  return (
      <>
        <Head>
          <title>{page.title} | {page.title}</title>
        </Head>
        <h1>{page.title}</h1>
        <div>{page.subject}</div>

        {/* MAPPING THROUGH QUESTIONS */}
        {page.questions.map((q, index) => (
        <div>
          <p key={index}>
            {q.question.title}
          </p>
          {q.question.answers.map((a, index) =>(
            <ul key={index}>
              {a.answer}
            </ul>
          ))}
        </div>
        ))}
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