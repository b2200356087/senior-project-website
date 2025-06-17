import React from 'react';

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Our Senior Project</h1>

      <section>
        <h2>Downloads</h2>
        <ul>
          <li>
          <a
          //  href={process.env.PUBLIC_URL + '/assets/hypergraph_star_coloring.pdf'}
        href={"https://b2200356087.github.io/senior-project-website/assets/hypergraph_star_coloring.pdf"}
        download>📄 Full write‑up (PDF)
  </a>
          </li>
          <li>
            <a href={process.env.PUBLIC_URL + '/assets/poster.pdf'} download>
              🖼 Poster (PDF)
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>Demo Video</h2>
        <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/BT4WzyT2g8k"
  title="Demo video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>

      </section>
    </div>
  );
}

export default App;
