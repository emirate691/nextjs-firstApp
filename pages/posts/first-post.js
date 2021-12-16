import Link from 'next/link'
export default function Prerendering() {
  return (
    <><main>
          <p className="description">

              <img src="/images/profile.jpg" height={144} // Desired size with correct aspect ratio
                  width={144} // Desired size with correct aspect ratio

                  alt="Suraj" />
              <Link href="/">
              <h3><strong><a>Shu Uesugi</a></strong> </h3>
              </Link>
              <div className="detail">
               <p>
                   <h2><strong>When to use Static Generation v.s. Server-side Rendering</strong><br/><span className="first-date">January 2, 2021</span></h2> 
               We recommend using <strong>Static Generation</strong> (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
               </p>
               <p>
                   You can use Static Generation for many types of pages, including:
                   <ul>
                       <li>Marketing pages</li>
                       <li>Blog posts</li>
                       <li>E-commerce product listings</li>
                       <li>Help and documentation</li>
                   </ul>
               </p>
              <p>You should ask yourself: "Can I pre-render this page <strong>ahead</strong> of a user's request?" If the answer is yes, then you should choose Static Generation.</p>



               <p>On the other hand, Static Generation is <strong>not </strong> a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

                </p>
                <p>In that case, you can use <strong> Server-Side Rendering</strong>. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.</p>
                 <p>
              <Link href="/">

                  <a>&larr;Back to home</a>
              </Link>
              </p>
               </div>
              
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
        .description h3 a{
            color: black;
            cursor:pointer;
            
        }
        .detail p{
          
          font-size: 1.2rem;
          font-wight: 500;
          padding-left:300px;
          padding-right: 300px;
          text-align: justify;
        }
        .detail h3{
           padding-left:300px;
          padding-right: 300px;
          font-size: 2rem
        }
        .detail h3 a{
            color: black;
        }
        .detail p h2{
            font-size:2.2rem;
            font-weight:700;
            
        }
        .detail p h2 .first-date{
            font-weight:100;
            font-size:1.3rem;
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