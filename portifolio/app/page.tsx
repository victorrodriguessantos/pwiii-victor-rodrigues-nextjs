"use client";

import { useEffect, useState } from "react";

const projetos = [
  {
    nome: "Snake Game",
    descricao: 'Recriação do famoso "jogo da cobrinha".',
    link: "https://beamish-starship-173732.netlify.app/",
    github: "https://github.com/victorrodriguessantos/snake_game",
  },
  {
    nome: "LUA&VIC",
    descricao: "Criação de um modelo de sitehot de uma plataforma de streaming.",
    link: "https://luavic.netlify.app/",
    github: "https://github.com/victorrodriguessantos/Lua-Vic",
  },
  {
    nome: "Plataforma de Gestão (Simples)",
    descricao: "Modelo de um ERP.",
    link: "https://tccbeta.netlify.app/",
  },
];

function getThumbnailUrl(url) {
  const base = "https://api.screenshotmachine.com";
  const key = "free";
  const dimension = "320x240";
  return `${base}?key=${key}&url=${encodeURIComponent(url)}&dimension=${dimension}`;
}

export default function Home() {
  const fullName = "Victor Rodrigues";
  const [displayedName, setDisplayedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName(displayedName + fullName[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [displayedName, index, fullName]);

  return (
    <>
      <nav style={styles.navbar}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#projetos" style={styles.navLink}>Projetos</a>
        <a href="#contato" style={styles.navLink}>Contato</a>
      </nav>

      <div style={styles.container}>
        {/* Home */}
        <section id="home" style={styles.homeSection}>
          <h1 style={styles.name}>
            {displayedName}
            <span style={styles.cursor}>|</span>
          </h1>
          <p style={styles.about}>
            Programador em Desenvolvimento, futuro FullStack, atualmente com experiencia em DevOps.
          </p>
          <div style={styles.buttonsContainer}>
            <a href="https://github.com/victorrodriguessantos" target="_blank" rel="noopener noreferrer" style={styles.button}>
              Github
            </a>
            <a href="http://www.linkedin.com/in/victorrodrigues2004" target="_blank" rel="noopener noreferrer" style={styles.button}>
              LinkedIn
            </a>
            <a href="https://wa.me/5511976863589" target="_blank" rel="noopener noreferrer" style={styles.button}>
              WhatsApp
            </a>
          </div>

          <div style={styles.carouselWrapper}>
  <div style={styles.carouselTrack}>
    {[
      "html", "css", "javascript", "sql", "node",
      "github", "php",
    ].map((tech, i) => (
      <img
        key={i}
        src={`/tecnologias/${tech}.png`}
        alt={tech}
        style={styles.techLogo}
      />
    ))}
  </div>
</div>

          

        </section>

        {/* Projetos */}
        {/* Projetos */}
<section id="projetos" style={styles.projectsSection}>
  <h2 style={styles.projectsTitle}>Projetos</h2>
  <div style={styles.projectsGrid}>
    {[
      {
        nome: "Snake Game",
        descricao: 'Recriação do famoso "jogo da cobrinha".',
        imagem: "/projetos/snake-game.png",
        link: "https://beamish-starship-173732.netlify.app/",
        github: "https://github.com/victorrodriguessantos/snake_game",
      },
      {
        nome: "LUA&VIC",
        descricao: "Criação de um modelo de sitehot de uma plataforma de streaming.",
        imagem: "/projetos/luavic.png",
        link: "https://luavic.netlify.app/",
        github: "https://github.com/victorrodriguessantos/Lua-Vic",
      },
      {
        nome: "Plataforma de Gestão (Simples)",
        descricao: "Modelo de um ERP.",
        imagem: "/projetos/erp.png",
        link: "https://tccbeta.netlify.app/",
      },
    ].map(({ nome, descricao, imagem, link, github }, i) => (
      <div key={i} style={styles.projectCard}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={imagem} alt={`Projeto ${nome}`} style={styles.projectImage} />
        </a>
        <h3 style={{ marginTop: "10px" }}>{nome}</h3>
        <p style={styles.projectDescription}>{descricao}</p>
        <div style={styles.projectButtons}>
          <a href={link} target="_blank" style={styles.projectButton}>Ver Projeto</a>
          {github && <a href={github} target="_blank" style={styles.projectButton}>GitHub</a>}
        </div>
      </div>
    ))}
  </div>
</section>


        {/* Contato */}
        <section id="contato" style={styles.contactSection}>
          <h2 style={styles.projectsTitle}>Entre em Contato</h2>
          <form action="https://formsubmit.co/victorrodrigues288@gmail.com" method="POST" style={styles.form}>
            <input type="text" name="name" placeholder="Seu nome" required style={styles.input} />
            <input type="email" name="email" placeholder="Seu e-mail" required style={styles.input} />
            <textarea name="message" placeholder="Sua mensagem..." rows="5" required style={styles.textarea}></textarea>
            <button type="submit" style={styles.button}>Enviar</button>
          </form>
        </section>
      </div>
    </>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    backgroundColor: "#1f1f1f",
    padding: "30px 30px",
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    zIndex: 1000,
    borderBottom: "1px solid #333",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
  container: {
    marginTop: "60px",
    backgroundColor: "#121212",
    color: "#fff",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
  },
  homeSection: {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  name: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
  cursor: {
    display: "inline-block",
    width: "1ch",
    animation: "blink 1s steps(2, start) infinite",
  },
  about: {
    maxWidth: "400px",
    margin: "20px 0",
    color: "#ccc",
  },
  buttonsContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "background-color 0.3s",
    cursor: "pointer",
    border: "none",
  },

carouselWrapper: {
  overflow: "hidden",
  width: "65%",
  marginTop: "400px",
},
carouselTrack: {
  display: "flex",
  gap: "40px",
  animation: "scrollTech 15s linear infinite",
},
techLogo: {
  height: "50px",
  width: "50px",
  objectFit: "contain",
  transition: "transform 0.3s",
},



  projectsSection: {
    padding: "60px 0",
    textAlign: "center",
  },
  projectsTitle: {
    fontSize: "2rem",
    marginBottom: "30px",
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  projectCard: {
    backgroundColor: "#1f1f1f",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
  },
  projectImage: {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  projectDescription: {
    fontSize: "0.95rem",
    color: "#ccc",
  },
  projectButtons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "10px",
  },
  projectButton: {
    backgroundColor: "#333",
    padding: "6px 12px",
    color: "#fff",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "600",
  },
  contactSection: {
    padding: "80px 0",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "700px",
    margin: "0 auto",
    gap: "50px",
  },
  input: {
    width: "100%",
    height: "40px",
    padding: "10px",
    gap: "10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    resize: "vertical",
  },
};
