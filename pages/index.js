import Head from 'next/head';
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
        
          <img src="/images/profile.jpg"  height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          
          alt="Your Name" />
           <h1><strong>Shu Uesugi</strong> </h1>
          
        </p>
       
         <div className="app">
        
        <p>Hello, i'm <strong>Shu</strong>. i'm a software engineer and a translator (English/Japaness). 
        you can contact me on <span>
        
         <a href="https://twitter.com"
          
        >
          Twitter


        </a>
        </span>
        </p>
        <p>
         ( This is a sample website- you'll be building a site like this in <br/><span>
          <a href="https://nextjs.org/learn/basics/create-nextjs-app">
          our Nextjs tutorial.

        
        </a>
        
         )
         </span>
        </p>
        <h3><strong>Blog</strong></h3>
        <p>
          <Link href="/posts/first-post">

          <a>When to use Static Generation v.s Server Side Rendering</a></Link><br/>
          <span className="date">January 1, 2021</span></p>
       
       
         <p>
         <Link href="/posts/pre-rendering">
           <a>Two Forms of Pre-rendering</a>
             </Link><br/><span className="date">January 1, 2021</span></p>
         
       
    </div>
          
            
           
         

         
          
        
      </main>

     

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        

        

        

        a {
          color: dodgerblue;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        .description img{
          border-radius: 100%;
        
        }
        .description h1{
          font-weight: bold;
          font-size: 2.87rem;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

        }
        .app p{
          
          font-size: 1.5rem;
          font-wight: 500;
          padding-left:300px;
          padding-right: 300px;
        }
        .app h3{
           padding-left:300px;
          padding-right: 300px;
          font-size: 2rem
        }
        .date{
          color:grey;
          font-size: 1.0rem
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
