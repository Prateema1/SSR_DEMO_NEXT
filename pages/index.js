import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'


//Prebuilding the page using server side rendering
/* export async function getServerSideProps() {
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
     .then((data) => {
     })
     
  return {
    props: {
      //data
    }
  }
}
*/

export default function Home() {
  const [posts, setPosts] = useState([]);

//Fetching API Data Client Side
  useEffect(() => {
    setTimeout(async () =>{                 // Adding a delay to simulate slow network calls
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
    }, 3000)
  
  }, []);

  return (
    <div>
      {posts && posts.length === 0 ? (
        <div>Loading...</div>
      ) : (
        posts.map((post) => (
         <p key={post.id}>{post.id}: {post.title}</p>
      )))
        }
    </div>
  );
};
