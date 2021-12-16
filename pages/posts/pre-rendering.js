import Link from 'next/link'
export default function Prerendering() {
  return (
    <><main>
          <p className="description">

              <img src="/images/profile.jpg" height={144} 
                  width={144} 

                  alt="Suraj" />
              <h4><strong>Shu Uesugi</strong> </h4>
              <div className="detail">
               
               <p><h2><strong>Two Forms of Pre-rendering</strong><br/><span className="first-date">January 1, 2021</span></h2></p>
               <p>Next.js has two forms of pre-rending:<strong>Static Generation and Server-Side Rendering</strong>
               .The difference is in <strong>when</strong> it generates the HTML for pages.
               </p>
               <p><ul>
               <li> <strong>Static Generation</strong> is the pre-rendering method that generate the HTML at <strong>build time</strong> . The pre-rendered HTML is then reused on each request</li>
               <li> <strong>Server-side Rendering</strong> is the pre-rendering method that generate HTML on  <strong> each request</strong></li>
               </ul>
               </p>
               <p>importantly,Nextjs let you <strong>choose</strong> which pre-rendering form to use or each page. You can a create "hybrid" Next.js app by using static generation for most pages and using server-side rendering for others</p>
              <p>
              <Link href="/">

                  <a>&larr;Back to home</a>
              </Link>
              </p>
               </div>
               
          </p>
         
            <p>
              
              </p>
          
      </main><style jsx>{`.container {
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

        

        .detail p{
          
          font-size:5px;
          font-wight: 500;
          padding-left:300px;
          padding-right: 300px;
          text-align: justify;
    
          
        }
        .detail p h2{
            font-size:2.2rem;
            font-weight:900;
            color:black
        }
        .detail p h2 .first-date{
            font-weight:100;
            font-size:1.5rem;
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
        .detail p{
          
          font-size: 1.5rem;
          font-wight: 500;
          padding-left:300px;
          padding-right: 300px;
        }
        .detail h3{
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

          
        
        }
          
      
      `}</style></>
     

    
  )
}